<?php

namespace Tests\Feature;

use App\Models\Reply;
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
        $this->withoutExceptionHandling();

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

        $this->postJson("/api/replies?token=lorem", [
            'content' => 'Lorem',
            'thread_id' => $thread->id
        ])->json();

        $this->assertEquals(0, $thread->replies->count());
    }

    /** @test */
    public function a_reply_can_be_deleted()
    {

        $john = create(User::class);
        $thread = create(Thread::class);

        $reply = create(Reply::class, ['thread_id' => $thread->id, 'user_id' => $john->id]);

        $johnToken = auth()->tokenById($john->id);

        $this->assertCount(1, Reply::all());


        $this->deleteJson("/api/replies/{$reply->id}?token={$johnToken}")
            ->assertStatus(204);

        $this->assertCount(0, Reply::all());
    }

    /** @test */
    public function only_the_owner_can_delete_a_reply()
    {

        $john = create(User::class);
        $johnToken = auth()->tokenById($john->id);

        $jane = create(User::class, ['name' => 'Jane Doe']);
        $janeToken = auth()->tokenById($jane->id);

        $reply = create(Reply::class, ['user_id' => $jane->id ]);

        $this->deleteJson("/api/replies/{$reply->id}?token={$johnToken}")
             ->assertStatus(403);

        $this->assertCount(1, Reply::all());

        $this->deleteJson("/api/replies/{$reply->id}?token={$janeToken}")
            ->assertStatus(204);

        $this->assertCount(0, Reply::all());
    }

    public function a_reply_can_be_updated()
    {
        $this->withoutExceptionHandling();

        $john = create(User::class);
        $johnToken = auth()->tokenById($john->id);

        $reply = create(Reply::class, ['user_id' => $john->id, 'content' => 'Lorem']);

        $endpoint = "/api/replies/{$reply->id}?token={$johnToken}";

        $this->putJson($endpoint, ['content' => 'Hello world'])
             ->assertStatus(200);

        $this->assertEquals('Hello world', $reply->fresh()->content);
    }

}
