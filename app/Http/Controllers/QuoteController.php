<?php

namespace App\Http\Controllers;

use App\Providers\QuoteProvider;

class QuoteController extends Controller
{
    /**
     * index
     *
     * @return void
     */
    public function index(QuoteProvider $provider)
    {
        $quotes = $provider->fetch();

        return response()->json($quotes);
    }
}
