# jquery-laravel-gridactions
JQuery plugin that add ajax handlers of IA Laravel Grid Actions

NEED:
1. add <meta> tag with the token to the blade layout:
  <meta name="_token" content="{{ csrf_token() }}">

2. setup ajax requests:
  $(function() {
    $.ajaxSetup({
      headers: {
        'X-CSRF-Token': $('meta[name="_token"]').attr('content')
      }
    });
  });
  
