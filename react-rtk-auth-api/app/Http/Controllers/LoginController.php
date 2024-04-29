<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserDetailResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{


    public function login(Request $request)
    {
        $user = User::query()
            ->where('email', $request->email)
            ->firstOrFail();
        if (Hash::check($request->password, $user->password)) {
            $token = $user->createToken('authToken')->accessToken;
            $user->access_token = $token;
            return UserDetailResource::make($user);
        }
        $user = User::query()
            ->where('email', $request->email)
            ->firstOrFail();
        if (Hash::check($request->password, $user->password)) {
            $token = $user->createToken('authToken')->accessToken;
            return response()->json(['access_token' => $token]);
        }

        return response()->json(['error' => 'Unauthorised'], 401);
        return response()->json(['error' => 'Unauthorised'], 401);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('authToken')->accessToken;

        return response()->json(['access_token' => $token]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function detail(Request $request)
    {
        return response()->json(['user' => $request->user()]);
    }
}
