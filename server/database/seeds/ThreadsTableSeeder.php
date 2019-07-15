<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ThreadsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        $faker = Faker::create();

        factory(\App\Models\Category::class, 5)->create();

        for ($i = 0; $i < 20; $i++) {

            $category = \App\Models\Category::find(random_int(1, 5));

            $title = $faker->sentence("5");

            $category->threads()->create([
                "title" => $title,
                "slug"  => \Illuminate\Support\Str::slug($title),
                "content"  => $faker->text,
                "category_id" => random_int(1, 5),
                "user_id" => factory(\App\User::class)->create()->id,
                "visits_count" => random_int(0, 50),
                "created_at"    => now()
            ]);
        }

    }
}
