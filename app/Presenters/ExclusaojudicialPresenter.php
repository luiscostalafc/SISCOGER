<?php
namespace App\Presenters;

use Laracasts\Presenter\Presenter;

class ExclusaojudicialPresenter extends Presenter {
	
    public function createdAt()
    {
        return $this->created_at->format('d/m/Y');
    }

    public function statusPriorityColor()
    {
            $labels = [
                '4'  => 'primary',
                '3'  => 'success',
                '2'  => 'warning',
                '1'  => 'danger'
            ];

            return $labels[$this->prioridade];
    }

}

/*
protected $fillable = [
		'rg',
		'cargo',
		'nome',
		'cdopm_quandoexcluido',
		'origem_proc',
		'origem_sjd_ref',
		'origem_sjd_ref_ano',
		'origem_opm',
		'processo',
		'complemento',
		'vara',
		'numerounico',
		'data',
		'exclusao_data',
		'obs_txt',
		'portaria_numero',
		'bg_numero',
		'bg_ano',
		'prioridade'
    ];
    */