<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlayerProfilesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/download/player_profile/{player_id}', [PlayerProfilesController::class, 'downloadProfile']);

// Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function () {

//    Auth Routes
    Route::post('/logout', [AuthController::class, 'logout']);

//    Users Routes

//    Profiling Routes

});
