<?php

namespace Tests\Unit;

use App\Models\Reply;
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
}
