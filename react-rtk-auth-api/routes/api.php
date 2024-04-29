<?php

use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::controller(LoginController::class)
    ->prefix('admin/auth')
    ->group(function () {
        Route::post('login', 'login')->middleware('guest');
        Route::post('register', 'register')->middleware('guest');
        Route::post('logout', 'logout')->middleware('auth:api');
        Route::get('detail', 'detail')->middleware('auth:api');
    });
