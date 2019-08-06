<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Like;
use Faker\Generator as Faker;

$factory->define(Like::class, function (Faker $faker) {
    return [
        'user_id' => factory(\App\User::class)->create()->id,
        'likeable_id' => factory(\App\Models\Thread::class)->create()->id,
        'likeable_type' => Thread::class
    ];
});
