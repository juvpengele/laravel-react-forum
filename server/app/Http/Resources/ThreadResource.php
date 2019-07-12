<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ThreadResource extends JsonResource
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
            "id" => $this->id,
            "title" => $this->title,
            "slug"      => $this->slug,
            "description"   => $this->description,
            "content"   => $this->content,
            "creator"   => $this->creator,
            "created_at"    => $this->created_at->diffForHumans(),
            "category" => $this->category,
            "visits_count"  => $this->visits_count
        ];
    }
}
