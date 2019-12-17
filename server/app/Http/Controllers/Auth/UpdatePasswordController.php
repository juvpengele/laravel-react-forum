<?php

namespace App\Http\Controllers\Auth;

use App\Rules\MatchActualPassword;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UpdatePasswordController extends Controller
{
    public function __invoke(Request $request)
    {
        request()->validate([
            "previous_password" => ["required", new MatchActualPassword],
            "password" => "required|confirmed"
        ]);

        auth()->user()->update(['password' => $request->password]);

        return response()->json([],200);
    }
}
