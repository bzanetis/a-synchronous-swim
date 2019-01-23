const headers = require('./cors');

module.exports = (req, res) => {
  console.log('party received')
  res.writeHead(200, headers);

  var sendResponse= function (res, data, StatusCode) {
    statusCode = 200;
    res.writeHead(statusCode, headers);
    res.end(JSON.stringify(data));
  }

  // var direction = ['up', 'down', 'left', 'right'];
  // var randomDirection = direction[Math.floor(Math.random() * 4)];

  if(request.method === 'GET') {
    statusCode = 200;
    sendResponse(res, randomDirection(), statusCode);
  }

  res.end();
};
