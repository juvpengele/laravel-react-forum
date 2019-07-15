<?php

namespace Tests\Unit;

use App\Models\Category;
use App\Models\Thread;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    /** @test  */
    public function a_category_has_many_threads()
    {
        $category = create(Category::class);
        create(Thread::class, ['category_id' => $category->id], 2);

        $this->assertCount(2, $category->threads);
    }
}
