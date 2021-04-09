<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Designer extends Employee
{
    use HasFactory;
    protected $fillable = [
        'employee_id',
        'type'
    ];
}
