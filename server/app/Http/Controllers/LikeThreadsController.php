<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Like;
use App\Models\Thread;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class LikeThreadsController extends Controller
{
    public function store(Category $category, Thread $thread)
    {

        if(! auth()->user()->likes()->where($this->attributes($thread))->count() > 0) {
            auth()->user()->likes()->create(
                $this->attributes($thread)
            );
        }

        return response()->json(['data' => [
            'likes_count' => $thread->likes->count()
        ]]);
    }

    public function destroy(Category $category, Thread $thread)
    {
        auth()->user()
              ->likes()
              ->where(
                  $this->attributes($thread)
              )
              ->delete();

        return response()->json(['data' => [
            'likes_count' => $thread->likes->count()
        ]]);
    }

    /**
     * Get the attributes for a likeable thread
     * @param $thread
     * @return array
     */
    protected function attributes($thread)
    {
        return [
            'likeable_id' => $thread->id,
            'likeable_type' => Thread::class
        ];
    }
}
