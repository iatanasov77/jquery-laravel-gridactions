# jquery-laravel-gridactions
JQuery plugin that add ajax handlers of IA Laravel Grid Actions

NEED:
1. add <meta> tag with the token to the blade layout:
  <code>
  <pre>
  <meta name="_token" content="{{ csrf_token() }}">
  </pre>
  </code>
2. setup ajax requests:
<code>
  <pre>
  $(function() {
    $.ajaxSetup({
      headers: {
        'X-CSRF-Token': $('meta[name="_token"]').attr('content')
      }
    });
  });
  </pre>
  </code>
  
