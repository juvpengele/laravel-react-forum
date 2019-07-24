<?php

namespace Tests\Feature;

use App\Models\Thread;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CreateReplyTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function an_authenticated_user_can_post_replies()
    {

        $user = create(User::class);
        $this->signIn($user);
        $authToken = auth()->tokenById($user->id);

        $thread = create(Thread::class);

        $jsonResponse = $this->postJson("/api/replies?token=$authToken", [
            'content' => 'Lorem',
            'thread_id' => $thread->id
        ])->json();

        $this->assertEquals(1, $thread->replies->count());
        $this->assertEquals("Lorem", $jsonResponse['data']['content']);

    }

    /** @test */
    public function a_guest_can_not_store_a_reply()
    {
        $this->withoutExceptionHandling();

        $thread = create(Thread::class);

        $jsonResponse = $this->postJson("/api/replies?token=lorem", [
            'content' => 'Lorem',
            'thread_id' => $thread->id
        ])->json();

        $this->assertEquals(0, $thread->replies->count());
    }
}
