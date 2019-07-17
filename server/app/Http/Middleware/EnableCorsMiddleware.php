<?php

namespace App\Http\Middleware;

use Closure;

class EnableCorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        // It rewrites headers and cause error during tests
        if(config("app.env") !== "testing") {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
        }

        return $next($request);
    }
}
