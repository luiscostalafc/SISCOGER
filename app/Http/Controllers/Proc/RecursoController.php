<?php

namespace App\Http\Controllers\Proc;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Auth;
use App\User;
use App\Models\Sjd\Proc\Recurso;
use App\Repositories\RecursoRepository;
use App\Models\Sjd\Busca\Envolvido;

class RecursoController extends Controller
{
    public function index()
    {
        return redirect()->route('recurso.lista');
    }

    public function lista(RecursoRepository $repository)
    {
        $registros = $repository->all();
        return view('procedimentos.recurso.list.index',compact('registros'));
    }

    public function apagados(RecursoRepository $repository)
    {
        $registros = $repository->apagados();
        return view('procedimentos.recurso.list.apagados',compact('registros'));
    }

    public function create()
    {
        return view('procedimentos.recurso.form.create');
    }

    public function store(Request $request)
    {
        //andamento (concluído) alguns campos ficam obrigatórios
        if(sistema('andamento',$request['id_andamento']) != 'CONCLUÍDO' ){
            $this->validate($request, [
                'id_andamento' => 'required',
                'sintese_txt' => 'required',
                ]);
        } else {
            $this->validate($request, [
                'id_andamento' => 'required',
                'sintese_txt' => 'required',
                ]);
        }
       
        //dados do formulário
        $dados = $this->datesToCreate($request); 

        $create = Recurso::create($dados);

        if($create)
        {
            RecursoRepository::cleanCache();
            toast()->success('N° '.$dados['sjd_ref'].'/'.'Recurso Inserido');
            return redirect()->route('recurso.lista');
        }

        toast()->error('Houve um erro na inserção');
        return redirect()->back();
        
    }
    
    public function show($ref, $ano)
    {
        //----levantar procedimento
        $proc = Recurso::ref_ano($ref,$ano)->first();
        if(!$proc) abort('404');

        $this->canSee($proc);

        return view('procedimentos.recurso.form.show', compact('proc'));
    }

    public function edit($ref, $ano)
    {
        //----levantar procedimento
        $proc = Recurso::ref_ano($ref,$ano)->first();
        if(!$proc) abort('404');
        
        $this->canSee($proc);

        return view('procedimentos.recurso.form.edit', compact('proc'));

    }

    public function update(Request $request, $id)
    {
        //andamento (concluído) alguns campos ficam obrigatórios
        if(sistema('andamento',$request['id_andamento']) != 'CONCLUÍDO' )
        {
            $this->validate($request, [
                'id_andamento' => 'required',
                'sintese_txt' => 'required',
                ]);
        }
        else
        {
            $this->validate($request, [
                'sintese_txt' => 'required'
            ]);
        }

        // dd(\Request::all());
        $dados = $request->all();
        //busca procedimento e atualiza
        $update = Recurso::findOrFail($id)->update($dados);
        
        if($update)
        {
            RecursoRepository::cleanCache();
            toast()->success('Recurso atualizado!');
            return redirect()->route('recurso.lista');
        }

        toast()->error('Recurso NÃO atualizado!');
        return redirect()->route('recurso.lista');

    }

    public function destroy($id)
    {
        //busca procedimento e apaga
        $destroy = Recurso::findOrFail($id)->delete();

        if($destroy) {
            RecursoRepository::cleanCache();
            toast()->success('Recurso Apagado');
            return redirect()->route('recurso.lista');
        }

        toast()->success('erro ao apagar Recurso');
        return redirect()->route('recurso.lista');

    }

    public function restore($id)
    {
        // Recupera o post pelo ID
        $restore = Recurso::findOrFail($id)->restore();
    
        if($restore){
            RecursoRepository::cleanCache();
            toast()->success('Recurso Recuperado!');
            return redirect()->route('recurso.lista');  
        }

        toast()->error('Houve um erro ao recuperar!');
        return redirect()->route('recurso.lista'); 
    }

    public function forceDelete($id)
    {
        // Recupera o post pelo ID
        $forceDelete = Recurso::findOrFail($id)->forceDelete();
    
        if($forceDelete){
            RecursoRepository::cleanCache();
            toast()->success('Recurso Recuperado!');
            return redirect()->route('recurso.lista');  
        }

        toast()->error('Houve um erro ao Apagar definitivo!');
        return redirect()->route('recurso.lista');
    }

    public function datesToCreate($request) {
        //dados do formulário
        $dados = $request->all();
        $ano = (int) date('Y');

        $ref = Recurso::where('sjd_ref_ano','=',$ano)->max('sjd_ref');
        //referência e ano
        $dados['sjd_ref'] = $ref+1;
        $dados['sjd_ref_ano'] = $ano;
        
        return $dados;
    }

    public function canSee($proc) {
        ver_unidade($proc);//teste para verificar se pode ver outras unidades, caso não possa aborta
        //----envolvido do procedimento
        $envolvido = Envolvido::acusado()->where('id_recurso','=',$proc->id_recurso)->get();
        //teste para verificar se pode ver superior, caso não possa aborta
        ver_superior($envolvido, Auth::user());
    }
}
