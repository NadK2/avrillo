<?php

namespace Tests\Feature;

use Illuminate\Support\Str;
use Tests\TestCase;

class ApiTest extends TestCase
{

    /**
     * testEmail
     *
     * @var string
     */
    private $testEmail = 'test@email.com';
    /**
     * testPassword
     *
     * @var string
     */
    private $testPassword = 'test';

    /**
     * Test User auth using email and password
     */
    public function test_api_authententication_with_email_password_returns_api_token(): void
    {
        $response = $this->withHeader('Accept', 'application/json')->post('/api/auth', ['email' => $this->testEmail, 'password' => $this->testPassword]);

        $response->assertStatus(200)
            ->assertJsonStructure(['time', 'token']);

    }

    public function test_api_authententication_with_random_email_password_returns_401_unauthorised(): void
    {
        $response = $this->withHeader('Accept', 'application/json')->post('/api/auth', ['email' => Str::random(10) . '@email.com', 'password' => Str::random(10)]);

        $response->assertStatus(401);

    }

    /**
     * Test Api token auth and fetch quotes.
     */
    public function test_api_authententication_with_token_returns_status_200(): void
    {
        //call to get api token.
        $response = $this->withHeader('Accept', 'application/json')->post('/api/auth', ['email' => $this->testEmail, 'password' => $this->testPassword]);

        //fetch quotes using api token.
        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $response['token'],
            'Accept' => 'application/json',
        ])->get('/api/quotes');

        $response->assertStatus(200);
    }

    /**
     * test_api_quotes_fetch
     *
     * @return void
     */
    public function test_api_fetch_quotes_with_api_token_returns_5_quotes(): void
    {
        //call to get api token.
        $response = $this->withHeader('Accept', 'application/json')->post('/api/auth', ['email' => $this->testEmail, 'password' => $this->testPassword]);

        //fetch quotes using api token.
        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $response['token'],
            'Accept' => 'application/json',
        ])->get('/api/quotes');

        $response->assertStatus(200)
            ->assertJsonStructure(['quotes']);

        $this->assertTrue(count($response['quotes']) == 5);
    }

    /**
     * test_api_fetch_five_quotes_without_api_token
     *
     * @return void
     */
    public function test_api_fetch_quotes_without_api_token_returns_401_unauthorised(): void
    {

        $this->withHeader('Accept', 'application/json')->get('/api/quotes')
            ->assertStatus(401);
    }

    /**
     * test_api_fetch_quotes_with_api_token_returns_5_random_quotes_from_4_consecutive_requests
     *
     * @return void
     */
    public function test_api_fetch_quotes_with_api_token_returns_5_random_quotes_from_4_consecutive_requests(): void
    {

        $quotes = [];

        //call to get api token.
        $response = $this->withHeader('Accept', 'application/json')->post('/api/auth', ['email' => $this->testEmail, 'password' => $this->testPassword]);

        for ($i = 0; $i < 4; $i++) {

            //fetch quotes using api token.
            $res = $this->withHeaders([
                'Authorization' => 'Bearer ' . $response['token'],
                'Accept' => 'application/json',
            ])->get('/api/quotes');

            $res->assertStatus(200)
                ->assertJsonStructure(['quotes']);

            $this->assertTrue(count($res['quotes']) == 5 && $quotes != $res['quotes']);

            $quotes = $res['quotes'];

        }
    }
}
