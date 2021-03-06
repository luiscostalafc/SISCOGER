@extends('adminlte::page')

@section('title', 'CJ - Julgamento')

@section('content_header')
@include('procedimentos.cj.list.menu', ['title' => 'Julgamento','page' => 'julgamento'])
@stop

@section('content')
<section class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Listagem de Conselhos de Justificação</h3>
            </div>
            <div class="box-body">
                <table id="datable" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th style="display: none">#</th>
                            <th class='col-xs-2 col-md-2'>N°/Ano</th>
                            <th class='col-xs-2 col-md-2'>Data</th>
                            <th class='col-xs-2 col-md-2'>Acusado</th>
                            <th class='col-xs-2 col-md-2'>Andamento</th>
                            <th class='col-xs-2 col-md-2'>Julgamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($registros as $registro)
                        <tr>
                            <td style="display: none">{{$registro['id_cj']}}</td>
                            @if ($registro['sjd_ref'] != '')
                            <td>{{$registro['sjd_ref']}}/{{$registro['sjd_ref_ano']}}</td>
                            @else
                            <td>{{$registro['id_cj']}}</td>
                            @endif
                            <td>{{data_br($registro['fato_data'])}}</td>
                            <td>{{$registro['cargo']}} {{$registro['nome']}}</td>
                            <td>{{sistema('andamento',$registro['id_andamento'])}}</td>
                            <td>{{$registro['resultado']}}</td>
                        </tr>
                        @endforeach
                    </tbody>
                    <tfoot>
                        <tr>
                            <th style="display: none">#</th>
                            <th>N°/Ano</th>
                            <th>Data</th>
                            <th>Acusado</th>
                            <th>Andamento</th>
                            <th>Julgamento</th>
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