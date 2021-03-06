<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', function() {
    return response()->json(["Status" => "Application running..."]);
});

Route::group(["middleware" => "cors"], function () {

    Route::apiResource("threads", "ThreadsController")->names([
        "index"     => "api.threads.index",
        "store"     => "api.threads.store",
        "update"    => "api.threads.update",
        "destroy"   => "api.threads.destroy"
    ])->except("show");

    Route::get('/categories', 'CategoriesController@index')->name('api.categories.index');
    Route::get('/categories/{category}/posts', 'ThreadsController@index')->name('api.categories.posts');

    //Replies
    Route::post('/replies', 'RepliesController@store')->name('api.replies.store');
    Route::put('/replies/{reply}', 'RepliesController@update')->name('api.replies.update');
    Route::delete('/replies/{reply}', 'RepliesController@delete')->name('api.replies.delete');


    Route::post('/replies/{reply}/likes', 'LikeRepliesController@store')->name('api.replies.likes.store');
    Route::delete('/replies/{reply}/likes', 'LikeRepliesController@destroy')->name('api.replies.likes.destroy');


    Route::get("/{category}/{threadSlug}", "ThreadsController@show")->name("api.threads.show");
    Route::get("/{category}/{thread}/replies", "RepliesController@index")->name("api.threads.replies.index");
    Route::post("/{category}/{thread}/best-replies", "BestRepliesController@store")->name("api.threads.best-replies.store");
    Route::delete("/{category}/{thread}/best-replies", "BestRepliesController@destroy")->name("api.threads.best-replies.delete");

    /**
     * Likes
     */
    Route::post("/{category}/{thread}/likes", "LikeThreadsController@store")->name("api.threads.likes.store");
    Route::delete("/{category}/{thread}/likes", "LikeThreadsController@destroy")->name("api.threads.likes.destroy");


    //Authentication
    Route::post('register', 'AuthController@register')->name('api.auth.register');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

    // Avatar
    Route::group(['prefix' => 'me'], function() {
        Route::post("avatar", "Users\AvatarController@update")->name("users.avatar.update");
        Route::delete("avatar", "Users\AvatarController@destroy")->name("users.avatar.delete");

        Route::put("personal-information", "Users\PersonalInformationController");
        Route::put("password", "Auth\UpdatePasswordController");
    });

});
