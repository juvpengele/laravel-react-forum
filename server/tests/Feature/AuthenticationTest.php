<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Validation\ValidationException;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function a_guest_can_be_registered()
    {
        $credentials = [
            'name'                  => $this->faker->name,
            'email'                 => $this->faker->email,
            'password'              => 'secret',
            'password_confirmation' => 'secret'
        ];

        $response = $this->post(route('api.auth.register'), $credentials)->json();

        $this->assertCount(1, User::all());
        $this->assertNotNull($response['data']['access_token']);

    }

    /** @test */
    public function to_be_registered_a_guest_need_a_not_used_email()
    {
        $this->expectException(ValidationException::class);

        $email = $this->faker->email;
        create(User::class, ['email' => $email]);

        $credentials = [
            'name'      => $this->faker->name,
            'email'     => $email,
            'password'  => 'secret',
            'password_confirmation' => 'secret'
        ];

        $response = $this->post(route('api.auth.register'), $credentials)->json();
        $this->assertContains('email', $response['errors']);

    }

    /** @test */
    public function to_be_registered_a_guest_must_confirm_the_password()
    {
        $this->expectException(ValidationException::class);

        $email = $this->faker->email;
        create(User::class, ['email' => $email]);

        $credentials = [
            'name'      => $this->faker->name,
            'email'     => $email,
            'password'  => 'secret',
            'password_confirmation' => 'secret2'
        ];

        $this->post(route('api.auth.register'), $credentials)->json();

    }
}
