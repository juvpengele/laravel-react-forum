<?php

namespace Tests\Unit;

use App\Models\Category;
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
}
