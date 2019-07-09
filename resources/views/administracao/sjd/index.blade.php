@extends('adminlte::page')

@section('title_postfix', '| SJD')

@section('content_header')
<section class="content-header">   
  <h1><i class="fa fa-key"></i> Gerenciamento de SJD</h1>
  <ol class="breadcrumb">
  <li><a href="{{route('home')}}"><i class="fa fa-dashboard"></i> Home</a></li>
  <li class="active">Gerenciamento de SJD</li>
  </ol>
  <br>
  <div class='form-group col-md-12 col-xs-12' style='padding-left: 0px'>
    <div class='btn-group col-md-12 col-xs-12 '>
      <a href="{{ route('sjd.create') }}" class="btn btn-success btn-block">
          <i class="fa fa-plus "></i> Adicionar SJD</a>
    </div>
  <div>
</section>  
@stop

@section('content')
<section>

  <div class="col-md-12">

    <div class="box">
      <div class="box-header">
        <h3 class="box-title">Listagem de SJD</h3>
      </div>
      <!-- /.box-header -->
      <div class="box-body">
        <table id="datable" class="table table-bordered table-striped">
          <thead>
              <tr>
                  <th class='col-xs-1'>#</th>
                  <th class='col-xs-1'>RG</th>
                  <th class='col-xs-1'>CPF</th>
                  <th class='col-xs-1'>Celular</th>
                  <th class='col-xs-1'>OPM</th>
                  <th class='col-xs-1'>Seção</th>
                  <th class='col-xs-1'>Tel. Seção</th>
                  <th class='col-xs-1'>Assunção</th>
                  <th class='col-xs-1'>Saída</th>
                  <th class='col-xs-3'>Ações</th>
              </tr>
          </thead>
          <tbody>
            @forelse ($sjd as $s)
                <tr>
                    <td>{{ $s->id_sjds }}</td>
                    <td>{{ $s->rg }}</td>
                    <td>{{ $s->cpf }}</td>
                    <td>{{ $s->celular }}</td>
                    <td>{{ $s->present()->opm }}</td>
                    <td>{{ $s->secao }}</td>
                    <td>{{ $s->telefone_secao }}</td>
                    <td>{{ $s->assuncao_data }}</td>
                    <td>{{ $s->saida_data }}</td>
                    <td>
                      <div class="btn-group">
                        <a href="{{ route('sjd.edit', $s->id_sjds) }}" class="btn btn-info pull-left" style="margin-right: 3px;">Editar</a>
                        {!! Form::open(['method' => 'DELETE', 'route' => ['sjd.destroy', $s->id_sjds],'style' => 'display: inline' ]) !!}
                        {!! Form::submit('Apagar', ['class' => 'btn btn-danger', 'onclick' => 'return confirm("Você tem certeza?");','style' => 'display: inline']) !!}
                        {!! Form::close() !!}
                      </div>
                    </td> 
                </tr> 
            @empty
                
            @endforelse
            </tbody>
            <tfoot>
                <tr>
                    <th class='col-xs-1'>#</th>
                    <th class='col-xs-1'>RG</th>
                    <th class='col-xs-1'>CPF</th>
                    <th class='col-xs-1'>Celular</th>
                    <th class='col-xs-1'>OPM</th>
                    <th class='col-xs-1'>Seção</th>
                    <th class='col-xs-1'>Tel. Seção</th>
                    <th class='col-xs-1'>Assunção</th>
                    <th class='col-xs-1'>Saída</th>
                    <th class='col-xs-3'>Ações</th>
                </tr>
            </tfoot>
        </table>
      </div>
      <!-- /.box-body -->
    </div>

  </div>

</section>

@stop

@section('css')
    
@stop

@section('js')
  @include('vendor.adminlte.includes.tabelas')
@stop