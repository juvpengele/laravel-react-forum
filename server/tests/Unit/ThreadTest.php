<?php

namespace Tests\Unit;

use App\Models\Category;
use App\Models\Like;
use App\Models\Reply;
use App\Models\Thread;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ThreadTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_thread_has_a_creator()
    {
        $user = create(User::class);
        $thread = create(Thread::class, ["user_id" => $user->id]);

        $this->assertEquals($user->id, $thread->creator->id);
    }

    /** @test */
    public function a_thread_has_a_description()
    {
        $thread = create(Thread::class);

        $this->assertNotNull($thread->description);
    }

    /** @test */
    public function a_thread_belongs_to_a_category()
    {
        $category = create(Category::class);
        $thread = create(Thread::class, ["category_id" => $category->id]);

        $this->assertEquals($category->id, $thread->category->id);
    }

    /** @test */
    public function a_thread_has_replies()
    {
        $thread = create(Thread::class);
        create(Reply::class, ["thread_id" => $thread->id], 2);

        $this->assertCount(2, $thread->replies);
    }

    /** @test */
    public function it_can_be_filter_through_search()
    {
        create(Thread::class, ['title' => 'A dummy test']);
        create(Thread::class, [], 5);

        $this->assertCount(1, Thread::search('dummy')->get());
    }

    /** @test */
    public function a_thread_can_be_liked()
    {
        $thread = create(Thread::class);
        create(Like::class, ['likeable_id' => $thread->id, 'likeable_type' => Thread::class]);

        $this->assertEquals(1, $thread->likes->count());
    }

    /** @test */
    public function a_thread_with_best_reply_is_resolved()
    {
        $thread = create(Thread::class);
        $reply = create(Reply::class);


        $this->assertFalse($thread->is_resolved);

        $thread->update(['best_reply_id' => $reply->id]);

        $this->assertTrue($thread->is_resolved);

    }
}
