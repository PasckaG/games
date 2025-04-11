<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\MidtransConfig; // <- tambahkan ini
use Midtrans\Snap;

class PaymentController extends Controller
{
    public function getSnapToken()
    {
        MidtransConfig::init(); // <- panggil konfigurasi

        $params = [
            'transaction_details' => [
                'order_id' => rand(),
                'gross_amount' => 10000,
            ],
            'customer_details' => [
                'first_name' => 'Iyan',
                'last_name' => 'Ginting',
                'email' => 'iyan@example.com',
                'phone' => '08123456789',
            ],
        ];

        $snapToken = Snap::getSnapToken($params);

        return response()->json([
            'snap_token' => $snapToken
        ]);
    }

    public function paymentPage()
    {
        return view('payment');
    }
}
