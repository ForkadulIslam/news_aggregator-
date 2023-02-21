<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class My_feed extends Model
{
    protected $fillable = ['user_id','category','source_id'];
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }
}
