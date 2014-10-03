var http = require('http'),
    fs   = require('fs');

fs.readFile('test.html', function (err, data) {
  if (err) throw err;


//the following is code from
// stack overflow
// http://stackoverflow.com/questions/13053708/serving-a-static-file-with-node-js-works-but-not-for-the-linked-images-css-js
  http.createServer(function(request, response) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
  }).listen(8080);
});
