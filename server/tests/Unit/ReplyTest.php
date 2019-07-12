<?php

namespace Tests\Unit;

use App\Models\Reply;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ReplyTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_reply_has_a_creator()
    {
        $john = create(User::class);
        $reply = create(Reply::class, ["user_id" => $john->id]);

        $this->assertEquals($john->id, $reply->creator->id);
    }
}
