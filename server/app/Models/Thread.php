<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    public $appends = ["description"];
    public $with = ["category"];

    /**
     * Relation between a thread and the creator
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function creator()
    {
        return $this->belongsTo(User::class, "user_id");
    }

    /**
     * Relationship between Thread and Category
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * @return string
     */
    public function getDescriptionAttribute()
    {
        return substr($this->content, 0, 50). "...";
    }


}
