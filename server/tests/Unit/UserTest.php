<?php

namespace Tests\Unit;

use App\Models\Like;
use App\Models\Reply;
use App\Models\Thread;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_has_replies()
    {
        $john = create(User::class);
        create(Reply::class, ['user_id' => $john->id], 2);

        $this->assertCount(2, $john->replies);
    }

    /** @test */
    public function a_user_can_like_a_thread()
    {
        $john = create(User::class);
        $thread = create(Thread::class);
        create(Like::class, ['user_id' => $john->id, 'likeable_id' => $thread->id, 'likeable_type' => Thread::class]);

        $this->assertCount(1, $john->likes);
    }
}
