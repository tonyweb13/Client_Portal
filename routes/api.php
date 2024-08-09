<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['web']], function () {
    Route::post('login', [App\Http\Controllers\Auth\LoginController::class, 'login']);

    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout']);
        Route::post('/main', [App\Http\Controllers\Auth\LoginController::class, 'loginUser']);

        Route::group([
            'prefix' => 'client',
        ], function () {
            Route::group([
                'prefix' => 'orders',
            ], function () {
                Route::get('/', [App\Http\Controllers\Client\OrderController::class, 'index']);
                Route::get('/view', [App\Http\Controllers\Client\OrderController::class, 'view']);
            });
        });

        Route::group([
            'prefix' => 'admin',
        ], function () {
            //resources here
        });
    });
});
