<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['prefix' => "/api"], function(){
    Route::apiResource('/tasks', TaskController::class);
});

Route::get('/user/isLoggedIn', function(){
    return Auth::user() !== null;
});

// Route::get('/tasks', function(){
//     return view('tasks');
// });

Route::get('/', function(){
    return view('app');
});

Route::get('/tasks', function(){
    return view('app');
});

Route::get('/login', function(){
    return view('app');
});

Route::get('/register', function(){
    return view('app');
});

Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
