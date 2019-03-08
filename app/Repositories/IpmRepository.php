<?php
//Aqui ficam as consultas de banco de dados dos processos e procedimentos
namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use Auth;
use Cache;
use App\User;
use App\Models\Sjd\Proc\Ipm;
use App\Repositories\BaseRepository;

class IpmRepository extends BaseRepository
{
    protected $model;
    protected static $expiration = 60; 

	public function __construct(Ipm $model)
	{
		$this->model = $model;
    }
    
    public function all()
	{
        $unidade = session('cdopmbase');
        //verifica se o usuário tem permissão para ver todas unidades
        $verTodasUnidades = session('ver_todas_unidades');

        if($verTodasUnidades)
        {
            $registros = Cache::remember('todos_ipm', 60, function() {
                return $this->model->all();
            });
        }
        else 
        {
            $registros = Cache::remember('todos_ipm_'.$unidade, 60, function() use ($unidade) {
                return $this->model->where('cdopm','like',$unidade.'%')->get();
            });
        }

        return $registros;
    } 

    public function ano($ano)
	{
        $unidade = session('cdopmbase');
        //verifica se o usuário tem permissão para ver todas unidades
        $verTodasUnidades = session('ver_todas_unidades');

        if($verTodasUnidades)
        {
            $registros = Cache::remember('todos_ipm'.$ano, 60, function() use ($ano) {
                return $this->model->where('sjd_ref_ano','=',$ano)->get();
            });
        }
        else 
        {
            $registros = Cache::remember('todos_ipm_'.$unidade.$ano, 60, function() use ($unidade, $ano) {
                return $this->model->where('cdopm','like',$unidade.'%')->where('sjd_ref_ano','=',$ano)->get();
            });
        }
        return $registros;
    } 

    public function andamento()
	{
        $unidade = session('cdopmbase');
        //verifica se o usuário tem permissão para ver todas unidades
        $verTodasUnidades = session('ver_todas_unidades');

        if($verTodasUnidades)
        {
            $registros = Cache::remember('andamento_ipm', 60, function() {
                return $this->model
                    ->leftJoin('envolvido', function ($join){
                    $join->on('envolvido.id_ipm', '=', 'ipm.id_ipm')
                        ->where('envolvido.situacao', '=', 'Presidente')
                        ->where('envolvido.rg_substituto', '=', ''); 
                    })->get();
            });
        }
        else 
        {
            $registros = Cache::remember('andamento_ipm_'.$unidade, 60, function() use ($unidade) {
                return $this->model->where('cdopm','like',$unidade.'%')
                    ->leftJoin('envolvido', function ($join){
                    $join->on('envolvido.id_ipm', '=', 'ipm.id_ipm')
                        ->where('envolvido.situacao', '=', 'Presidente')
                        ->where('envolvido.rg_substituto', '=', ''); 
                    })->get();
            });
        }
        return $registros;
    }

    public function andamentoAno($ano)
	{
        $unidade = session('cdopmbase');
        //verifica se o usuário tem permissão para ver todas unidades
        $verTodasUnidades = session('ver_todas_unidades');

        if($verTodasUnidades)
        {
            $registros = Cache::remember('andamento_ipm', 60, function() use ($ano){
                return $this->model->where('sjd_ref_ano', '=' ,$ano)
                    ->leftJoin('envolvido', function ($join){
                    $join->on('envolvido.id_ipm', '=', 'ipm.id_ipm')
                        ->where('envolvido.situacao', '=', 'Presidente')
                        ->where('envolvido.rg_substituto', '=', ''); 
                    })->get();
            });
        }
        else 
        {
            $registros = Cache::remember('andamento_ipm_'.$unidade, 60, function() use ($unidade, $ano) {
                return $this->model->where('sjd_ref_ano', '=' ,$ano)
                    ->where('cdopm','like',$unidade.'%')
                    ->leftJoin('envolvido', function ($join){
                    $join->on('envolvido.id_ipm', '=', 'ipm.id_ipm')
                        ->where('envolvido.situacao', '=', 'Presidente')
                        ->where('envolvido.rg_substituto', '=', ''); 
                    })->get();
            });
        }
        return $registros;
    }

    public function julgamento()
	{
        $unidade = session('cdopmbase');
        //verifica se o usuário tem permissão para ver todas unidades
        $verTodasUnidades = session('ver_todas_unidades');

        if($verTodasUnidades)
        {
            $registros = Cache::remember('julgamento_ipm', 60, function() {
                return $this->model
                    ->leftJoin('envolvido', function ($join) {
                        $join->on('envolvido.id_ipm', '=', 'ipm.id_ipm')
                                ->where('envolvido.id_ipm', '<>', 0);
                    })
                    ->leftJoin('punicao', 'punicao.id_punicao', '=', 'envolvido.id_punicao')
                    ->where('envolvido.situacao','=',sistema('procSituacao','ipm'))
                    ->get();
            });
        }
        else 
        {
            $registros = Cache::remember('julgamento_ipm_'.$unidade, 60, function() use ($unidade) {
                return $this->model->where('cdopm','like',$unidade.'%')
                    ->leftJoin('envolvido', function ($join){
                        $join->on('envolvido.id_ipm', '=', 'ipm.id_ipm')
                                ->where('envolvido.id_ipm', '<>', 0);
                    })
                    ->leftJoin('punicao', 'punicao.id_punicao', '=', 'envolvido.id_punicao')
                    ->where('envolvido.situacao','=',sistema('procSituacao','ipm'))
                    ->get();
            });
        }
        return $registros;
    }

