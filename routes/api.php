<?php

use App\Http\Controllers\Api\V1\SupplierController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\MedicineController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix("v1")->group(function () {
    Route::apiResource('suppliers', SupplierController::class);
    Route::apiResource('users', UserController::class);
    Route::apiResource('medicine', MedicineController::class);
});


Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
    ->name('verification.verify')
    ->middleware(['signed', 'throttle:6,1']);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    $user = $request->user();
    $user->load('roles');

    return response()->json($user);
});
