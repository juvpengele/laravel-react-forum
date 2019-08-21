<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Thread;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CreateThreadTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    /** @test */
    public function a_user_can_create_a_thread()
    {
        $this->withoutExceptionHandling();

        $john = create(User::class);

        $threadAttributes = $this->createThread();

        $endpoint = "/api/threads?token={$john->token}";

        $this->post($endpoint, $threadAttributes)->assertStatus(201);

        $this->assertDatabaseHas('threads', $threadAttributes);
    }

    /** @test */
    public function only_authenticated_users_can_create_threads()
    {
        $threadAttributes = $this->createThread();

        $endpoint = "/api/threads";

        $this->post($endpoint, $threadAttributes)->assertStatus(400);

        $this->assertDatabaseMissing('threads', $threadAttributes);
    }


    /**
     * @param array|null $attributes
     * @return array
     */
    protected function createThread(?array $attributes = null): array
    {
        $category = create(Category::class);

        return $attributes?:  [
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraph,
            'category_id' => $category->id
        ];
    }
}
