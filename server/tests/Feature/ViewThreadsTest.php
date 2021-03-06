<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Reply;
use App\Models\Thread;
use App\User;
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

    /** @test */
    public function an_authenticated_user_can_access_to_his_threads()
    {
        $john = create(User::class);

        create(Thread::class, ['user_id' => $john->id], 2);
        create(Thread::class, [], 5);

        $endpoint = "/api/threads?by={$john->name}";
        $response = $this->getJson($endpoint)->json();

        $this->assertCount(2, $response["data"]);
    }

    /** @test */
    public function when_a_thread_has_a_best_reply_it_marks_as_resolved()
    {
        $john = create(User::class);

        $thread = create(Thread::class, ['user_id' => $john->id]);
        $reply = create(Reply::class, ['thread_id' => $thread->id]);

        $endpoint = "/api/{$thread->category->slug}/{$thread->slug}/best-replies?token={$john->token}";
        $this->post($endpoint, ['reply_id' => $reply->id])->assertStatus(200);

        $this->assertTrue($thread->fresh()->is_resolved);
    }

}
