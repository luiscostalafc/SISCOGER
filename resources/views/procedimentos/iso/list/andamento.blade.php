@extends('adminlte::page')

@section('title', 'ISO - Andamento')

@section('content_header')
@include('procedimentos.iso.list.menu', ['title' => 'Andamento','page' => 'andamento'])
@stop

@section('content')
<section class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Listagem de Inquérito Sanitário de Origem</h3>
            </div>
            <div class="box-body">
                <table id="datable" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th style="display: none">#</th>
                            <th class='col-xs-1 col-md-1'>N°/Ano</th>
                            <th class='col-xs-1 col-md-1'>OPM</th>
                            <th class='col-xs-1 col-md-1'>Abertura</th>
                            <th class='col-xs-2 col-md-2'>Encarregado</th>
                            <th class='col-xs-2 col-md-2'>Andamento</th>
                            <th class='col-xs-2 col-md-2'>Andamento COGER</th>
                            <th class='col-xs-3 col-md-3'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($registros as $registro)
                        <tr>
                            <td style="display: none">{{$registro['id_iso']}}</td>
                            <td>{{$registro['sjd_ref']}} / {{$registro['sjd_ref_ano']}}</td>
                            <td>{{opm($registro['cdopm'])}}</td>
                            <td>{{data_br($registro['abertura_data'])}}</td>
                            <td>{{$registro['cargo']}} {{special_ucwords($registro['nome'])}}</td>
                            <td>{{sistema('andamento',$registro['id_andamento'])}}</td>
                            <td>{{sistema('andamentocoger',$registro['id_andamentocoger'])}}</td>
                            <td>
                                <span>
                                    @if(hasPermissionTo('ver-iso')) 
                                    <a class="btn btn-default"
                                        href="{{route('iso.show',['ref' => $registro['sjd_ref'], 'ano' => $registro['sjd_ref_ano']])}}"><i
                                            class="fa fa-fw fa-eye "></i></a>
                                    @endif
                                    @if(hasPermissionTo('editar-iso')) 
                                    <a class="btn btn-info"
                                        href="{{route('iso.edit',['ref' => $registro['sjd_ref'], 'ano' => $registro['sjd_ref_ano']])}}"><i
                                            class="fa fa-fw fa-edit "></i></a>
                                    @endif
                                    @if(hasPermissionTo('apagar-iso'))
                                    <a class="btn btn-danger" href="{{route('iso.destroy',$registro['id_iso'])}}"
                                    onclick="return confirm('Tem certeza que quer apagar?')"><i
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
                            <th class='col-xs-1 col-md-1'>N°/Ano</th>
                            <th class='col-xs-1 col-md-1'>OPM</th>
                            <th class='col-xs-1 col-md-1'>Abertura</th>
                            <th class='col-xs-2 col-md-2'>Encarregado</th>
                            <th class='col-xs-2 col-md-2'>Andamento</th>
                            <th class='col-xs-2 col-md-2'>Andamento COGER</th>
                            <th class='col-xs-3 col-md-3'>Ações</th>
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