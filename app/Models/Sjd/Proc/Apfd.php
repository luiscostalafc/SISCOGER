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
class Apfd extends Eloquent
{
    use SoftDeletes;

	protected $table = 'apfd';
	protected $primaryKey = 'id_apfd';
	public $timestamps = true;

	protected $casts = [
		'id_andamento' => 'int',
		'id_andamentocoger' => 'int',
		'sjd_ref' => 'int',
		'sjd_ref_ano' => 'int',
		'prioridade' => 'int'
	];

	protected $dates = [
        'fato_data',
        'deleted_at'
	];

	protected $fillable = [
		'id_andamento',
		'id_andamentocoger',
		'sjd_ref',
		'sjd_ref_ano',
		'tipo',
		'cdopm',
		'fato_data',
		'sintese_txt',
		'tipo_penal',
		'tipo_penal_novo',
		'especificar',
		'doc_tipo',
		'doc_numero',
		'exclusao_txt',
		'opm_meta4',
		'referenciavajme',
		'prioridade'
    ];
    
    //Activitylog
	use LogsActivity;

    protected static $logName = 'apfd';
    protected static $logAttributes = ['*'];
	protected static $logOnlyDirty = true;
    
    use PresentableTrait;
    protected $presenter = 'App\Presenters\proc\ApfdPresenter';
 
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
		return $query->max('id_apfd');
    }
    
    //mutators (para alterar na hora da exibição)
    public function getFatoDataAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setFatoDataAttribute($value)
    {
        $this->attributes['Fato_data'] = data_bd($value);
    }

}
