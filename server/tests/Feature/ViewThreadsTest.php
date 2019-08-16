<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Reply;
use App\Models\Thread;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ViewThreadsTest extends TestCase
{
    use RefreshDatabase;


    public function test_a_guest_can_see_all_threads()
    {
        $this->withExceptionHandling();

        create(Thread::class, [], 5);

        $response = $this->getJson(route("api.threads.index"))->json();

        $this->assertCount(5, $response["data"]);
    }


    /**
     * @test
     *
     */
    public function test_a_guest_can_see_a_single_thread()
    {
        $this->withoutExceptionHandling();

        $thread = create(Thread::class);

        $response = $this->get(route("api.threads.show", ["category" => $thread->category, "thread" => $thread]));

        $this->assertEquals(200, $response->getStatusCode());

        $jsonResponse = $response->json();
        $this->assertEquals($thread->title, $jsonResponse["data"]["title"]);
    }

    /** @test */
    public function guest_can_fetch_only_ten_threads_at_once()
    {
        create(Thread::class, [],  20);

        $response = $this->getJson(route("api.threads.index"))->json();

        $this->assertCount(10, $response["data"]);
    }

    /** @test */
    public function when_we_visit_a_thread_its_visits_count_increments()
    {
        $thread = create(Thread::class);

        $this->assertEquals(0, $thread->visits_count);

        $this->get(route("api.threads.show", ["category" => $thread->category, "thread" => $thread]));
        $this->get(route("api.threads.show", ["category" => $thread->category, "thread" => $thread]));

        $this->assertEquals(2, $thread->fresh()->visits_count);
    }


    /** @test */
    public function guest_can_search_posts()
    {
        create(Thread::class, ['title' => 'A special title']);
        create(Thread::class, [], 5);

        $response = $this->getJson("/api/threads?search=special")->json();

        $this->assertCount(1, $response["data"]);
    }

    /** @test */
    public function we_can_see_posts_only_from_a_category()
    {
        $category = create(Category::class);
        create(Thread::class, ['category_id' => $category->id], 2);
        create(Thread::class, [], 2);

        $response = $this->getJson(route('api.categories.posts', ['category' => $category]))->json();

        $this->assertCount(2, $response["data"]);
    }

}
