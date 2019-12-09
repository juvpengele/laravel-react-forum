<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;

class BestRepliesController extends Controller
{
    public function store($categorySlug, Thread $thread)
    {
        if(auth()->id() !== (int) $thread->user_id) {
            return response()->json(['data' => 'Unauthorized action'], 403);
        }

        $thread->update([ 'best_reply_id' => request('reply_id') ]);

        return response(['data' => [
            'best_reply_id' => request('reply_id')
        ]], 200);
    }

    public function destroy($categorySlug, Thread $thread)
    {
        if(auth()->id() !== (int) $thread->user_id) {
            return response()->json(['data' => 'Unauthorized action'], 403);
        }

        $thread->update(['best_reply_id' => null]);

        return response(['data' => [
            'best_reply_id' => null
        ]], 200);
    }
}
