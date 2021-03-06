<?php
//Aqui fica a parte de lógica dos controllers, para não ficar enchendo de atribuições erradas
namespace App\Services;

class SessionService 
{
    public function user($user)
    {
        session()->put('rg',$user->rg);
        session()->put('nome', $user->nome);
        session()->put('email', $user->email);
        session()->put('cargo', $user->cargo);
        session()->put('quadro', $user->quadro);
        session()->put('subquadro', $user->subquadro);
        session()->put('opm_descricao', $user->opm_descricao);
        session()->put('cdopm', $user->cdopm);    
        session()->put('cdopmbase', corta_zeros($user->cdopm));
        // todos papéis que o usuário possui
        session()->put('roles', $user->getRoleNames());
        // todas permissões que o usuário possui
        session()->put('permissions', $user->getAllPermissions()->pluck('name')->toArray());

        session()->put('ver_todas_unidades', $this->verTodasOPM($user)); //verifica se o usuário tem permissão para ver todas unidades
        session()->put('is_admin', $this->isAdmin());//verifica se o usuário é administrador
        session()->put('nivel',$this->nivel($user)); //nível hierárquico de visualização
    }

    public function verTodasOPM() 
    {
        return in_array('todas-unidades',session('permissions'));
    }

    public function nivel($user)
    {
        return sistema('posto',$user->cargo);
    }

    public function isAdmin()
    {
        $data = session('roles');
        return in_array('admin',$data->toArray());
    }
}


