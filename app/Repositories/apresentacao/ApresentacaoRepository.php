<?php
//Aqui ficam as consultas de banco de dados dos processos e procedimentos
namespace App\Repositories\apresentacao;

use Cache;
use App\Models\Sjd\Apresentacao\Apresentacao;
use App\Repositories\BaseRepository;

class ApresentacaoRepository extends BaseRepository
{
    protected $model;
    protected $unidade;
    protected $verTodasUnidades;
    protected static $expiration = 60 * 24;//um dia; 

	public function __construct(Apresentacao $model)
	{
        $this->model = $model;
        
        $this->verTodasUnidades = session('ver_todas_unidades');
        $this->unidade = session('cdopmbase');
    }

    public function clearCache()
	{
        Cache::tags('apresentacao')->flush();
    }

    public function datesToCreate($dados) {
        $ano = (int) date('Y');

        $ref = $this->maxRef();
        //referência e ano
        $dados['sjd_ref'] = $ref+1;
        $dados['sjd_ref_ano'] = $ano;
        
        return $dados;
    }

    public function opmAno($cdopm, $ano)
	{
        if(hasPermissionTo('listar-apresentacoes-reservadas')) $registros = $this->reservados($cdopm, $ano);
        else $registros = $this->publicos($cdopm, $ano);
        return $registros;
    }

    public function publicos($cdopm, $ano)
	{
        $registros = Cache::tags('apresentacao')->remember('apresentacao:publico:'.$cdopm.$ano, self::$expiration, function() use($cdopm, $ano){
            return $this->model
            ->orWhere('pessoa_opm_codigo','like',"$cdopm%")
            ->orWhere('pessoa_unidade_lotacao_codigo','like',"$cdopm%")
            ->where([
                ['id_apresentacaoclassificacaosigilo','<=','2'],
                ['comparecimento_data','like',"$ano-%"]
            ])
            ->get();
            // dd($registros);
        });

        return $registros;
    } 

    public function reservados($cdopm, $ano)
	{
        $registros = Cache::tags('apresentacao')->remember('apresentacao:reservados:'.$cdopm.$ano, self::$expiration, function() use($cdopm, $ano){
            return $this->model
            ->orWhere('pessoa_opm_codigo','like',"$cdopm%")
            ->orWhere('pessoa_unidade_lotacao_codigo','like',"$cdopm%")
            ->where('comparecimento_data','like',"$ano-%")
            ->get();
        });

        return $registros;
    } 

    public function listNota($id) {
        $registros = Cache::tags('apresentacao')->remember('apresentacao:notacoger:'.$id, self::$expiration, function() use($id){
            return $this->model
            ->where('id_notacomparecimento',$id)
            ->get();
        });

        return $registros;
    }

    public function ano($ano, $cdopm)
	{

        $registros = Cache::tags('apresentacao')->remember('apresentacao:'.$ano.$cdopm, self::$expiration, function() use ($ano, $cdopm) {
            return $this->model->whereYear('comparecimento_data', $ano)->where('pessoa_opm_codigo','like',"$cdopm%")->get();
        });

        return $registros;
    } 


    public function apresentacoesPM($rg)
    {
        $registros = Cache::tags('apresentacao')->remember('apresentacao:rg'.$rg, self::$expiration, function() use ($rg) {
            return $this->model->where('pessoa_rg','=', $rg)->get();
        });

        return $registros;
    }

    public function findAndDestroy($id)
	{
        try {
            $this->model->withTrashed()->findOrFail($id)->forceDelete();
            return true;
        } catch (\Throwable $th) {
            toast()->error($th->getMessage(),'ERRO');
            return false;
        }
    }

}

