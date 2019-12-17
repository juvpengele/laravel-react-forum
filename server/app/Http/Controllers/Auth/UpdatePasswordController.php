<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UpdatePasswordController extends Controller
{
    public function __invoke(Request $request)
    {

        auth()->user()->update([
            'password' => $request->password
        ]);

        return response()->json([],200);
    }
}
