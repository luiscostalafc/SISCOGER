@extends('adminlte::page')

@section('title', 'SAI')

@section('content_header')
@include('policiais.sai.list.menu', ['title' => 'Consultas','page' => 'lista'])
@stop

@section('content')
<section class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Listagem de SAI</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <table id="datable" class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th style="display: none">#</th>
                            <th class='col-xs-1 col-md-1'>N°/Ano</th>
                            <th class='col-xs-1 col-md-1'>OPM</th>
                            <th class='col-xs-8 col-md-8'>Sintese</th>
                            <th class='col-xs-2 col-md-2'>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        @foreach($registros as $registro)
                        <tr>
                            <td style="display: none">{{$registro->id_sai}}</td>
                            @if ($registro->sjd_ref != '')
                            <td>{{$registro->sjd_ref}}/{{$registro->sjd_ref_ano}}</td>
                            @else
                            <td>{{$registro->id_sai}}</td>
                            @endif
                            <td>{{$registro->opm_abreviatura}}</td>
                            <td>{{$registro->sintese_txt}}</td>
                            <td>
                                <span>
                                    {{-- @if(hasPermissionTo('ver-sai'))
                                    <a class="btn btn-default"
                                        href="{{route('sai.show',$registro['id_sai'])}}"><i
                                            class="fa fa-fw fa-eye "></i></a>
                                    @endif --}}
                                    @if(hasPermissionTo('editar-sai'))
                                    <a class="btn btn-info"
                                        href="{{route('sai.edit',$registro['id_sai'])}}"><i
                                            class="fa fa-fw fa-edit "></i></a>
                                    @endif
                                    @if(hasPermissionTo('apagar-sai'))
                                    <a class="btn btn-danger" href="{{route('sai.destroy',$registro['id_sai'])}}"
                                        onclick="return confirm('Tem certeza que quer apagar o sai?')"><i
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
                            <th>N°/Ano</th>
                            <th>OPM</th>
                            <th>Sintese</th>
                            <th>Ações</th>
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