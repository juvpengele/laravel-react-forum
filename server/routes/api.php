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

Route::group(["middleware" => "cors"], function () {
    Route::apiResource("threads", "ThreadsController")->names([
        "index"     => "api.threads.index",
        "store"     => "api.threads.store",
        "update"    => "api.threads.update",
        "destroy"   => "api.threads.destroy"
    ])->except("show");
    Route::get("{category}/{thread}", "ThreadsController@show")->name("api.threads.show");
    Route::get('/categories/{category}/posts', 'ThreadsController@index')->name('api.categories.posts');

    Route::get('/categories', 'CategoriesController@index')->name('api.categories.index');


    //Replies
    Route::post('/replies', 'RepliesController@store')->name('api.replies.store');
    Route::delete('/replies/{reply}', 'RepliesController@delete')->name('api.replies.delete');
    Route::put('/replies/{reply}', 'RepliesController@update')->name('api.replies.update');

    //Authentication
    Route::post('register', 'AuthController@register')->name('api.auth.register');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});
