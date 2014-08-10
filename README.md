HTTP Fortune
============
HTTP Fortune adds random fortunes to all HTTP response headers. Make it fun for the person who wanna dig through your servers HTTP traffic.

### Requirements
[Node.js](http://nodejs.org/) and a [Express](http://expressjs.com/) compatible application

### Usage
Simple:

```javascript
var fortune = require("http-fortune")(fortuneList);
app.use(fortune);
```

Note: fortuneList should be a array containing all possible fortunes, and app should be your [Express](http://expressjs.com/) application
