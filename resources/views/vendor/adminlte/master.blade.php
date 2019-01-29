<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>
        @yield('title_prefix', config('adminlte.title_prefix', ''))
        @yield('title', config('adminlte.title', 'SISCOGER'))
        @yield('title_postfix', config('adminlte.title_postfix', ''))
    </title>
    
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <link rel="icon" type="image/png" sizes="96x96" href="{{asset('public/img/favicon/favicon-96x96.png')}}" />
    {{-- estilos compilados com gulp --}}
    {{-- <link rel="stylesheet" href="{{ asset('public/build/css/styles.css') }}"> --}}
    @include('vendor.adminlte.css')
    
    @yield('adminlte_css')

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Google Font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>

<body class="hold-transition @yield('body_class')">
    <div class="conteudo">
        @yield('body')
    </div>

@include('vendor.adminlte.js')
@include('toast::messages-jquery')
@yield('adminlte_js')
<script src="{{ asset('js/main.css') }}"></script>

</body>
</html>
