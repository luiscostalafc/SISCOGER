<?php

namespace App\Models\rhparana;

use Reliese\Database\Eloquent\Model as Eloquent;

class Civil extends Eloquent
{
    protected $connection = 'rhparana';
	protected $table = 'civil';
	protected $primaryKey = 'rg';
	public $timestamps = false;

	protected $fillable = [
		'rg',
        'nome',
        'cdopm',
        'funcao',
	];
}