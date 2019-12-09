<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserProfileTest extends TestCase
{

    use WithFaker, RefreshDatabase;

    /** @test */
    public function a_user_can_update_his_avatar()
    {
        Storage::fake("public");
        $john = create(User::class);

        $this->putJson("/api/me/avatar?token={$john->token}", [
            "avatar" => UploadedFile::fake()->image("avatar.png")
        ]);

        $this->assertNotEquals("default.png", $john->fresh()->profile_picture);
        Storage::disk("public")->assertExists("avatars/".$john->fresh()->profile_picture);
    }

    /** @test */
    public function if_a_user_updates_his_avatar__the_previous_avatar_is_removed()
    {
        Storage::fake("public");
        $john = create(User::class);

        $this->putJson("/api/me/avatar?token={$john->token}", [
            "avatar" => UploadedFile::fake()->image("avatar.png")
        ]);

        $previousProfilePicture = $john->fresh()->profile_picture;

        $this->putJson("/api/me/avatar?token={$john->token}", [
            "avatar" => UploadedFile::fake()->image("avatar.png")
        ]);

        Storage::disk("public")->assertMissing("avatars/".$previousProfilePicture);
    }

    /** @test */
    public function a_user_can_remove_his_profile_picture()
    {
        Storage::fake("public");
        $john = create(User::class);

        $this->putJson("/api/me/avatar?token={$john->token}", [
            "avatar" => UploadedFile::fake()->image("avatar.png")
        ]);

        $previousProfilePicture = $john->fresh()->profile_picture;

        $this->deleteJson("/api/me/avatar?token={$john->token}");

        Storage::disk("public")->assertMissing("avatars/".$previousProfilePicture);
        $this->assertEquals("default.png", $john->fresh()->profile_picture);
    }

    /** @test */
    public function updating_an_avatar_requires_an_image()
    {
        $this->withExceptionHandling();

        $john = create(User::class);
        $response = $this->putJson("/api/me/avatar?token={$john->token}", ["avatar" => ""]);

        $jsonResponse = $response->json();

        $this->assertContains("avatar", array_keys($jsonResponse["errors"]));
    }
}
