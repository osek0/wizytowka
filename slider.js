let bannerStatus = 1;
const bannerTimer = 4000;
const numOfItems = 18;
const picWidth = 128;

window.onload = function() {
    bannerLoop();
}

var startBannerLoop = setInterval(function(){
    bannerLoop();
}, bannerTimer);

document.getElementById("sliders").onmouseenter = function() {
    clearInterval(startBannerLoop);
}

document.getElementById("sliders").onmouseleave = function () {
    startBannerLoop = setInterval(function () {
        bannerLoop();
    }, bannerTimer);
}

document.getElementById("img-button-prev").onclick = function() {
    if(bannerStatus > 3){
        bannerStatus -=3;
    }
    else{
        bannerStatus = numOfItems - 3 + bannerStatus; 
    }
    bannerLoopRev();
    if(bannerStatus < numOfItems-2){
        bannerStatus +=3;
    }
    else{
        bannerStatus = bannerStatus + 3 - numOfItems;
    }
}

document.getElementById("img-button-next").onclick = function () {
    bannerLoop();
}

var j;

function bannerLoop(){
    for (var k = 0; k < numOfItems; k++) {
        if (bannerStatus === k + 1) {
            if(k === 0)
            {
                document.getElementById(`img-slider2`).style.opacity = "1";
            }
            else if(k===1){
                document.getElementById(`img-slider1`).style.opacity = "1";
            }
            else{
            document.getElementById(`img-slider${numOfItems - k + 2}`).style.opacity = "1";
            }
            j = (2 - numOfItems) * (picWidth+10);
            for (var i = 0; i < numOfItems; i++) {
                if (numOfItems - k + i + 1 <= numOfItems) {
                    document.getElementById(`img-slider${numOfItems - k + i + 1}`).style.right = `${j}px`;
                }
                else {
                    document.getElementById(`img-slider${i - k + 1}`).style.right = `${j}px`;
                }
                j += picWidth+10;
            }
                document.getElementById(`img-slider${numOfItems - k}`).style.opacity = "0";
            if (k + 2 <= numOfItems) {
                bannerStatus = k + 2;
            }
            else {
                bannerStatus = 1;
            }
            break;
        }
    }
}
function bannerLoopRev() {
    for (var k = numOfItems; k > 0; k--) {
        if (bannerStatus === k) {
            if (k === numOfItems) {
                document.getElementById(`img-slider${numOfItems-1}`).style.opacity = "1";
            } 
            else if (k === numOfItems-1) {
                document.getElementById(`img-slider${numOfItems}`).style.opacity = "1";
            }
            else {
                document.getElementById(`img-slider${numOfItems-1-k}`).style.opacity = "1";
            }
            j = (2-numOfItems)*(picWidth+10);
            for (var i = 0; i <numOfItems; i++) {
                if (numOfItems - k + i + 1 <= numOfItems) {
                    document.getElementById(`img-slider${numOfItems - k + i + 1}`).style.right = `${j}px`;
                }
                else {
                    document.getElementById(`img-slider${i - k + 1}`).style.right = `${j}px`;
                }
                j += picWidth+10;
            }
            if (k === numOfItems) {
                document.getElementById(`img-slider2`).style.opacity = "0";
            }
            else if(k === numOfItems-1){
                document.getElementById(`img-slider1`).style.opacity = "0";
            }
            else {
                document.getElementById(`img-slider${numOfItems-k+1}`).style.opacity = "0";
            }
            if (k === 1) {
                bannerStatus = numOfItems;
            }
            else {
                bannerStatus = k-1;
            }
            break;
        }
    }
}