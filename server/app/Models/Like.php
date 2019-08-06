<?php

namespace App\Models;

use App\Traits\Favoritable;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use Favoritable;

    protected $fillable = ['likeable_id', 'likeable_type'];
    protected $appends = ['is_liked'];
}
