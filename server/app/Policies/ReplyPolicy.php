<?php

namespace App\Policies;

use App\User;
use App\Models\Reply;
use Illuminate\Auth\Access\HandlesAuthorization;
use Tymon\JWTAuth\Facades\JWTAuth;


class ReplyPolicy
{
    use HandlesAuthorization;
    
    /**
     * Determine whether the user can view any replies.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the reply.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Reply  $reply
     * @return mixed
     */
    public function view(User $user, Reply $reply)
    {
        //
    }

    /**
     * Determine whether the user can create replies.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the reply.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Reply  $reply
     * @return mixed
     */
    public function update(User $user, Reply $reply)
    {
        //
    }

    /**
     * Determine whether the user can delete the reply.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Reply  $reply
     * @return mixed
     */
    public function delete(User $user, Reply $reply)
    {
        return (int) $user->id === (int) $reply->user_id;
    }

    /**
     * Determine whether the user can restore the reply.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Reply  $reply
     * @return mixed
     */
    public function restore(User $user, Reply $reply)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the reply.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Reply  $reply
     * @return mixed
     */
    public function forceDelete(User $user, Reply $reply)
    {
        //
    }
}
