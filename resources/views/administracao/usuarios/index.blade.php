@extends('adminlte::page')

@section('title_postfix', '| usuários')

@section('content_header')
<section class="content-header">
    <h1><i class="fa fa-key"></i> Gerenciamento de Usuários</h1>
    <ol class="breadcrumb">
        <li><a href="{{route('home')}}"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Gerenciamento de Usuários</li>
    </ol>
    <br>
    <div class='form-group col-md-12 col-xs-12' style='padding-left: 0px'>
        @can('listar-papeis')
        <div class='btn-group col-md-4 col-xs-12 '>
            <a href="{{ route('role.index') }}" class="btn btn-default btn-block">
                Listar Papéis</a>
        </div>  
        @endcan
        @can('listar-permissoes')  
        <div class='btn-group col-md-4 col-xs-12 '>
            <a href="{{ route('permission.index') }}" class="btn btn-default btn-block">
                Listar Permissões</a>
        </div>
        @endcan
        @can('criar-usuarios')
        <div class='btn-group col-md-4 col-xs-12 '>
            <a href="{{ route('user.create') }}" class="btn btn-success btn-block">
                <i class="fa fa-plus "></i> Adicionar Usuários</a>
        </div>
        @endcan
    <div>
</section>
@stop

@section('content')
<section class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Listagem de Usuários</h3>
            </div>
            <div class="box-body">
                <table id="datable" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th class='col-xs-1 col-md-1'>#</th>
                            <th class='col-xs-1 col-md-1'>RG</th>
                            <th class='col-xs-2 col-md-2'>Email</th>
                            <th class='col-xs-2 col-md-2'>Unidade</th>
                            <th class='col-xs-2 col-md-2'>Papéis</th>
                            <th class='col-xs-4 col-md-4'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($users as $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->rg }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->opm_descricao }}</td>
                            <td>{{ $user->roles()->pluck('name')->implode('/') }}</td>
                            <td>
                                <div class="btn-group">
                                    @can('editar-usuarios')
                                    <a href="{{ route('user.edit', $user->id) }}" class="btn btn-info pull-left"
                                        style="margin-right: 3px;">Editar</a>
                                    @endcan
                                    @can('apagar-usuarios')
                                    {!! Form::open(['method' => 'DELETE', 'route' => ['user.destroy',
                                    $user->id],'style' => 'display: inline' ]) !!}
                                    {!! Form::submit('Apagar', ['class' => 'btn btn-danger', 'onclick' => 'return
                                    confirm("Você tem certeza?");','style' => 'display: inline']) !!}
                                    {!! Form::close() !!}
                                    @endcan
                                   
                                    @if($user->block == '0')
                                        @can('bloquear-usuarios')     
                                        <a href="{{ route('user.block', $user->id) }}" class="btn btn-warning"
                                            style="">Bloquear</a>
                                        @endcan
                                    @else
                                        @can('desbloquear-usuarios')
                                        <a href="{{ route('user.unblock', $user->id) }}" class="btn btn-success"
                                            style="">Desbloquear</a>
                                        @endcan
                                    @endif
                                </div>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                    <tfoot>
                        <tr>
                            <th class='col-xs-1 col-md-1'>#</th>
                            <th class='col-xs-1 col-md-1'>RG</th>
                            <th class='col-xs-2 col-md-2'>Email</th>
                            <th class='col-xs-2 col-md-2'>Unidade</th>
                            <th class='col-xs-2 col-md-2'>Papéis</th>
                            <th class='col-xs-4 col-md-4'>Ações</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</section>
@stop

@section('css')

@stop

@section('js')
@stop