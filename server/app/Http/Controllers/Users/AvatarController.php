<?php

namespace App\Http\Controllers\Users;

use App\Http\Resources\AvatarResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class AvatarController extends Controller
{
    /**
     * Update the authenticated avatar
     *
     * @param Request $request
     * @return AvatarResource
     */
    public function update(Request $request)
    {
        request()->validate(['avatar' => 'required|image']);

        auth()->user()
             ->avatar()
             ->update($request->file('avatar'));

        return new AvatarResource(auth()->user());
    }

    /**
     * Remove the authenticated avatar
     *
     * @return AvatarResource
     */
    public function destroy()
    {
        auth()->user()->avatar()->remove();

        auth()->user()->update(['profile_picture' => 'default.png']);

        return new AvatarResource(auth()->user());
    }
}
