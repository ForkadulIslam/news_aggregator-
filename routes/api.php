<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
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

Route::middleware('auth:sanctum')->group(function(){
    Route::get('user',[AuthController::class,'user']);
    Route::post('logout',[AuthController::class,'logout']);
    Route::get('everything',[ApiController::class,'everything']);
    Route::get('source',[ApiController::class,'source']);
    Route::post('my_feed',[ApiController::class,'my_feed']);
    Route::get('my_feed',[ApiController::class,'get_my_feed']);
    Route::post('filter_feed',[ApiController::class,'filter_feed']);
});


Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);

