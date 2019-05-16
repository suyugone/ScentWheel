ScentWheel
===========


# Project Introduction
ScentWheel is a business-oriented installation which aims to improve the offline perfume purchasing experience. Customers can learn about the details of the 14 perfume families by browsing on the web end and smell it through the physical end.

![](https://i.ibb.co/jrPKTLZ/2019-05-16-11-00-53.png) <br>
 
It contains these files: <br>
|- index.html : Frontend Content <br>
|- index.js : Server-side and Arduino Control Codes <br>
|- scripts.js : Frontend Codes <br>
|- module.js : Modules Codes <br>
|- fragranceDB.json : A dataset contains the name and introductions of the 14 perfume families <br>
  
# Run the project
You have to follow the steps below to run this project locally.<br>
  
## Prerequisites
* Install [Node.js](https://nodejs.org)  (Build a backend server that can communicate with the Arduino board)
* Install [SerialPort](https://serialport.io/docs/en/guide-about) (Node.js package to access serial ports)
* Install [Johnny-Five](http://johnny-five.io/) ( A JavaScript Robotics & IoT Platform)
* Install [Node-Pixel](https://github.com/ajfisher/node-pixel) (A library that provides a node js interface for addressable RGB LEDs)
* Install [JSON Server](https://github.com/typicode/json-server) (A library that allow us to build a fake online REST server )<br>
## Installation
#### NodeJS
```
npm install npm@latest -g
```
#### SerialPort
```
Node.js package to access serial ports
```
Notice: Compiling with nodejs is done via node-gyp which requires Python 2.x, so please ensure you have it installed and in your path for all operating systems. Python 3.x will not work. You can try [prebuild](https://github.com/prebuild/prebuild) to compile and post binaries of the library for most common use cases (Linux, Mac, Windows on standard processor platforms).
#### Johnny-five
```
npm install johnny-five
```
#### Node-pixel
```
npm install node-pixel
npm install -g nodebots-interchange
```
Plug in your arduino
```
interchange install git+https://github.com/ajfisher/node-pixel -a uno --firmata
```
#### Json-server
```
npm install -g json-server
```
## Begin to run
#### Start JSON server
```
json-server --watch fragranceDB.json --port 3002
```
#### Connect your Arduino
#### Start the web server
```
node index.js
```
# Now you will be ready to run this project! Have fun 😆
