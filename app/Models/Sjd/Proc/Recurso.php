<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 27 Apr 2018 00:27:02 +0000.
 */

namespace App\Models\Sjd\Proc;

use Reliese\Database\Eloquent\Model as Eloquent;
//para monitorar o CREATE, UPDATE e DELETE e salvar log automaticamente
use Spatie\Activitylog\Traits\LogsActivity;
// para 'apresentar' já formatado e tirar lógica das views
use Laracasts\Presenter\PresentableTrait;
// para não apagar diretamente, inserir data em "deleted_at"
use Illuminate\Database\Eloquent\SoftDeletes;
class Recurso extends Eloquent
{
    use SoftDeletes;

	protected $table = 'recurso';
	protected $primaryKey = 'id_recurso';
	public $timestamps = true;

	protected $casts = [
		'sjd_ref' => 'int',
		'sjd_ref_ano' => 'int',
		'id_movimento' => 'int'
	];

	protected $dates = [
        'datahora',
        'deleted_at'
	];

	protected $fillable = [
		'cdopm',
		'opm',
		'rg',
		'nome',
		'procedimento',
		'sjd_ref',
		'sjd_ref_ano',
		'datahora',
		'id_movimento'
    ];
    
    //Activitylog
	use LogsActivity;

    protected static $logName = 'recurso';
    protected static $logAttributes = ['*'];
	protected static $logOnlyDirty = true;
    
    use PresentableTrait;
    protected $presenter = 'App\Presenters\proc\RecursoPresenter';

	public function scopeRef_ano($query, $ref, $ano)
	{
		return $query->where('sjd_ref','=',$ref)
				->where('sjd_ref_ano','=',$ano);
	}

	public function scopeAno($query, $ano)
	{
		return $query->where('sjd_ref_ano','=',$ano);
	}

	public function scopeAno_unidade($query, $ano, $unidade)
	{
		return $query->where('sjd_ref_ano','=',$ano)
					->where('cdopm', 'like', $unidade.'%');
	}

	public function scopeUltimo_id($query)
	{
		return $query->max('id_recurso');
    }
    
    //mutators (para alterar na hora da exibição)
    public function getDatahoraAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setDatahoraAttribute($value)
    {
        $this->attributes['datahora'] = data_bd($value);
    }
}
