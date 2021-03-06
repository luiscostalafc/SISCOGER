<?php

namespace App\Models\Sjd\Proc;

use Reliese\Database\Eloquent\Model as Eloquent;
//para monitorar o CREATE, UPDATE e DELETE e salvar log automaticamente
use Spatie\Activitylog\Traits\LogsActivity;
// para não apagar diretamente, inserir data em "deleted_at"
use Illuminate\Database\Eloquent\SoftDeletes;

class Arquivo extends Eloquent
{ 
    use SoftDeletes;

	protected $table = 'arquivo';
	protected $primaryKey = 'id_arquivo';
	public $timestamps = true;

	protected $casts = [
        'id_arquivo' => 'int',
        'id_ipm' => 'int',
		'id_cj' => 'int',
		'id_cd' => 'int',
		'id_adl' => 'int',
		'id_sindicancia' => 'int',
        'id_fatd' => 'int',
        'id_desercao' => 'int',
        'id_apfd' => 'int',
		'id_iso' => 'int',
		'id_it' => 'int',
		'id_sai' => 'int',
		'id_pad' => 'int',
        'id_proc_outros' => 'int',
        'id_punicao' => 'int'
	];

	protected $dates = [
		'arquivo_data',
		'retorno_data'
	];

	protected $fillable = [
        'id_arquivo',
        'local_atual',
        'obs',
        'numero',
        'letra',
        'id_ipm',
		'id_cj',
		'id_cd',
		'id_adl',
		'id_sindicancia',
        'id_fatd',
        'id_desercao',
        'id_apfd',
		'id_iso',
		'id_it',
		'id_sai',
		'id_pad',
        'id_proc_outros',
        'id_punicao',
        'rg',
        'nome',
        'opm',
        'arquivo_data',
        'retorno_data',
        'procedimento',
        'sjd_ref',
        'sjd_ref_ano'
    ];
    
    //Activitylog
    use LogsActivity;
    
    protected static $logName = 'arquivo';
    protected static $logAttributes = ['*'];
	protected static $logOnlyDirty = true;

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
		return $query->max('id_sobrestamento');
    }

    //mutators (para alterar na hora da exibição)
    public function getArquivoDataAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setArquivoDataAttribute($value)
    {
        $this->attributes['arquivo_data'] = data_bd($value);
    }

    //mutators (para alterar na hora da exibição)
    public function getRetornoDataAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setRetornoDataAttribute($value)
    {
        $this->attributes['retorno_data'] = data_bd($value);
    }
}
