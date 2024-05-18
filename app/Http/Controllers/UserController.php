<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * authenticate
     *
     * @param  mixed $request
     * @return JsonResponse
     */
    public function authenticate(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        //Auth error.
        if (!auth()->once($credentials)) {
            return response()->json([
                'message' => 'The provided credentials do not match our records.',
            ], 401);
        }

        //auth success

        //generate user api token.
        $token = auth()->user()->generateToken();

        return response()->json([
            'time' => now(),
            'token' => $token,
        ]);
    }
}
