<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateThreadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('threads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string("title");
            $table->string("slug")->index();
            $table->text("content");
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("category_id");
            $table->unsignedBigInteger("best_reply_id")->nullable();
            $table->unsignedBigInteger("visits_count")->default(0);
            $table->timestamps();

            $table->foreign("category_id")->references("id")->on("categories")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('threads');
    }
}
