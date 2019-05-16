// Server-side Code
var express = require('express'); //express framework
var app = express();
var http = require('http').createServer(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(8081, function(){
  console.log('listening on *:8081');
});

app.use(express.static('/Users/gong/Documents/5_Parsons/Major_Studio/Final\ Project/Arduino\&Web/Web/'));

var signal;

//Arduino
var pixel = require("node-pixel");
var five = require('johnny-five');
var board = new five.Board();
var strip = null;

board.on("ready", function() {

  strip = new pixel.Strip({
      board: this,
      controller: "FIRMATA",
      strips: [ {pin: 6, length: 14}, ], // this is preferred form for definition
      gamma: 2.8, // set to a gamma that works nicely for WS2812
  });

  strip.on("ready", function() {
  }); 
});

app.get("/buttonClicked",function(req,res){
  signal = parseInt(req.query.value);
  console.log(signal);
  switchLED();
  res.end();
  return;
});


function switchLED() {
  switch (this.signal)
  {
      case 1:
          strip.clear();
          strip.pixel(0).color([204,0,102]);   
          strip.show();
          break;
      case 2:
          strip.clear();
          strip.pixel(1).color([204,51,153]);   
          strip.show();
          break;
      case 3:
          strip.clear();
          strip.pixel(2).color([153,0,51]);   
          strip.show();
          break;
      case 4:
          strip.clear();
          strip.pixel(3).color([204,102,0]);   
          strip.show();
          break;
      case 5:
          strip.clear();
          strip.pixel(4).color([204,153,51]);   
          strip.show();
          break;
      case 6:
          strip.clear();
          strip.pixel(5).color([51,102,102]);   
          strip.show();
          break;
      case 7:
          strip.clear();
          strip.pixel(6).color([153,153,102]);   
          strip.show();
          break;   
      case 8:
          strip.clear();
          strip.pixel(7).color([102,102,153]);   
          strip.show();
          break;
      case 9:
          strip.clear();
          strip.pixel(8).color([255,204,0]);   
          strip.show();
          break;
      case 10:
          strip.clear();
          strip.pixel(9).color([0,153,204]);   
          strip.show();
          break;
      case 11:
          strip.clear();
          strip.pixel(10).color([102,204,102]);   
          strip.show();
          break;
      case 12:
          strip.clear();
          strip.pixel(11).color([255,102,0]);   
          strip.show();
          break;
      case 13:
          strip.clear();
          strip.pixel(12).color([204,51,51]);   
          strip.show();
          break;
      case 14:
          strip.clear();
          strip.pixel(13).color([255,102,153]);   
          strip.show();
          break; 
      default: 
          break;      
  }
}






