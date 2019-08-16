<?php
use Illuminate\Support\Facades\Auth;
if (! function_exists('hasAnyPermission')) 
{
	function hasAnyPermission( $permissions ){
        if(!session('permissions')) {
            Auth::logout(); 
            return redirect()->route('login');
        }
        foreach ($permissions as $permission) {
            if(in_array($permission, session('permissions'))) return true; 
        }
        return false;
    }
}