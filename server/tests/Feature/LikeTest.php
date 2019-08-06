<?php

namespace Tests\Feature;

use App\Models\Like;
use App\Models\Thread;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LikeTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_thread_can_be_liked()
    {
        $thread = create(Thread::class);

        $john = create(User::class);
        $token = auth()->tokenById($john->id);

        $this->post("/api/{$thread->category->slug}/{$thread->slug}/likes?token={$token}");

        $this->assertEquals(1, $thread->likes->count());
    }

    /** @test */
    public function a_thread_can_be_liked_once_per_user()
    {
        $this->withoutExceptionHandling();

        $thread = create(Thread::class);

        $john = create(User::class);
        $token = auth()->tokenById($john->id);

        $this->post("/api/{$thread->category->slug}/{$thread->slug}/likes?token={$token}");
        $this->post("/api/{$thread->category->slug}/{$thread->slug}/likes?token={$token}");

        $this->assertEquals(1, $thread->likes->count());
    }

    /** @test */
    public function a_thread_can_be_unliked()
    {

        $john = create(User::class);
        $token = auth()->tokenById($john->id);

        $thread = create(Thread::class);
        create(Like::class, ['likeable_id' => $thread->id, 'likeable_type' => Thread::class, 'user_id' => $john->id]);

        $this->delete("/api/{$thread->category->slug}/{$thread->slug}/likes?token={$token}");

        $this->assertEquals(0, $thread->likes->count());
    }
}