    public function julgamentoAno($ano)
	{
        $unidade = session('cdopmbase');
        //verifica se o usuário tem permissão para ver todas unidades
        $verTodasUnidades = session('ver_todas_unidades');

        if($verTodasUnidades)
        {
            $registros = Cache::remember('julgamento_ipm', 60, function() use ($ano){
                return $this->model->where('sjd_ref_ano', '=' ,$ano)
                    ->leftJoin('envolvido', function ($join) {
                        $join->on('envolvido.id_ipm', '=', 'ipm.id_ipm')
                                ->where('envolvido.id_ipm', '<>', 0);
                    })
                    ->leftJoin('punicao', 'punicao.id_punicao', '=', 'envolvido.id_punicao')
                    ->where('envolvido.situacao','=',sistema('procSituacao','ipm'))
                    ->get();
            });
        }
        else 
        {
            $registros = Cache::remember('julgamento_ipm_'.$unidade, 60, function() use ($unidade,$ano) {
                return $this->model->where('sjd_ref_ano', '=' ,$ano)
                    ->where('cdopm','like',$unidade.'%')
                    ->leftJoin('envolvido', function ($join){
                        $join->on('envolvido.id_ipm', '=', 'ipm.id_ipm')
                                ->where('envolvido.id_ipm', '<>', 0);
                    })
                    ->leftJoin('punicao', 'punicao.id_punicao', '=', 'envolvido.id_punicao')
                    ->where('envolvido.situacao','=',sistema('procSituacao','ipm'))
                    ->get();
            });
        }
        return $registros;
    }

    public static function prazos()
    {
        //traz os dados do usuário
        $unidade = session()->get('cdopmbase');

        //verifica se o usuário tem permissão para ver todas unidades
        $verTodasUnidades = session('ver_todas_unidades');

        if($verTodasUnidades)
        {

            $registros = Cache::remember('ipm_prazo_opm', 60, function() {
                return DB::connection('sjd')->select('SELECT ipm.*, envolvido.cargo, envolvido.nome, 
                    (DATEDIFF(DATE(NOW()),autuacao_data)+1) AS diasuteis FROM ipm
                    LEFT JOIN envolvido ON envolvido.id_ipm=ipm.id_ipm AND envolvido.situacao=:situacao AND rg_substituto=:rg_substituto', 
                        [
                            'situacao' => 'Encarregado',
                            'rg_substituto' => ''
                        ]); 
                    });
                    
        }
        else 
        {
                $registros = Cache::remember('ipm'.$unidade.'_prazo_topm', 60, function() use ($unidade){
                        return DB::connection('sjd')->select('SELECT ipm.*, envolvido.cargo, envolvido.nome, 
                            (DATEDIFF(DATE(NOW()),autuacao_data)+1) AS diasuteis FROM ipm
                            LEFT JOIN envolvido ON
                                envolvido.id_ipm=ipm.id_ipm AND envolvido.situacao=:situacao AND rg_substituto=:rg_substituto
                            WHERE ipm.cdopm like :unidade%', 
                                [
                                    'situacao' => 'Encarregado',
                                    'rg_substituto' => '',
                                    'unidade' => $unidade
                                ]); 
    
                });   
        }
        return $registros;
    }

    public static function prazosAno($ano)
    {
        //traz os dados do usuário
        $unidade = session()->get('cdopmbase');

        //verifica se o usuário tem permissão para ver todas unidades
        $verTodasUnidades = session('ver_todas_unidades');

        if($verTodasUnidades)
        {

            $registros = Cache::remember('ipm_prazo_opm'.$ano, 60, function() use ($ano) {
                return DB::connection('sjd')->select('SELECT ipm.*, envolvido.cargo, envolvido.nome, 
                    (DATEDIFF(DATE(NOW()),autuacao_data)+1) AS diasuteis FROM ipm
                    LEFT JOIN envolvido ON envolvido.id_ipm=ipm.id_ipm AND envolvido.situacao=:situacao AND rg_substituto=:rg_substituto
                    WHERE ipm.sjd_ref_ano = :ano', 
                        [
                            'situacao' => 'Encarregado',
                            'rg_substituto' => '',
                            'ano' => $ano
                        ]); 
                });
                    
        }
        else 
        {
            $registros = Cache::remember('ipm'.$unidade.'_prazo_topm', 60, function() use ($unidade, $ano){
                return DB::connection('sjd')->select('SELECT ipm.*, envolvido.cargo, envolvido.nome, 
                    (DATEDIFF(DATE(NOW()),autuacao_data)+1) AS diasuteis FROM ipm
                    LEFT JOIN envolvido ON
                        envolvido.id_ipm=ipm.id_ipm AND envolvido.situacao=:situacao AND rg_substituto=:rg_substituto
                    WHERE ipm.cdopm like :unidade% AND sjd_ref_ano = :ano', 
                        [
                            'situacao' => 'Encarregado',
                            'rg_substituto' => '',
                            'unidade' => $unidade,
                            'ano' => $ano
                        ]); 

            });   
        }
        return $registros;
    }


}
