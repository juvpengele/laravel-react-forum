<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    public $appends = ["description"];

    public function creator()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    /**
     * @return string
     */
    public function getDescriptionAttribute()
    {
        return substr($this->content, 0, 50). "...";
    }
}
