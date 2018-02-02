const express = require('express'),
      bp = require('body-parser'),
      path = require("path"),
      mustache = require('mustache-express'),
      app = express();
//setting up port
const port = 3000;

app.listen(port, () => {
    console.log(`live on ${port}`);
});
// body parser for incoming data
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
// setting up connection for styles and scripts
app.use(express.static(__dirname + '/public'));

// using mustache to set up views, kind of useless with a single page.
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// basic get request for the page
app.get('/', (req, res) => {
    res.render('index');
})

// post method that makes the addition of the form input and sends it back as json.
app.post('/test', (req, res) => {
    
    console.log(`received ${req.body.x} ${req.body.y}`);
    const x = req.body.x,
          y = req.body.y,
          numSum = { "sum" : Number(x) + Number(y) };
    res.json(numSum);
    console.log( x, y, numSum);
  
});