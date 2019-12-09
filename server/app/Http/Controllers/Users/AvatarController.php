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
    public function __invoke()
    {
        auth()->user()->updateAvatar(
            request()->file('avatar')
        );

        return new AvatarResource(auth()->user());
    }
}
