@extends('adminlte::page')

@section('title', 'Medalhas')

@section('content_header')
@include('policiais.medalha.list.menu', ['title' => 'Lista','page' => 'lista'])
@stop

@section('content')
<section class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Listagem de Medalhas</h3>
            </div>
            <div class="box-body">
                <table id="datable" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th style="display: none">#</th>
                            <th class='col-xs-1 col-md-1'>RG</th>
                            <th class='col-xs-2 col-md-2'>Nome</th>
                            <th class='col-xs-1 col-md-1'>Medalha</th>
                            <th class='col-xs-1 col-md-1'>Data Publicação</th>
                            <th class='col-xs-5 col-md-5'>Observações</th>
                            <th class='col-xs-2 col-md-2'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($registros as $registro)
                        <tr>
                            <td style="display: none">{{$registro->id_medalha}}</td>
                            <td><a href="{{route('fdi.show',$registro->rg)}}" target="_blanck">{{$registro->rg}}</a></td>
                            <td><a href="{{route('fdi.show',$registro->rg)}}" target="_blanck">{{$registro->nome}}</a></td>
                            <td>{{$registro->nome_medalha}}</td>
                            <td>{{$registro->bi_data}}</td>
                            <td>{{$registro->obs_txt}}</td>
                            <td>
                                <span>
                                    {{-- @if(hasPermissionTo('ver-medalhas'))
                                    <a class="btn btn-default"
                                        href="{{route('medalha.show',$registro->id_medalha)}}"><i
                                            class="fa fa-fw fa-eye "></i></a>
                                    @endif --}}
                                    @if(hasPermissionTo('editar-medalhas'))
                                    <a class="btn btn-info"
                                        href="{{route('medalha.edit',$registro->id_medalha)}}"><i
                                            class="fa fa-fw fa-edit "></i></a>
                                    @endif
                                    @if(hasPermissionTo('apagar-medalhas'))
                                    <a class="btn btn-danger"
                                        href="{{route('medalha.destroy',$registro->id_medalha)}}"
                                        onclick="return confirm('Tem certeza que quer apagar a medalha?')"><i
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
                            <th class='col-xs-1 col-md-1'>RG</th>
                            <th class='col-xs-2 col-md-2'>Nome</th>
                            <th class='col-xs-1 col-md-1'>Medalha</th>
                            <th class='col-xs-1 col-md-1'>Data Publicação</th>
                            <th class='col-xs-5 col-md-5'>Descrição</th>
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