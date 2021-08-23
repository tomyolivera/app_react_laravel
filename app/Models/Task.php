<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;

class Task extends Model
{
    use HasFactory;

    public function users(){
        return $this->belongsTo(User::class);
    }
}
