<?php

namespace App\Http\Controllers;

use App\Http\Resources\ThreadCollection;
use App\Http\Resources\ThreadResource;
use App\Models\Category;
use App\Models\Thread;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ThreadsController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt')->only(['store']);
    }


    /**
     * Display a listing of the resource.
     *
     * @param null $categorySlug
     * @return ThreadCollection
     */
    public function index($categorySlug = null)
    {
        $threads = Thread::with(["category", "creator"]);


       if(! is_null($categorySlug)) {
           $category = Category::whereSlug($categorySlug)->first();
           $threads->where(['category_id' => $category->id]);
       }

        if($searchedTerm = request("search")) {
            $threads->search($searchedTerm);
        }

        if(request('by')) {
            $user = User::whereName(request('by'))->first();
            $threads->where(['user_id' => $user->id]);
        }

        $threads = $threads->withCount(["replies", "likes"])->latest()
                            ->paginate(10);

        return new ThreadCollection($threads);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return ThreadResource
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:200',
            'content' => 'required',
            'category_id' => 'required'
        ]);

        $attributes = $request->merge(['slug' => Str::slug($request->title), 'user_id' => auth()->id()])
                            ->only('title', 'slug', 'content', 'user_id', 'category_id');

        $thread = Thread::create($attributes);

        return new ThreadResource($thread);
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
