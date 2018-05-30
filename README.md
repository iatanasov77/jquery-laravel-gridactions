# jquery-laravel-gridactions
JQuery plugin that add ajax handlers of IA Laravel Grid Actions

NEED:
1. add <meta> tag with the token to the blade layout:
  <code>
  <meta name="_token" content="{{ csrf_token() }}">
  </code>
2. setup ajax requests:
<code>
  $(function() {
    $.ajaxSetup({
      headers: {
        'X-CSRF-Token': $('meta[name="_token"]').attr('content')
      }
    });
  });
  </code>
  
