<?php

namespace App\Http\Controllers\Users;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PersonalInformationController extends Controller
{
    public function __invoke(Request $request)
    {
        $attributes = $request->validate([
            'name' => 'required',
            'email' => 'required'
        ]);

        if(auth()->user()->email !== $request->email) $request->validate(['email' => 'unique:users']);

        auth()->user()->update($attributes);

        return new UserResource(auth()->user());
    }
}
