<section class="content-header nopadding">  
    <h1>Sindicância - {{$title}}</h1>
    <ol class="breadcrumb">
        <li><a href="{{route('home')}}"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Sindicância - {{$title}}</li>
    </ol>
    <br>   
    <div class="form-group col-md-12 col-xs-12 nopadding">
        <div class="btn-group col-md-8 col-xs-12 nopadding">
            <a class="btn @if($page == 'lista') btn-success @else btn-default @endif col-md-2 col-xs-2" href="{{route('sindicancia.lista',['ano' => $ano])}}">Consulta</a>
            <a class="btn @if($page == 'andamento') btn-success @else btn-default @endif col-md-2 col-xs-2" href="{{route('sindicancia.andamento',['ano' => $ano])}}">Andamento</a>
            <a class="btn @if($page == 'resultado') btn-success @else btn-default @endif col-md-2 col-xs-2" href="{{route('sindicancia.resultado',['ano' => $ano])}}">Julgamento</a>
            <a class="btn @if($page == 'rel_situacao') btn-success @else btn-default @endif col-md-2 col-xs-2" href="{{route('sindicancia.rel_situacao',['ano' => $ano])}}">Rel. Situação</a>
            <a class="btn @if($page == 'prazos') btn-success @else btn-default @endif col-md-2 col-xs-2" href="{{route('sindicancia.prazos',['ano' => $ano])}}">Prazos</a>
            @if(session('is_admin'))
            <a class="btn @if($page == 'apagados') btn-success @else btn-default @endif col-md-2 col-xs-2" href="{{route('sindicancia.apagados',['ano' => $ano])}}">Apagados</a>
            @else 
            <span class="col-md-2 col-xs-2"></span>
            @endif
        </div>
        <div class="col-md-2 col-xs-12 litlepadding">
            <a class="btn btn-block btn-primary" href="{{route('sindicancia.create')}}">
            <i class="fa fa-plus"></i> Adicionar Sindicância</a>
        </div>
        <div class='col-md-2 col-xs-6  pull-right'>
            <div class="pull-right">
                <label for="navegaco">Listar ano: </label>
                <select class="" id="navegacao" data-toggle="tooltip" data-placement="bottom" 
                title="O ano apenas modifica a listagem,os dados continuam sendo inseridos em {{date('Y')}}"> 
                    <option selected='selected'> {{ $ano }} </option>
                    @for ($i = date('Y'); $i >= 2008; $i--)
                        @if($i != $ano)
                        <option onclick="javascript:location.href='{{route('sindicancia.'.$page,['ano' => $i])}}'"> {{ $i }} </option>
                        @endif
                    @endfor  
                </select> 
            </div>
        </div>
    <div>
</section>