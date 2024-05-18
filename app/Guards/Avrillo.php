<?php

namespace App\Guards;

use Illuminate\Auth\GuardHelpers;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Http\Request;

class Avrillo implements Guard
{
    use GuardHelpers;

    /**
     * request
     *
     * @var mixed
     */
    protected $request;

    /**
     * provider
     *
     * @var mixed
     */
    protected $provider;

    /**
     * user
     *
     * @var mixed
     */
    protected $user;

    /**
     * tokenKey
     *
     * @var string
     */
    protected $tokenKey = 'token';

    /**
     * __construct
     *
     * @param  UserProvider $provider
     * @param  Request $request
     * @return void
     */
    public function __construct(UserProvider $provider, Request $request)
    {
        $this->provider = $provider;
        $this->request = $request;
    }

    /**
     * user
     *
     * @return Authenticatable|null
     */
    public function user(): Authenticatable | null
    {
        if (!is_null($this->user)) {
            return $this->user;
        }

        $token = explode("|", $this->request->bearerToken())[1] ?? null;

        if (!$token) {
            return null;
        }

        $user = $this->provider->retrieveByCredentials([
            $this->tokenKey => hash('sha256', $token),
        ]);

        return $this->user = $user;
    }

    /**
     * validate
     *
     * @param  array $credentials
     * @return bool
     */
    public function validate(array $credentials = []): bool
    {
        if (empty($credentials[$this->tokenKey])) {
            return false;
        }

        $credentials = [$this->tokenKey => $credentials[$this->tokenKey]];

        if ($this->provider->retrieveByCredentials($credentials)) {
            return true;
        }

        return false;
    }

}
