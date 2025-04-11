<?php

use App\Http\Controllers\PaymentController;

Route::get('/pay', [PaymentController::class, 'paymentPage']);
Route::get('/get-snap-token', [PaymentController::class, 'getSnapToken']);

