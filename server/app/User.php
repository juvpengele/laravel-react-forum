<?php

namespace App;

use App\Models\Like;
use App\Models\Reply;
use Illuminate\Http\UploadedFile;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    const DEFAULT_AVATAR = 'default.png';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'profile_picture'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'created_at', 'email_verified_at', 'updated_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function setPasswordAttribute($password)
    {
        $this->attributes['password'] = bcrypt($password);
    }

    public static function token($userId)
    {
        return auth()->tokenById($userId);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class, 'user_id');
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function like($model)
    {
        return $this->likes()->create([
            'likeable_id' => $model->id,
            'likeable_type' => get_class($model)
        ]);
    }

    public function unlike($model)
    {
        $this->likes()->where([
            'likeable_id' => $model->id,
            'likeable_type' => get_class($model)
        ])->delete();
    }

    public function getTokenAttribute()
    {
        return User::token($this->id);
    }

    public function updateAvatar(UploadedFile $image) : string
    {
        $pictureName = Str::random(40) .".". $image->getClientOriginalExtension();
        $image->storeAs("avatars", $pictureName, ['disk' => 'public']);

        $this->update([
            'profile_picture' => $pictureName
        ]);

        $this->removePreviousAvatar();

        return $this->avatar;
    }

    public function getAvatarAttribute()
    {
        return asset("storage/avatars/". $this->attributes['profile_picture']);
    }

    private function removePreviousAvatar()
    {
        $avatar = $this->attributes['profile_picture'];

        if($avatar !== User::DEFAULT_AVATAR) {
            Storage::disk('public')->delete('avatars/'. $avatar);
        }
    }

}
