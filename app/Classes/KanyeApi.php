<?php

namespace App\Classes;

use App\Providers\QuoteProvider;
use Exception;
use Illuminate\Http\Client\Pool;
use Illuminate\Support\Facades\Http;

class KanyeApi implements QuoteProvider
{

    /**
     * apiUrl
     *
     * @var mixed
     */
    private $apiUrl;

    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->apiUrl = env('KANYE_API_URL');
    }

    /**
     * fetch
     *
     * @return void
     */
    public function fetch()
    {
        try {

            $responses = Http::pool(fn(Pool $pool) => [
                $pool->get($this->apiUrl),
                $pool->get($this->apiUrl),
                $pool->get($this->apiUrl),
                $pool->get($this->apiUrl),
                $pool->get($this->apiUrl),
            ]);

            $quotes = array_map(fn($reponse) => $reponse['quote'], $responses);

            //could save quotes to DB here to save api calls.

            return ['quotes' => $quotes];

        } catch (Exception $e) {

            //handle exception.
            abort(500, 'An error has occurred');

        }

    }

}
