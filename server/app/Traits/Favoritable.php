<?php

namespace App\Traits;


use App\Models\Like;

trait Favoritable
{
    /**
     * Polymorphic relationship between a thread and likes
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }

    /**
     * Check if a user has liked a post
     * @return bool
     */
    public function getIsLikedAttribute() : bool
    {
        if(auth()->check()) {
            return $this->likes()->where([ 'user_id' => auth()->id() ])->count() > 0;
        }
        return false;
    }
}
