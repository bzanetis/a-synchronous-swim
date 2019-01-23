
const HttpFetcher = {

  server: 'http://127.0.0.1:3000',

  fetch: function(data) {
    $.ajax({
      url: 'http://127.0.0.1:3000',
      type: 'GET',
      //data: JSON.stringify(message),
      contentType: 'text/plain',
      success: SwimTeam.move(data),
      error: function (error) {
        console.error('SwimServer: failed to get command', error);
      }
    });
  },

};

// (function() {

//   const serverUrl = 'http://127.0.0.1:3000';

// })();

// xhttp.open("GET", "ajax_info.txt", true);