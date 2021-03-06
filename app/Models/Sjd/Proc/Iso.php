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
class Iso extends Eloquent
{	
    use SoftDeletes;

	protected $table = 'iso';
	protected $primaryKey = 'id_iso';
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
		'abertura_data',
		'portaria_data',
		'relatoriomedico_data',
        'solucaoautoridade_data',
        'deleted_at'
    ];
    
    public static $files = [
        'relatoriomedico_file',
		'solucaoautoridade_file',
    ];

	protected $fillable = [
		'id_andamento',
		'id_andamentocoger',
		'sjd_ref',
		'sjd_ref_ano',
		'cdopm',
		'fato_data',
		'abertura_data',
		'sintese_txt',
		'tipo_penal',
		'doc_tipo',
		'doc_numero',
		'portaria_numero',
		'portaria_data',
		'exclusao_txt',
		'opm_meta4',
		'relatoriomedico_file',
		'solucaoautoridade_file',
		'relatoriomedico_data',
		'solucaoautoridade_data',
		'prioridade'
    ];

    //Activitylog
	use LogsActivity;

    protected static $logName = 'iso';
    protected static $logAttributes = ['*'];
	protected static $logOnlyDirty = true;
    
    use PresentableTrait;
    protected $presenter = 'App\Presenters\proc\IsoPresenter';
    
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
		return $query->max('id_iso');
    }
    
    //mutators (para alterar na hora da exibição)
    public function getFatoDataAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setFatoDataAttribute($value)
    {
        $this->attributes['fato_data'] = data_bd($value);
    }

    //mutators (para alterar na hora da exibição)
    public function getAberturaDataAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setAberturaDataAttribute($value)
    {
        $this->attributes['abertura_data'] = data_bd($value);
    }

    //mutators (para alterar na hora da exibição)
    public function getPortariaDataAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setPortariaDataAttribute($value)
    {
        $this->attributes['portaria_data'] = data_bd($value);
    }

    //mutators (para alterar na hora da exibição)
    public function getRelatoriomedicoDataAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setRelatoriomedicoDataAttribute($value)
    {
        $this->attributes['Relatoriomedico_data'] = data_bd($value);
    }

    //mutators (para alterar na hora da exibição)
    public function getSolucaoautoridadeDataAttribute($value)
    {
        return data_br($value);
    }

    //mutators (para alterar na hora de salvar no banco)
    public function setSolucaoautoridadeDataAttribute($value)
    {
        $this->attributes['solucaoautoridade_data'] = data_bd($value);
    }

}
