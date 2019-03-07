<?php

namespace App\Http\Controllers\_Api\SJD\Proc;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Auth;
use App\User;
use App\Repositories\DesercaoRepository;

class DesercaoApiController extends Controller
{
    public function find($id, DesercaoRepository $repository)
    {
        return $repository->find($id);
    }

    public function refAno($ref, $ano, DesercaoRepository $repository)
    {
        return $repository->refAno($ref, $ano);
    }

    public function all(DesercaoRepository $repository)
    {
        return $repository->all();
    }

    public function ano($ano, DesercaoRepository $repository)
    {
        return $repository->ano($ano);
    }

    public function andamento(DesercaoRepository $repository)
    {
        return $repository->andamento();
    }

    public function andamentoAno($ano, DesercaoRepository $repository)
    {
        return $repository->andamentoAno($ano);
    }

    public function prazos(DesercaoRepository $repository)
    {
        return $repository->prazos();
    }

    public function prazosAno($ano)
    {
        return $repository->prazosAno($ano);
    }

    public function relSituacao(DesercaoRepository $repository)
    {
        return $repository->relSituacao($ano);
    }

    public function relSituacaoAno($ano, DesercaoRepository $repository)
    {
        return $repository->relSituacaoAno($ano);
    }

    public function julgamento(DesercaoRepository $repository)
    {
        return $repository->julgamento();
    }

    public function julgamentoAno($ano, DesercaoRepository $repository)
    {
        return $repository->julgamentoAno($ano);
    }
}
