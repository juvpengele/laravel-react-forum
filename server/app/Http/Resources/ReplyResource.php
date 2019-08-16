<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'        => $this->id,
            'content'   => $this->content,
            'thread_id' => $this->thread_id,
            'creator'   => $this->creator,
            'ago'       => $this->ago,
            'user_id'   => $this->creator->id,
            'likes_count' => $this->likes()->count(),
            'is_liked' => $this->is_liked
        ];
    }
}
