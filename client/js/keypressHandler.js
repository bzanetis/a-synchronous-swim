
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

$('.swimButton').click(function() {
  //console.log('I got clicked')
  // var direction = ['up', 'down', 'left', 'right'];
  // var randomDirection = direction[Math.floor(Math.random() * 4)];
  httpFetcher();
});




console.log('Client is running in the browser!');
