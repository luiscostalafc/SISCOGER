@extends('adminlte::page')

@section('title', 'IT')

@section('content_header')
<section class="content-header">   
  <h1>IT - Lista</h1>
  <ol class="breadcrumb">
  <li><a href="{{route('home')}}"><i class="fa fa-dashboard"></i> Home</a></li>
  <li class="active">IT - Julgamento</li>
  </ol>
  <br>
  <div class='form-group col-md-12 col-xs-12' style='padding-left: 0px'>
    <div class='btn-group col-md-8 col-xs-12 ' style='padding-left: 0px'>
      <a class="btn btn-default col-md-2 col-xs-4 "  href="{{route('it.lista')}}">Lista</a>
      <a class="btn btn-default col-md-2 col-xs-4 "  href="{{route('it.andamento')}}">Andamento</a>
      <a class="btn btn-default col-md-2 col-xs-4 "  href="{{route('it.prazos')}}">Prazos</a>  
      <a class="btn btn-default col-md-2 col-xs-4 "  href="{{route('it.rel_situacao')}}">Rel. Situação</a> 
      <a class="btn btn-success col-md-2 col-xs-4 "  href="{{route('it.julgamento')}}">Julgamento</a> 
    </div>
    <div class='col-md-4 col-xs-6 '>
        <a class="btn btn-block btn-primary"  href="{{route('it.create')}}">
        <i class="fa fa-plus "></i> Adicionar IT</a>
    </div>
  <div>
</section>
  
@stop

@section('content')
     <!-- Content Wrapper. Contains page content -->
  <div class="">
    <!-- Content Header (Page header) -->
   

    <!-- Main content -->
    <section class="">
        <div class="row">
          <div class="col-xs-12">
            <!-- /.box -->
  
            <div class="box">
              <div class="box-header">
                <h3 class="box-title">Listagem de Inquérito Técnico</h3>
              </div>
              <!-- /.box-header -->
              <div class="box-body">
                <table id="datable" class="table table-bordered table-striped">
  
                  <thead>
                  <tr>
                    <th class='col-xs-2 col-md-2'>#</th>
                    <th class='col-xs-2 col-md-2'>N°/Ano</th>
                    <th class='col-xs-2 col-md-2'>OPM</th>
                    <th class='col-xs-2 col-md-2'>Acusado</th>
                    <th class='col-xs-2 col-md-2'>Andamento</th> 
                    <th class='col-xs-2 col-md-2'>Resultado</th>  
                  </tr>
                  </thead>
  
                  <tbody>
                     @foreach($registros as $registro)
                  <tr>
                    <td class='col-xs-2 col-md-2'>{{$registro['id_it']}}</td>
                    <td class='col-xs-2 col-md-2'>{{$registro['sjd_ref']}} / {{$registro['sjd_ref_ano']}}</td>
                    <td class='col-xs-2 col-md-2'>{{opm($registro['itopm'])}}</td>
                    <td class='col-xs-2 col-md-2'>{{$registro['cargo']}} {{$registro['nome']}}</td>
                    <td class='col-xs-2 col-md-2'>{{sistema('andamentoit',$registro['id_andamento'])}}</td> 
                    <td class='col-xs-2 col-md-2'>
                    @if ($registro['resultado'] == "Punido")
                        @if (!$registro['id_punicao'])
                            Cadastrar
                        @else
                            <strong>
                            Punição: {{sistema('classPunicao',$registro['id_classpunicao'])}}
                            </strong></br>
                            {{-- 1 é advertência e 3 repreenção, então esses não coloca os dias --}}
                            @if($registro['id_gradacao'] != 1 && $registro['id_gradacao'] != 3)
                                {{$registro['dias']}} dia(s) -  
                            @endif
                            {{sistema('gradacao',$registro['id_gradacao'])}}
                        @endif
                    @endif
                    </td> 
                  </tr>
                  @endforeach
                  </tbody>
                  <tfoot>
                  <tr>
                    <th class='col-xs-2 col-md-2'>#</th>
                    <th class='col-xs-2 col-md-2'>N°/Ano</th>
                    <th class='col-xs-2 col-md-2'>OPM</th>
                    <th class='col-xs-2 col-md-2'>Acusado</th>
                    <th class='col-xs-2 col-md-2'>Andamento</th> 
                    <th class='col-xs-2 col-md-2'>Resultado</th>
                  </tr>
                  </tfoot>
                </table>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
  @include('vendor.adminlte.includes.tabelas')
 
@stop