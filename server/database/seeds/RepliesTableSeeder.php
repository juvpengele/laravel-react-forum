<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class RepliesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $threads = \App\Models\Thread::all();

        foreach ($threads as $thread) {
            \Illuminate\Support\Facades\DB::table('replies')->insert([
                "user_id"   => factory(\App\User::class)->create()->id,
                "content"   => $faker->paragraph,
                'thread_id' => $thread->id,
                "created_at"    => now()
            ]);
        }
    }
}
