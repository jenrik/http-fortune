HTTP Fortune
============
HTTP Fortune adds the fortune header to all HTTP responses.

### Requirements
[Node.js](http://nodejs.org/) and a [Express](http://expressjs.com/) compatible application

### Usage
Simple:

```javascript
var fortune = require("http-fortune")(fortuneList);
app.use(fortune);
```

Note: fortuneList should be a array containing all possible fortunes, and app should be your [Express](http://expressjs.com/) application
