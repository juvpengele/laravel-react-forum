<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Reply;
use Faker\Generator as Faker;

$factory->define(Reply::class, function (Faker $faker) {
    return [
        "user_id" => factory(\App\User::class)->create()->id,
        "thread_id" => factory(\App\Models\Thread::class)->create()->id,
        "content"   => $faker->paragraph
    ];
});
