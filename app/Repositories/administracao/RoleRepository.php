<?php
//Aqui ficam as consultas de banco de dados
namespace App\Repositories\administracao;

use Cache;
use App\Models\Sjd\Administracao\Role;
use App\Repositories\BaseRepository;

class RoleRepository extends BaseRepository
{
    protected $model;
    protected $unidade;
    protected $verTodasUnidades;
    protected $expiration = 60 * 24;//um dia; 

	public function __construct(Role $model)
	{
        $this->model = $model;      
    }

    public function cleanCache()
	{
        Cache::tags('role')->flush();
    }
    
    public function all()
	{

        $registros = Cache::tags('role')->remember('todos_role', $this->expiration, function() {
            return $this->model->all();
        });

        return $registros;
    }  
}
