<?php

use App\Http\Controllers\EmployeeController;
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

Route::get('/employees', [\App\Http\Controllers\EmployeeController::class, 'index']);
Route::get('/employee/{id}', [\App\Http\Controllers\EmployeeController::class, 'show']);
Route::get('/employees/average', [\App\Http\Controllers\EmployeeController::class, 'average']);
Route::get('/employees/total', [\App\Http\Controllers\EmployeeController::class, 'total']);
Route::post('/employee', [\App\Http\Controllers\EmployeeController::class, 'save']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
