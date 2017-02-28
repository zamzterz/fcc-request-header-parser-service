'use strict';

let express = require('express');
let app = express();

app.get('/whoami', (req, res) => {
  let userAgent = req.get('User-Agent');
  let os = userAgent.substring(userAgent.indexOf('(') + 1,
                               userAgent.indexOf(')'));

  let data = {
    'ip': req.connection.remoteAddress,
    'lang': req.get('Accept-Language').split(',')[0],
    'os': os
  }
  console.log(data);
  res.json(data);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});