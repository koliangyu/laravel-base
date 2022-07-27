<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>
    <link rel="apple-touch-icon" sizes="57x57" href="/backend/assets/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/backend/assets/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/backend/assets/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/backend/assets/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/backend/assets/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/backend/assets/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/backend/assets/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/backend/assets/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/backend/assets/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/backend/assets/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/backend/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/backend/assets/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/backend/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="/backend/assets/favicon/manifest.json">
    <!-- Vendors styles-->
    {!! Html::style('vendor/simplebar/dist/simplebar.min.css') !!}
    {!! Html::style('backend/css/vendors/simplebar.css') !!}
    <!-- Main styles for this application-->
    {!! Html::style('backend/css/style.css') !!}
    @stack('css')
</head>

<body>

    @include('backend.partials.sidebar')

    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
        @include('backend.partials.header')
        <div class="body flex-grow-1 px-3">
            <div class="container-lg">
                @yield('content')
            </div>
        </div>
        @include('backend.partials.footer')
    </div>
    <!-- CoreUI and necessary plugins-->
    {!! Html::script('backend/js/app.js') !!}
    {!! Html::script('vendor/simplebar/dist/simplebar.min.js') !!}
    <!-- Plugins and scripts required by this view-->
    @stack('scripts')
</body>

</html>
