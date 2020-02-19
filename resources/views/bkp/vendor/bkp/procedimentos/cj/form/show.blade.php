@extends('adminlte::page')

@section('title', 'fatd - Visualizar')

@section('content_header')
<section class="content-header">   
  <h1>FATD - Visualizar</h1>
  <ol class="breadcrumb">
  <li><a href="{{route('home')}}"><i class="fa fa-dashboard"></i> Home</a></li>
  <li><a href="{{route('fatd.lista',['ano' => date('Y')])}}">Fatd - Lista</a></li>
  <li class="active">FATD - Visualizar</li>
  </ol>
</section>
@stop

@section('content')

<div class="">
<section class="">
        <div class="col-md-8">
        <h3>Formulário de Transgressão Disciplinar - Nº {{ $proc['sjd_ref'] }} / {{ $proc['sjd_ref_ano'] }}</h3>
        </div>
        <div class="form-group col-md-4"> 
            <a class="btn btn-default col-md-6 col-xs-6"  href="#" onclick="expandirTudo()">Expandir tudo</a>
            <a class="btn btn-default col-md-6 col-xs-6"  href="#" onclick="recolherTudo()">Recolher Tudo</a>
        </div>
        
    <div class="row">{{-- recursos --}}

    <div class="col-xs-12"> 
        <div class="box">
            <div class="box-header">
                {{-- sjd_ref / sjd_ref_ano --}}
                <h2 class="box-title">Formulário principal</h2>
                <div class="box-tools pull-right">
                    <button type="button" class="btn btn-box-tool" data-widget="collapse">
                        <i class="fa fa-minus"></i>
                    </button> 
                </div>             
            </div>

        <div class="box-body">               
            <div class="col-md-6 col-xs-12">
                <p><strong>Andamento:</strong></p><p> {{ sistema('andamentoFATD',$proc['id_andamento']) }}</p>
            </div>
            <div class="col-md-6 col-xs-12">
                <p><strong>Andamento COGER:</strong></p><p> {{ sistema('andamentocogerFATD',$proc['id_andamentocoger']) }}</p>
            </div>

            <div class="col-md-12 col-xs-12">
                <p><strong>Documentos de origem:</strong></p><p> {{ $proc['doc_origem_txt'] }}</p>
            </div>

            <div class="col-md-6 col-xs-12">
                <p><strong>Data do fato:</strong></p><p> {{ date('d/m/Y',strtotime($proc['fato_data'])) }}</p>
            </div>
            <div class="col-md-6 col-xs-12">
                <p><strong>OPM/OBM:</strong></p><p> {{ opm($proc['cdopm']) }}</p>
            </div>

            <div class="col-md-4 col-xs-12">
                <p><strong>Motivo:</strong></p><p> {{ sistema('motivoFATD',$proc['motivo_fatd']) }}</p>
            </div>
            <div class="col-md-4 col-xs-12">
                <p><strong>Outros Motivos:</strong></p>
                @if($proc['motivo_outros'] != '')
                    <p> {{ $proc['motivo_outros'] }}</p>
                @else
                    <p>Não há</p>
                @endif
            </div>
            <div class="col-md-4 col-xs-12">
                <p><strong>Situação:</strong></p><p> {{ sistema('situacaoOCOR',$proc['situacao_fatd']) }}</p>
            </div>

            <div class="col-md-12 col-xs-12">
                <p><strong>Sintese do fato:</strong></p><p> {{ $proc['sintese_txt'] }}</p>
            </div>

            <div class="col-md-6 col-xs-12">
                <p><strong>Nº do despacho que designa o Encarregado:</strong></p><p> {{ $proc['despacho_numero'] }}</p>
            </div>
            <div class="col-md-6 col-xs-12">
                <p><strong>Data do despacho:</strong></p><p> {{ date('d/m/Y',strtotime($proc['portaria_data'])) }}</p>
            </div>

            <div class="col-md-6 col-xs-12">
                <p><strong>Boletim de publicação do despacho:</strong></p><p> {{ sistema('tipoBoletim',$proc['doc_tipo']) }}: {{$proc['doc_numero']}}</p>
            </div>
            <div class="col-md-6 col-xs-12">
                <p><strong>Data da abertura:</strong></p><p> {{ date('d/m/Y',strtotime($proc['abertura_data'])) }}</p>
            </div>

            <div class="col-md-6 col-xs-12">
                <p><strong>Relato do fato imputado:</strong></p>
                @if($proc['relato_file'])
            <p><a href="{{asset('storage/arquivo/fatd/'.$proc['relato_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['relato_file']}}</a></p>
                @else
                    <p>Não Há</p>
                @endif
            </div>
            <div class="col-md-6 col-xs-12">
                <p><strong>Relatório: </strong></p>
                @if($proc['relatorio_file'])
            <p><a href="{{asset('storage/arquivo/fatd/'.$proc['relatorio_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['relatorio_file']}}</a></p>
                @else
                    <p>Não Há</p>
                @endif
            </div>

            <div class="col-md-6 col-xs-12">
                <p><strong>Solução do Comandante:</strong></p>
                @if($proc['sol_cmt_file'])
                    <p><a href="{{asset('storage/arquivo/fatd/'.$proc['sol_cmt_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['sol_cmt_file']}}</a></p>
                @else
                    <p>Não Há</p>
                @endif
            </div>
            <div class="col-md-6 col-xs-12">
                <p><strong>Solução do Cmt Geral:</strong></p>
                @if($proc['sol_cg_file'])
                    <p><a href="{{asset('storage/arquivo/fatd/'.$proc['sol_cg_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['sol_cg_file']}}</a></p>
                @else
                    <p>Não Há</p>
                @endif
            </div>

            <div class="col-md-6 col-xs-12">
                <p><strong>Nota de punição:</strong></p>
                @if($proc['notapunicao_file'])
                    <p><a href="{{asset('storage/arquivo/fatd/'.$proc['notapunicao_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['notapunicao_file']}}</a></p>
                @else
                    <p>Não Há</p>
                @endif
            </div>
            <div class="col-md-6 col-xs-12">
                <p><strong>Publicação da nota de punição</strong></p>
                @if($proc['publicacaonp'])
                    <p>{{$proc['publicacaonp']}}</p>
                @else
                    <p>Não Há</p>
                @endif
            </div>
        </div>
    </div>{{-- procedimento principal --}}

    <div class="row">{{-- Origem procedimento --}}

            <div class="col-xs-12">
                <div class="box collapsed-box">
                    <div class="box-header">
                        <h2 class="box-title">Origem procedimento</h2>
                        <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="collapse">
                                <i class="fa fa-plus"></i>
                            </button> 
                        </div>             
                    </div>
        
                    <div class="box-body">
    
                        <div class="col-md-12 col-xs-12">
                            <p class="col-md-4"><strong>Processo/Procedimento</strong></p>
                            <p class="col-md-4"><strong>N°/Ano</strong></p> 
                            <p class="col-md-4"><strong>OPM/OBM</strong></p>

                            @if($ligacao)
                            <p class="col-md-4">{{strtoupper($ligacao->origem_proc)}}</p>
                            <p class="col-md-4">{{$ligacao->destino_sjd_ref}} / {{$ligacao->destino_sjd_ref_ano}}</p> 
                            <p class="col-md-4">
                                @if($ligacao->origem_opm != '' && $ligacao->origem_opm != 'NAO ENCONTRA')
                                    {{ opm($ligacao->origem_opm) }}
                                @else
                                    Não encontrada
                                @endif
                            </p>
                            @else
                                <p class="col-md-4">Não há</p>
                                <p class="col-md-4">Não há</p>
                                <p class="col-md-4">Não há</p>
                            @endif

                        </div>
                    </div>   
                </div>
            </div>     
    </div>{{-- /Origem procedimento --}}

    <div class="row">{{-- recursos --}}
        <div class="col-xs-12">
            <div class="box collapsed-box">
                <div class="box-header">
                    <h2 class="box-title">Recursos</h2>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse">
                            <i class="fa fa-plus"></i>
                        </button> 
                    </div>             
                </div>
    
                <div class="box-body">

                    <div class="col-md-6 col-xs-12">
                        <p><strong>Reconsideração de ato (solução):</strong></p>
                        @if($proc['rec_ato_file'])
                        <p><a href="{{asset('storage/arquivo/fatd/'.$proc['rec_ato_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['notapunicao_file']}}</a></p>
                    @else
                        <p>Não Há</p>
                    @endif
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <p><strong>Recurso Cmt OPM: </strong></p>
                        @if($proc['rec_cmt_file'])
                        <p><a href="{{asset('storage/arquivo/fatd/'.$proc['rec_cmt_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['notapunicao_file']}}</a></p>
                    @else
                        <p>Não Há</p>
                    @endif
                    </div>

                    <div class="col-md-6 col-xs-12">
                        <p><strong>Recurso Cmt CRPM:</strong></p>
                        @if($proc['rec_crpm_file'])
                        <p><a href="{{asset('storage/arquivo/fatd/'.$proc['rec_crpm_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['notapunicao_file']}}</a></p>
                    @else
                        <p>Não Há</p>
                    @endif
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <p><strong>Recurso Cmt Geral:</strong></p>
                        @if($proc['rec_cg_file'])
                        <p><a href="{{asset('storage/arquivo/fatd/'.$proc['rec_cg_file'])}}" target="_blank"><i class="fa fa-file-pdf-o"></i>{{$proc['notapunicao_file']}}</a></p>
                    @else
                        <p>Não Há</p>
                    @endif
                </div>

                </div>   
            </div>
        </div>     
    </div>{{-- /recursos --}}

    <div class="row">{{-- Membros --}}
        <div class="col-xs-12">
            <div class="box collapsed-box">
                <div class="box-header">
                    <h2 class="box-title">Membros</h2>
                    <div class="box-tools pull-right">
                        <button type="button" class="btn btn-box-tool" data-widget="collapse">
                            <i class="fa fa-plus"></i>
                        </button> 
                    </div>             
                </div>
    
                <div class="box-body">

                    <div class="col-md-12 col-xs-12">
                            <p class="col-md-12"><strong>Encarregado:</strong></p>
                        @if($encarregado != NULL && $encarregado != '')
                            <p class="col-md-6">{{$encarregado->cargo}} {{special_ucwords($encarregado->nome)}}</p> 
                            <p class="col-md-6"><strong>RG:</strong> {{$encarregado->rg}}</p>
                        @else
                            <p class="col-md-12">Não Há</p>
                        @endif
                    </div>

                    <div class="col-md-12 col-xs-12">
                            <p class="col-md-12"><strong>Acusador:</strong></p>
                        @if($acusador != NULL && $acusador != '')
                            <p class="col-md-6">{{$acusador->cargo}} {{special_ucwords($acusador->nome)}}</p> 
                            <p class="col-md-6"><strong>RG:</strong> {{$acusador->rg}}</p>
                        @else
                            <p class="col-md-12">Não Há</p>
                        @endif
                    </div>

                    <div class="col-md-12 col-xs-12">
                            <p class="col-md-12"><strong>Defensor:</strong></p>
                        @if($defensor != NULL && $defensor != '')
                            <p class="col-md-6">{{$defensor->cargo}} {{special_ucwords($defensor->nome)}}</p> 
                            <p class="col-md-6"><strong>RG:</strong> {{$defensor->rg}}</p>
                        @else
                            <p class="col-md-12">Não Há</p>
                        @endif
                    </div>

                    </div>   
                </div>
            </div>     
        </div>{{-- /Membros --}}

        <div class="row">{{-- Acusado --}}
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-header">
                        <h2 class="box-title">Acusado</h2>
                        <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="collapse">
                                <i class="fa fa-minus"></i>
                            </button> 
                        </div>             
                    </div>
        
                    <div class="box-body">
    
                        <div class="col-md-12 col-xs-12">
                            <p class="col-md-4"><strong>Posto/Grad. Nome</strong></p>
                            <p class="col-md-4"><strong>RG</strong></p> 
                            <p class="col-md-4"><strong>Situação</strong></p>

                            <p class="col-md-4">{{$envolvido->cargo}} {{special_ucwords($envolvido->nome)}}</p> 
                            <p class="col-md-4">{{$envolvido->rg}}</p>
                            <p class="col-md-4">{{$envolvido->situacao}}</p>
                        </div>
    
                    </div>   
                </div>
            </div>     
        </div>{{-- /Acusado --}}

        <div class="row">{{-- Movimentos --}}
            <div class="col-xs-12">
                <div class="box collapsed-box">
                    <div class="box-header">
                        <h2 class="box-title">Movimentos</h2>
                        <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="collapse">
                                <i class="fa fa-plus"></i>
                            </button> 
                        </div>             
                    </div>
        
                    <div class="box-body">
    
                        <div class="col-md-12 col-xs-12">

                            <div class="col-md-2 col-xs-2"><strong>Data</strong></div>
                            <div class="col-md-6 col-xs-6"><strong>Descrição</strong></div> 
                            <div class="col-md-2 col-xs-2"><strong>RG</strong></div>
                            <div class="col-md-2 col-xs-2"><strong>Nome</strong></div>
                            
                            @forelse ($movimentos as $movimento)
                                <div class="col-md-2 col-xs-2">{{date('d/m/Y',strtotime($movimento->data))}}</div> 
                                <div class="col-md-6 col-xs-6">{{$movimento->descricao}}</div>
                                @if($movimento->rg != '' && $movimento->rg != NULL)
                                    <div class="col-md-2 col-xs-2">{{$movimento->rg}}</div>
                                    <div class="col-md-2 col-xs-2">{{special_ucwords(pm('nome',$movimento->rg))}}</div>  
                                @else
                                    <div class="col-md-2 col-xs-2">Não há</div>
                                    <div class="col-md-2 col-xs-2">Não há</div>
                                @endif
                            @empty
                                <p class="col-md-12">Não Há Movimentos</p>
                            @endforelse
                        </div>
                    
                    </div>   
                </div>
            </div>     
        </div>{{-- /Movimentos --}}

        <div class="row">{{-- Sobrestamentos --}}
            <div class="col-xs-12">
                <div class="box collapsed-box">
                    <div class="box-header">
                        <h2 class="box-title">Sobrestamentos</h2>
                        <div class="box-tools pull-right">
                            <button type="button" class="btn btn-box-tool" data-widget="collapse">
                                <i class="fa fa-plus"></i>
                            </button> 
                        </div>             
                    </div>
        
                    <div class="box-body">
    
                        <div class="col-md-12 col-xs-12">
                                <div class="col-md-2 col-xs-2"><strong>Início</strong></div>
                                <div class="col-md-2 col-xs-2"><strong>Doc. Início</strong></div> 
                                <div class="col-md-2 col-xs-2"><strong>Termino</strong></div>
                                <div class="col-md-2 col-xs-2"><strong>Doc. Término</strong></div>
                                <div class="col-md-4 col-xs-4"><strong>Motivo</strong></div>
                                
                                @forelse ($sobrestamentos as $sobrestamento)
                                    <div class="col-md-2 col-xs-2">{{data_br($sobrestamento->inicio_data)}}</div> 
                                    <div class="col-md-2 col-xs-2">({{$sobrestamento->publicacao_inicio}})</div>
                                    <div class="col-md-2 col-xs-2">{{data_br($sobrestamento->termino_data)}}</div>
                                    <div class="col-md-2 col-xs-2">({{$sobrestamento->publicacao_termino}})</div>
                                    @if($sobrestamento->motivo == '' || $sobrestamento->motivo == 'Outros')
                                        <div class="col-md-2 col-xs-2">{{$sobrestamento->motivo_outros}}</div>
                                    @else
                                        <div class="col-md-2 col-xs-2">{{$sobrestamento->motivo}}</div>
                                    @endif
                                @empty
                                    <p class="col-md-12">Não Há Sobrestamentos</p>
                                @endforelse
                        </div>
    
                    </div>   
                </div>
            </div>     
        </div>{{-- /Sobrestamentos --}}

        
        
</section>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('js')
<script>
    function expandirTudo(){
        $( ".box" ).removeClass( "collapsed-box" );
        $( ".box-body" ).show();
        $( ".fa-plus" ).removeClass( "fa-plus" ).addClass( "fa-minus" );
    }
    function recolherTudo(){
        $( ".box" ).addClass( "collapsed-box" );
        $( ".box-body" ).hide();
        $( ".fa-minus" ).removeClass( "fa-minus" ).addClass( "fa-plus" );
    }
</script>
@stop
