<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/main');
});

Route::get('/{path?}', function () {
    return view('app');
})->where('path', '^(?!api).*?');

Route::get('/{any}', function () {
    return view('app'); // Replace with your main view
})->where('any', '.*');
