<?php

use App\Http\Controllers\QuoteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/auth', [UserController::class, 'authenticate']);

//protected by the Avrillo Guard
Route::middleware('auth:avrillo')->group(function () {

    Route::get('/quotes', [QuoteController::class, 'index']);

});
