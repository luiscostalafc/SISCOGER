<?php
use Illuminate\Support\Facades\DB;
//para acessar as variáveis do config/sistema enviando chave e retornando o valor 
if (! function_exists('opm')) 
{
	function opm($chave)
	{
        $chave = completa_zeros($chave);
        // procura primeiro se existe a unidade no arquivo de configuração
        $opm = array_get(config('opm'), $chave);
        //$opm = Db::connection('rhparana')->where('CODIGO','=',$chave)->first();
        
        //caso não exista
       if(!$opm)
        {
            return "OPM NOVA";
        }
        else
        {
            return (string)$opm;
        }
		 
	}
}