<?php
//Aqui ficam as consultas de banco de dados dos processos e procedimentos
namespace App\Repositories;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use Auth;
use Cache;
use App\User;
use App\Models\Sjd\Proc\Cd;
use App\Repositories\BaseRepository;

class CdRepository extends BaseRepository
{
    protected $model;
    protected static $expiration = 60; 

	public function __construct(Cd $model)
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
            $registros = Cache::remember('todos_cd', self::$expiration, function() {
                return $this->model->all();
            });
        }
        else 
        {
            $registros = Cache::remember('todos_cd_'.$unidade, self::$expiration, function() use ($unidade) {
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
            $registros = Cache::remember('todos_cd'.$ano, self::$expiration, function() use ($ano) {
                return $this->model->where('sjd_ref_ano','=',$ano)->get();
            });
        }
        else 
        {
            $registros = Cache::remember('todos_cd_'.$unidade.$ano, self::$expiration, function() use ($unidade, $ano) {
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
            $registros = Cache::remember('andamento_cd', self::$expiration, function() {
                return $this->model
                    ->leftJoin('envolvido', function ($join){
                    $join->on('envolvido.id_cd', '=', 'cd.id_cd')
                        ->where('envolvido.situacao', '=', 'Presidente')
                        ->where('envolvido.rg_substituto', '=', ''); 
                    })->get();
            });
        }
        else 
        {
            $registros = Cache::remember('andamento_cd_'.$unidade, self::$expiration, function() use ($unidade) {
                return $this->model->where('cdopm','like',$unidade.'%')
                    ->leftJoin('envolvido', function ($join){
                    $join->on('envolvido.id_cd', '=', 'cd.id_cd')
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
            $registros = Cache::remember('andamento_cd', self::$expiration, function() use ($ano){
                return $this->model->where('sjd_ref_ano', '=' ,$ano)
                    ->leftJoin('envolvido', function ($join){
                    $join->on('envolvido.id_cd', '=', 'cd.id_cd')
                        ->where('envolvido.situacao', '=', 'Presidente')
                        ->where('envolvido.rg_substituto', '=', ''); 
                    })->get();
            });
        }
        else 
        {
            $registros = Cache::remember('andamento_cd_'.$unidade, self::$expiration, function() use ($unidade, $ano) {
                return $this->model->where('sjd_ref_ano', '=' ,$ano)
                    ->where('cdopm','like',$unidade.'%')
                    ->leftJoin('envolvido', function ($join){
                    $join->on('envolvido.id_cd', '=', 'cd.id_cd')
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
            $registros = Cache::remember('julgamento_cd', self::$expiration, function() {
                return $this->model
                    ->leftJoin('envolvido', function ($join) {
                        $join->on('envolvido.id_cd', '=', 'cd.id_cd')
                                ->where('envolvido.id_cd', '<>', 0);
                    })
                    ->leftJoin('punicao', 'punicao.id_punicao', '=', 'envolvido.id_punicao')
                    ->where('envolvido.situacao','=',sistema('procSituacao','cd'))
                    ->get();
            });
        }
        else 
        {
            $registros = Cache::remember('julgamento_cd_'.$unidade, self::$expiration, function() use ($unidade) {
                return $this->model->where('cdopm','like',$unidade.'%')
                    ->leftJoin('envolvido', function ($join){
                        $join->on('envolvido.id_cd', '=', 'cd.id_cd')
                                ->where('envolvido.id_cd', '<>', 0);
                    })
                    ->leftJoin('punicao', 'punicao.id_punicao', '=', 'envolvido.id_punicao')
                    ->where('envolvido.situacao','=',sistema('procSituacao','cd'))
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
            $registros = Cache::remember('julgamento_cd', self::$expiration, function() use ($ano){
                return $this->model->where('sjd_ref_ano', '=' ,$ano)
                    ->leftJoin('envolvido', function ($join) {
                        $join->on('envolvido.id_cd', '=', 'cd.id_cd')
                                ->where('envolvido.id_cd', '<>', 0);
                    })
                    ->leftJoin('punicao', 'punicao.id_punicao', '=', 'envolvido.id_punicao')
                    ->where('envolvido.situacao','=',sistema('procSituacao','cd'))
                    ->get();
            });
        }
        else 
        {
            $registros = Cache::remember('julgamento_cd_'.$unidade, self::$expiration, function() use ($unidade,$ano) {
                return $this->model->where('sjd_ref_ano', '=' ,$ano)
                    ->where('cdopm','like',$unidade.'%')
                    ->leftJoin('envolvido', function ($join){
                        $join->on('envolvido.id_cd', '=', 'cd.id_cd')
                                ->where('envolvido.id_cd', '<>', 0);
                    })
                    ->leftJoin('punicao', 'punicao.id_punicao', '=', 'envolvido.id_punicao')
                    ->where('envolvido.situacao','=',sistema('procSituacao','cd'))
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

            $registros = Cache::remember('cd_prazo_opm', self::$expiration, function() {
                return DB::connection('sjd')->select('SELECT cd.*, 
                    (SELECT  motivo FROM    sobrestamento WHERE  sobrestamento.id_cd=cd.id_cd ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1) AS motivo,  
                    (SELECT  motivo_outros FROM  sobrestamento WHERE   sobrestamento.id_cd=cd.id_cd ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1) AS motivo_outros, 
                    envolvido.cargo, envolvido.nome, dias_uteis(abertura_data,DATE(NOW())) AS dutotal, 
                    b.dusobrestado, (dias_uteis(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis FROM cd
                    LEFT JOIN
                    (SELECT id_cd, SUM(dias_uteis(inicio_data, termino_data)+1) AS dusobrestado fROM sobrestamento
                        WHERE termino_data !=:termino_data AND id_cd!=:id_cd GROUP BY id_cd) b ON b.id_cd = cd.id_cd
                    LEFT JOIN envolvido ON envolvido.id_cd=cd.id_cd AND envolvido.situacao=:situacao AND rg_substituto=:rg_substituto', 
                        [
                            'termino_data' => '0000-00-00',
                            'id_cd' => '',
                            'situacao' => 'Presidente',
                            'rg_substituto' => ''
                        ]); 
                    });
                    
        }
        else 
        {
                $registros = Cache::remember('cd'.$unidade.'_prazo_topm', self::$expiration, function() use ($unidade){
                        return DB::connection('sjd')->select('SELECT cd.*, 
                        (
                            SELECT  motivo
                            FROM    sobrestamento
                            WHERE   sobrestamento.id_cd=cd.id_cd 
                            ORDER BY sobrestamento.id_sobrestamento DESC
                            LIMIT 1
                        ) AS motivo,  
                        (
                            SELECT  motivo_outros
                            FROM    sobrestamento
                            WHERE   sobrestamento.id_cd=cd.id_cd 
                            ORDER BY sobrestamento.id_sobrestamento DESC
                            LIMIT 1
                        ) AS motivo_outros, envolvido.cargo, envolvido.nome, dias_uteis(abertura_data,DATE(NOW())) AS dutotal, 
                        b.dusobrestado, 
                        (dias_uteis(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis FROM cd
                        LEFT JOIN
                        (SELECT id_cd, SUM(dias_uteis(inicio_data, termino_data)+1) AS dusobrestado fROM sobrestamento
                            WHERE termino_data !=:termino_data AND id_cd!=:id_cd 
                            GROUP BY id_cd) b  
                            ON b.id_cd = cd.id_cd 
                            AND cd.cdopm like :unidade%
                        LEFT JOIN envolvido ON
                            envolvido.id_cd=cd.id_cd AND envolvido.situacao=:situacao AND rg_substituto=:rg_substituto', 
                            [
                                'termino_data' => '0000-00-00',
                                'id_cd' => '',
                                'situacao' => 'Presidente',
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

            $registros = Cache::remember('cd_prazo_opm'.$ano, self::$expiration, function() use ($ano) {
                return DB::connection('sjd')->select('SELECT cd.*, 
                    (SELECT  motivo FROM sobrestamento WHERE   sobrestamento.id_cd=cd.id_cd ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1) AS motivo,  
                    (SELECT  motivo_outros FROM sobrestamento WHERE   sobrestamento.id_cd=cd.id_cd ORDER BY sobrestamento.id_sobrestamento DESC LIMIT 1
                    ) AS motivo_outros, envolvido.cargo, envolvido.nome, dias_uteis(abertura_data,DATE(NOW())) AS dutotal, 
                    b.dusobrestado, 
                    (dias_uteis(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis FROM cd
                    LEFT JOIN
                    (SELECT id_cd, SUM(dias_uteis(inicio_data, termino_data)+1) AS dusobrestado fROM sobrestamento WHERE termino_data !=:termino_data AND id_cd!=:id_cd GROUP BY id_cd) b ON b.id_cd = cd.id_cd
                    LEFT JOIN envolvido ON envolvido.id_cd=cd.id_cd AND envolvido.situacao=:situacao AND rg_substituto=:rg_substituto
                    WHERE cd.sjd_ref_ano :ano', 
                        [
                            'termino_data' => '0000-00-00',
                            'id_cd' => '',
                            'situacao' => 'Presidente',
                            'rg_substituto' => '',
                            'ano' => $ano
                        ]); 
                });
                    
        }
        else 
        {
            $registros = Cache::remember('cd'.$unidade.'_prazo_topm', self::$expiration, function() use ($unidade, $ano){
                return DB::connection('sjd')->select('SELECT cd.*, 
                (
                    SELECT  motivo
                    FROM    sobrestamento
                    WHERE   sobrestamento.id_cd=cd.id_cd 
                    ORDER BY sobrestamento.id_sobrestamento DESC
                    LIMIT 1
                ) AS motivo,  
                (
                    SELECT  motivo_outros
                    FROM    sobrestamento
                    WHERE   sobrestamento.id_cd=cd.id_cd 
                    ORDER BY sobrestamento.id_sobrestamento DESC
                    LIMIT 1
                ) AS motivo_outros, envolvido.cargo, envolvido.nome, dias_uteis(abertura_data,DATE(NOW())) AS dutotal, 
                b.dusobrestado, 
                (dias_uteis(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis FROM cd
                LEFT JOIN
                (SELECT id_cd, SUM(dias_uteis(inicio_data, termino_data)+1) AS dusobrestado fROM sobrestamento
                    WHERE termino_data !=:termino_data AND id_cd!=:id_cd 
                    GROUP BY id_cd) b  
                    ON b.id_cd = cd.id_cd 
                    AND cd.cdopm like :unidade%
                LEFT JOIN envolvido ON
                    envolvido.id_cd=cd.id_cd AND envolvido.situacao=:situacao AND rg_substituto=:rg_substituto
                WHERE sjd_ref_ano = :ano', 
                    [
                        'termino_data' => '0000-00-00',
                        'id_cd' => '',
                        'situacao' => 'Presidente',
                        'rg_substituto' => '',
                        'unidade' => $unidade,
                        'ano' => $ano
                    ]); 

            });   
        }
        return $registros;
    }


}
