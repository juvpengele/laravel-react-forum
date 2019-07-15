<?php

namespace App\Http\Controllers;

use App\Http\Resources\ThreadCollection;
use App\Http\Resources\ThreadResource;
use App\Models\Category;
use App\Models\Thread;
use Illuminate\Http\Request;

class ThreadsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ThreadCollection
     */
    public function index()
    {
        $threads = Thread::with(["category", "creator"]);

        if($searchedTerm = request("search")) {
            $threads->search($searchedTerm);
        }

        $threads = $threads->withCount("replies")
            ->latest()
            ->paginate(10,
                ["title", "visits_count", "slug", "created_at", "user_id", "category_id"]
            );

        return new ThreadCollection($threads);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the thread resource.
     *
     * @param Category $category
     * @param Thread $thread
     * @return ThreadResource
     */
    public function show(Category $category, Thread $thread)
    {
        $thread->increment("visits_count");

        return new ThreadResource($thread);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
