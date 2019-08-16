<?php

namespace App\Http\Controllers;

use App\Models\Reply;
use Illuminate\Http\Request;

class LikeRepliesController extends Controller
{
    public function store(Reply $reply)
    {
        if(! $reply->isLiked) {
            auth()->user()->like($reply);
        }

        return response()->json([
            'data' => [
                'likes_count' => $reply->likes()->count()
            ]
        ]);
    }

    public function destroy(Reply $reply)
    {
        auth()->user()->unlike($reply);

        return response()->json(['data' => [
            'likes_count' => $reply->likes()->count()
        ]]);
    }

}
