var countNum = 8; 
var imgWheel = document.getElementById("img-wheel"); //get the value of data-count; jQuery can only change HTML data once

function setCount() {
    countNum = parseInt(imgWheel.dataset.count);
    if(arguments[0] == "left") { //click on the left button
        if (countNum < 14) {
            countNum = countNum + 1;
        } else {
            countNum = 1;
        }
    } else if (arguments[0] == "right") { // click on the left button
        if (countNum > 1) {
            countNum = countNum - 1;  
        } else {
            countNum = 14;
        }
    }
    imgWheel.dataset.count = countNum; //set new value to the data-count
    console.log(countNum);
    return countNum;
    }

function rotateWheel() {
    let angle = Number(imgWheel.dataset.rotate); //getter
    if(arguments[0] == "left"){ 
        angle = angle - 25.7143; // 360/14=25.7143
    }else if(arguments[0] == "right"){ 
        angle = angle + 25.7143;
    }
    imgWheel.dataset.rotate = angle; //setter
    imgWheel.style.transform = "rotate(" + parseFloat(angle) + "deg)"; //setter
}   

function fetchDB(url1) {
    let url = url1 + countNum.toString();
    fetch(url)
    .then(function(response) { 
        return response.json();
    })
    .then(function(resp) {
        setContent(resp.familyName, resp.familyDetails);
    })
    .catch(function(resp) {
        console.log("There was an error");
    });
}

function setContent(title, details) {
    //replace perfume-title
    let h1 = document.getElementById("perfume-title");
    let oldText = h1.firstChild;
    let newText = document.createTextNode(title);
    h1.replaceChild(newText, oldText);

    //replace perfume-details
    let p = document.getElementById("perfume-details")
    p.innerHTML = details;
}

export {setCount, rotateWheel, fetchDB, setContent};
