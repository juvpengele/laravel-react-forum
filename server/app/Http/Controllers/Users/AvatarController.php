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
     * @return AvatarResource
     */
    public function update()
    {
        auth()->user()->avatar()
            ->update(
                request()->file('avatar')
            );

        return new AvatarResource(auth()->user());
    }

    public function destroy()
    {
        auth()->user()->avatar()->remove();

        auth()->user()->update([
            'profile_picture' => 'default.png'
        ]);

        return new AvatarResource(auth()->user());
    }
}
