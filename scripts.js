import {setCount, rotateWheel, fetchDB}from './module.js';

$("div.buttons").click(function(){
    let direction = $(this).data("direction"); //get the direction of left | right
    console.log(direction);
    // console.log(identifier);
    const ct = setCount(direction);
    rotateWheel(direction);
    fetchDB("http://localhost:3002/fragranceInfo/"); //fetch and set new content
    $.get("/buttonClicked",{"value":ct}, function(data){
        console.log(data);
    })
})