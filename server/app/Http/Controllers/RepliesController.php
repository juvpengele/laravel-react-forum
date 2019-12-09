<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReplyResource;
use App\Models\Reply;
use App\Models\Thread;
use JWTAuth;


class RepliesController extends Controller
{
    public function __construct()
    {
        $this->middleware(['jwt'])->except(['index']);
    }

    public function index($categorySlug, Thread $thread)
    {
        $replies = $thread->replies()->get();

        return ReplyResource::collection($replies);
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


    public function update(Reply $reply)
    {
        $this->authorize('update', $reply);

        $reply->update(['content' => request('content')]);

        return new ReplyResource($reply);
    }


    public function delete(Reply $reply)
    {
        $this->authorize('delete', $reply);

        $reply->delete();

        return response()->json([], 204);
    }
}
