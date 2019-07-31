<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReplyResource;
use App\Models\Reply;
use Illuminate\Http\Request;
use JWTAuth;


class RepliesController extends Controller
{
    public function __construct()
    {
        $this->middleware(['jwt']);
    }

    public function store()
    {
        request()->validate([
            'content' => 'required',
            'thread_id' => 'required|numeric|exists:threads,id'
        ]);

        $auth = JWTAuth::parseToken()->authenticate();

        $attributes = request()->merge(['user_id' => $auth->id ])
                               ->only(['thread_id', 'content', 'user_id']);

        $reply = Reply::create($attributes);

        return new ReplyResource($reply);
    }


    public function delete(Reply $reply)
    {
        $this->authorize('delete', $reply);

        $reply->delete();

        return response()->json([], 204);
    }
}
