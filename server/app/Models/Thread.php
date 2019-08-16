<?php

namespace App\Models;

use App\Traits\Favoritable;
use App\User;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    use Favoritable;

    protected $fillable = ['best_reply_id'];

    public $with = ["category", "creator"];
    public $appends = ['ago', 'is_liked'];


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
     * Relationship between Thread and Reply
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    /**
     * The key name for model binding route
     * @return string
     */
    public function getRouteKeyName() : string
    {
        return 'slug';
    }

    /**
     * @return string
     */
    public function getDescriptionAttribute() : string
    {
        return substr($this->content, 0, 50). "...";
    }

    public function getAgoAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function scopeSearch($query, $term)
    {
        return $query->where('title', "LIKE", "%{$term}%");
    }

}
