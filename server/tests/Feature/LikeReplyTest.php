<?php

namespace Tests\Feature;

use App\Models\Reply;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LikeReplyTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_reply_can_be_liked()
    {
        $this->withoutExceptionHandling();

        $john = create(User::class, ['name' => 'John Doe']);

        $token = User::token($john->id);

        $reply = create(Reply::class);

        $endpoint = "/api/replies/$reply->id/likes?token=$token";
        $this->post($endpoint);

        $this->assertCount(1, $reply->fresh()->likes);
    }

    /** @test */
    public function a_reply_can_not_be_liked_twice_by_the_same_user()
    {
        $this->withoutExceptionHandling();

        $john = create(User::class, ['name' => 'John Doe']);

        $token = User::token($john->id);

        $reply = create(Reply::class);

        $endpoint = "/api/replies/$reply->id/likes?token=$token";
        $this->post($endpoint);
        $this->post($endpoint);

        $this->assertCount(1, $reply->fresh()->likes);
    }

    /** @test */
    public function a_reply_can_be_unlike()
    {
        $this->withoutExceptionHandling();

        $john = create(User::class, ['name' => 'John Doe']);
        $userToken = User::token($john->id);

        $reply = create(Reply::class);

        $endpoint = "/api/replies/$reply->id/likes?token=$userToken";
        $this->post($endpoint);
        $this->assertCount(1, $reply->fresh()->likes);

        $this->delete($endpoint);
        $this->assertCount(0, $reply->fresh()->likes);
    }

}
