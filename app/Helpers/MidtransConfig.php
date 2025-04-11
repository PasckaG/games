<?php

namespace App\Helpers;

use Midtrans\Config;

class MidtransConfig
{
    public static function init()
    {
        Config::$serverKey = 'SB-Mid-server-g0gr-NSDT0KnlBZcBS2LTy7-'; // Ganti dengan server key kamu
        Config::$isProduction = false; // true jika sudah live
        Config::$isSanitized = true;
        Config::$is3ds = true;
    }
}
