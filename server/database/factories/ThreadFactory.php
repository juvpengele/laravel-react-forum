<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Thread;
use Faker\Generator as Faker;

$factory->define(Thread::class, function (Faker $faker) {
    $title = $faker->sentence;
    return [
        "title" => $title,
        "slug" => \Illuminate\Support\Str::slug($title),
        "content" => $faker->text,
        "user_id" => factory(\App\User::class)->create()->id,
        "category_id"   => factory(\App\Models\Category::class)->create()->id,
        "visits_count"  => 0
    ];
});
