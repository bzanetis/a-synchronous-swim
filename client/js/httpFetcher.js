
var httpFetcher = function () {

  const serverUrl = 'http://127.0.0.1:3000';

    $.ajax({
      url: serverUrl,
      type: 'GET',
      //data: JSON.stringify(message),
      //contentType: 'text/plain',
      success: SwimTeam.move,
      //error: function (error) {

    });
  };


// (function() {

//   const serverUrl = 'http://127.0.0.1:3000';

// })();

// xhttp.open("GET", "ajax_info.txt", true);