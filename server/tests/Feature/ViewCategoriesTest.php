<?php

namespace Tests\Feature;

use App\Models\Category;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ViewCategoriesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function we_can_fetch_all_categories()
    {
        create(Category::class, [], 4);

        $response = $this->get(route('api.categories.index'))->json();

        $this->assertCount(4, $response['data']);
    }
}
