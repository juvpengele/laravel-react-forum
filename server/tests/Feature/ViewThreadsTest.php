<?php

namespace Tests\Feature;

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

        dd($response);

        $this->assertCount(5, $response["data"]);
    }


    /**
     * @test
     *
     */
    public function test_a_guest_can_see_a_single_thread()
    {
        $thread = create(Thread::class);

        $response = $this->get(route("api.threads.show", $thread));

        $this->assertEquals(200, $response->getStatusCode());

        $jsonResponse = $response->json();
        $this->assertEquals($thread->title, $jsonResponse["data"]["title"]);
    }

}
