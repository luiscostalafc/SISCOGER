@extends('adminlte::page')

@section('title', 'Presos outros')

@section('content_header')
@include('policiais.preso_outro.list.menu', ['title' => 'Lista','page' => 'lista'])
@stop

@section('content')
<section class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Listagem de Presos Outros</h3>
            </div>
            <div class="box-body">
                <table id="datable" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th style="display: none">#</th>
                            <th class='col-xs-2 col-md-2'>Nome</th>
                            <th class='col-xs-1 col-md-1'>RG</th>
                            <th class='col-xs-1 col-md-1'>UF</th>
                            <th class='col-xs-1 col-md-1'>Ocupação</th>
                            <th class='col-xs-1 col-md-1'>Local</th>
                            <th class='col-xs-1 col-md-1'>Tipo</th>
                            <th class='col-xs-1 col-md-1'>Início</th>
                            <th class='col-xs-1 col-md-1'>Término</th>
                            <th class='col-xs-1 col-md-1'>Vara</th>
                            <th class='col-xs-2 col-md-2'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($registros as $registro)
                        <tr>
                            <td style="display: none">{{$registro->id_preso_outros}}</td>
                            <td>{{$registro->nome}}</td>
                            <td>{{$registro->rg}}</td>
                            <td>{{$registro->uf}}</td>
                            <td>{{$registro->ocupacao}}</td>
                            <td>{{$registro->local}}</td>
                            <td>{{$registro->present()->presotipo}}</td>
                            <td>{{$registro->inicio_data}}</td>
                            <td>{{$registro->fim_data}}</td>
                            <td>{{$registro->vara}}</td>
                            <td>
                                <span>
                                    {{-- @if(hasPermissionTo('ver-presos-outros'))
                                    <a class="btn btn-default"
                                        href="{{route('presooutro.show',$registro->id_preso_outros)}}"><i
                                            class="fa fa-fw fa-eye "></i></a>
                                    @endif --}}
                                    @if(hasPermissionTo('editar-presos-outros'))
                                    <a class="btn btn-info"
                                        href="{{route('presooutro.edit',$registro->id_preso_outros)}}"><i
                                            class="fa fa-fw fa-edit "></i></a>
                                    @endif
                                    @if(hasPermissionTo('apagar-presos-outros'))
                                    <a class="btn btn-danger"
                                        href="{{route('presooutro.destroy',$registro->id_preso_outros)}}"
                                        onclick="return confirm('Tem certeza que quer apagar o preso?')"><i
                                            class="fa fa-fw fa-trash-o "></i></a>
                                    @endif
                                </span>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                    <tfoot>
                        <tr>
                            <th style="display: none">#</th>
                            <th class='col-xs-2 col-md-2'>Nome</th>
                            <th class='col-xs-1 col-md-1'>RG</th>
                            <th class='col-xs-1 col-md-1'>UF</th>
                            <th class='col-xs-1 col-md-1'>Ocupação</th>
                            <th class='col-xs-1 col-md-1'>Local</th>
                            <th class='col-xs-1 col-md-1'>Tipo</th>
                            <th class='col-xs-1 col-md-1'>Início</th>
                            <th class='col-xs-1 col-md-1'>Término</th>
                            <th class='col-xs-1 col-md-1'>Vara</th>
                            <th class='col-xs-2 col-md-2'>Ações</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</section>
@stop

@section('css')
<link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
@stop