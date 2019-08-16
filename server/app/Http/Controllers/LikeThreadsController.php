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
        if(! $thread->isLiked) {
            auth()->user()->like($thread);
        }

        return response()->json(['data' => [
            'likes_count' => $thread->likes->count()
        ]]);
    }

    public function destroy(Category $category, Thread $thread)
    {
        auth()->user()->unlike($thread);

        return response()->json(['data' => [
            'likes_count' => $thread->likes->count()
        ]]);
    }

}
