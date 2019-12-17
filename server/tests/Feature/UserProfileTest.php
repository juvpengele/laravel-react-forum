<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserProfileTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    protected $auth;

    public function setUp(): void
    {
        parent::setUp();

        $this->auth = create(User::class,["name" =>"John Doe", "password" => bcrypt("secret")]);
    }

    /** @test */
    public function a_user_can_update_his_avatar()
    {
        Storage::fake("public");
        $john = create(User::class);

        $this->postJson("/api/me/avatar?token={$john->token}", [
            "avatar" => UploadedFile::fake()->image("avatar.png")
        ]);

        $this->assertNotEquals("default.png", $john->fresh()->profile_picture);
        Storage::disk("public")->assertExists("avatars/".$john->fresh()->profile_picture);
    }

    /** @test */
    public function if_a_user_updates_his_avatar__the_previous_avatar_is_removed()
    {
        Storage::fake("public");
        $john = create(User::class);

        $this->postJson("/api/me/avatar?token={$john->token}", [
            "avatar" => UploadedFile::fake()->image("avatar.png")
        ]);

        $previousProfilePicture = $john->fresh()->profile_picture;

        $this->postJson("/api/me/avatar?token={$john->token}", [
            "avatar" => UploadedFile::fake()->image("avatar.png")
        ]);

        Storage::disk("public")->assertMissing("avatars/".$previousProfilePicture);
    }

    /** @test */
    public function a_user_can_remove_his_profile_picture()
    {
        Storage::fake("public");
        $john = create(User::class);

        $this->postJson("/api/me/avatar?token={$john->token}", [
            "avatar" => UploadedFile::fake()->image("avatar.png")
        ]);

        $previousProfilePicture = $john->fresh()->profile_picture;

        $this->deleteJson("/api/me/avatar?token={$john->token}");

        Storage::disk("public")->assertMissing("avatars/".$previousProfilePicture);
        $this->assertEquals("default.png", $john->fresh()->profile_picture);
    }

    /** @test */
    public function updating_an_avatar_requires_an_image()
    {
        $this->withExceptionHandling();

        $john = create(User::class);
        $response = $this->postJson("/api/me/avatar?token={$john->token}", ["avatar" => ""]);

        $jsonResponse = $response->json();

        $this->assertContains("avatar", array_keys($jsonResponse["errors"]));
    }

    /** @test */
    public function a_user_can_edit_his_personal_information()
    {
        $this->withoutExceptionHandling();

        $john = create(User::class, ['name' => 'John Doe', 'email' => 'john@example.com']);

        $url = "/api/me/personal-information?token={$john->token}";
        $response = $this->putJson($url, ["name" => "Peter Doe", "email" => "peter@example.com"]);

        $jsonResponse = $response->json();

        $this->assertEquals("Peter Doe", $jsonResponse["data"]["name"]);
        $this->assertEquals("peter@example.com", $jsonResponse["data"]["email"]);

        $this->assertEquals("Peter Doe", $john->fresh()->name);
        $this->assertEquals("peter@example.com", $john->fresh()->email);
    }

    /** @test */
    public function a_user_must_provide_valid_data_to_update_his_information()
    {
        $john = create(User::class, ['name' =>"Peter Doe" , 'email' => "peter@example.com"]);

        $url = "/api/me/personal-information?token={$john->token}";
        $response = $this->putJson($url, ["name" => '', "email" => '']);

        $jsonResponse = $response->json();

        $this->assertContains('name', array_keys($jsonResponse['errors']));
        $this->assertContains('email', array_keys($jsonResponse['errors']));
    }

    /** @test */
    public function a_user_must_provide_a_unique_email_to_update_his_information()
    {
        $john = create(User::class, ['name' => 'John Doe', 'email' => 'john@example.com']);
        create(User::class, ['name' => 'Peter Doe', 'email' => 'peter@example.com']);

        $url = "/api/me/personal-information?token={$john->token}";
        $response = $this->putJson($url, ["name" => "John Doe", "email" => "peter@example.com"]);

        $jsonResponse = $response->json();

        $this->assertContains('email', array_keys($jsonResponse['errors']));
    }

    /** @test */
    public function a_user_can_change_his_password()
    {
        $john = create(User::class,['password' => bcrypt("secret")]);
        $newPassword = "new password";

        $url = "/api/me/password?token={$john->token}";

        $this->putJson($url, [
            "previous_password" => "secret",
            "password" => $newPassword,
            "password_confirmation" =>$newPassword
        ])->assertStatus(200);

        $this->assertTrue(Hash::check($newPassword, $john->fresh()->password));
    }

    /** @test */
    public function to_update_his_password_a_user_must_provide_his_actual_password()
    {
        $john = create(User::class,['password' => bcrypt("secret")]);
        $newPassword = "new password";

        $url = "/api/me/password?token={$john->token}";

        $this->putJson($url, [
            "previous_password" => "secret",
            "password" => $newPassword,
            "password_confirmation" =>$newPassword
        ])->assertStatus(200);

        $this->assertTrue(Hash::check($newPassword, $john->fresh()->password));
    }
}
