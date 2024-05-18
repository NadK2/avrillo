<?php

namespace App\Providers;

use App\Classes\KanyeApi;
use App\Guards\Avrillo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

        Auth::extend('avrillo-guard', function ($app, $name, array $config) {
            return new Avrillo(
                Auth::createUserProvider($config['provider']),
                $app['request']
            );
        });

        $this->app->bind(QuoteProvider::class, function ($app) {
            //
            return new KanyeApi();
        });

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
