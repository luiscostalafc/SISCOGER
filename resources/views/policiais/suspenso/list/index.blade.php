@extends('adminlte::page')

@section('title', 'Suspensos | Lista')

@section('content_header')
@include('policiais.suspenso.list.menu', ['title' => 'Consultas','page' => $page])
@stop

@section('content')
<section class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Listagem de Suspensos</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <table id="datable" class="table table-bordered table-striped">

                    <thead>
                        <tr>
                            <th style="display: none">#</th>
                            <th class='col-xs-1 col-md-1'>RG</th>
                            <th class='col-xs-1 col-md-1'>Cargo</th>
                            <th class='col-xs-1 col-md-1'>Nome</th>
                            <th class='col-xs-1 col-md-1'>OM atual</th>
                            <th class='col-xs-1 col-md-1'>Processo</th>
                            <th class='col-xs-2 col-md-2'>Art. da Infração Penal</th>
                            <th class='col-xs-1 col-md-1'>Início</th>
                            <th class='col-xs-1 col-md-1'>Fim</th>
                            <th class='col-xs-1 col-md-1'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($registros as $registro)
                        <tr>
                            <td style="display: none">{{$registro->id_suspenso}}</td>
                            <td><a href="{{route('fdi.show',$registro->rg)}}" target="_blank">{{$registro->rg}}</a></td>
                            <td>{{$registro->cargo}}</td>
                            <td>{{$registro->nome}}</td>
                            <td>{{$registro->present()->opm}}</td>
                            <td>{{$registro->processo}}</td>
                            <td>{{$registro->infracao}}</td>
                            <td>{{$registro->inicio_data}}</td>
                            <td>{{$registro->fim_data}}</td>
                            <td>
                                <span>
                                    {{-- @if(hasPermissionTo('ver-suspensos')) 
                                    <a class="btn btn-default" href="{{route('suspenso.show',$registro['id_suspenso'])}}"><i
                                        class="fa fa-fw fa-eye "></i></a>
                                    @endif --}}
                                    @if(hasPermissionTo('editar-suspensos'))
                                    <a class="btn btn-info"
                                        href="{{route('suspenso.edit',$registro['id_suspenso'])}}"><i
                                            class="fa fa-fw fa-edit "></i></a>
                                    @endif
                                    @if(hasPermissionTo('apagar-suspensos'))
                                    <a class="btn btn-danger"
                                        href="{{route('suspenso.destroy',$registro['id_suspenso'])}}"
                                        onclick="return confirm('Tem certeza que quer apagar o Suspenso?')"><i
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
                            <th class='col-xs-1 col-md-1'>Cargo</th>
                            <th class='col-xs-1 col-md-1'>Nome</th>
                            <th class='col-xs-1 col-md-1'>OM atual</th>
                            <th class='col-xs-1 col-md-1'>Processo</th>
                            <th class='col-xs-2 col-md-2'>Art. da Infração Penal</th>
                            <th class='col-xs-1 col-md-1'>Início</th>
                            <th class='col-xs-1 col-md-1'>Fim</th>
                            <th class='col-xs-1 col-md-1'>Ações</th>
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