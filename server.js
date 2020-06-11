var express = require('express');
var data = require('./data/test.json');
var app = express();
const PORT = 3000;


//app.use(express.static(__dirname));

//this is how a rout is built in express
app.get('/',(req, res)=>{
  //res.send(`App is running on port ${PORT}`);
  res.json(data);
});

//app.listen(3000);
app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  //console.log(data);
});
