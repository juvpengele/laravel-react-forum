<?php

namespace Tests;

use App\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function signIn(?User $user)
    {
        if(is_null($user)) {
            $user = create(User::class);
        }

        $this->actingAs($user);

        return $this;
    }
}
