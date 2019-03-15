let bannerStatus = 1;
const bannerTimer = 4000;

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

document.getElementById("img-button-next").onclick = function() {
    if(bannerStatus > 3){
        bannerStatus -=3;
    }
    else{
        bannerStatus = 22 - 3 + bannerStatus; 
    }
    bannerLoopRev();
    if(bannerStatus < 20){
        bannerStatus +=3;
    }
    else{
        bannerStatus = bannerStatus + 3 - 22;
    }
}

document.getElementById("img-button-prev").onclick = function () {
    bannerLoop();
}

var j;

function bannerLoop(){
    for (var k = 0; k < 22; k++) {
        if (bannerStatus === k + 1) {
            if(k === 0)
            {
                document.getElementById(`img-slider2`).style.opacity = "1";
            }
            else if(k===1){
                document.getElementById(`img-slider1`).style.opacity = "1";
            }
            else{
            document.getElementById(`img-slider${22 - k + 2}`).style.opacity = "1";
            }
            j = -2560;
            for (var i = 0; i < 22; i++) {
                if (22 - k + i + 1 <= 22) {
                    document.getElementById(`img-slider${22 - k + i + 1}`).style.right = `${j}px`;
                }
                else {
                    document.getElementById(`img-slider${i - k + 1}`).style.right = `${j}px`;
                }
                j += 128;
            }
                document.getElementById(`img-slider${22 - k}`).style.opacity = "0";
            if (k + 2 <= 22) {
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
    for (var k = 22; k > 0; k--) {
        if (bannerStatus === k) {
            if (k === 22) {
                document.getElementById(`img-slider21`).style.opacity = "1";
            } 
            else if (k === 21) {
                document.getElementById(`img-slider22`).style.opacity = "1";
            }
            else {
                document.getElementById(`img-slider${22-1-k}`).style.opacity = "1";
            }
            j = -2560;
            for (var i = 0; i <22; i++) {
                if (22 - k + i + 1 <= 22) {
                    document.getElementById(`img-slider${22 - k + i + 1}`).style.right = `${j}px`;
                }
                else {
                    document.getElementById(`img-slider${i - k + 1}`).style.right = `${j}px`;
                }
                j += 128;
            }
            if (k === 22) {
                document.getElementById(`img-slider2`).style.opacity = "0";
            }
            else if(k === 21){
                document.getElementById(`img-slider1`).style.opacity = "0";
            }
            else {
                document.getElementById(`img-slider${22-k+1}`).style.opacity = "0";
            }
            if (k === 1) {
                bannerStatus = 22;
            }
            else {
                bannerStatus = k-1;
            }
            break;
        }
    }
}