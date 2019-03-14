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

document.getElementById("img-button-prev").onclick = function() {
    if(bannerStatus === 1) {
        bannerStatus = 2;
    }
    else if (bannerStatus === 2) {
        bannerStatus = 3;
    }
    else if (bannerStatus === 3) {
        bannerStatus = 1;
    }
    bannerLoop();
}

document.getElementById("img-button-next").onclick = function () {
    bannerLoop();
}

var j;

function bannerLoop(){
    for (var k = 0; k < 22; k++) {
        if (bannerStatus === k + 1) {
            document.getElementById(`img-slider${22 - k}`).style.opacity = "0";
            setTimeout(function () {
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
            }, 500);
            setTimeout(function () {
                document.getElementById(`img-slider${22 - k}`).style.opacity = "1";
            }, 1000);
            if (k + 2 <= 22) {
                bannerStatus = k + 2;
            }
            else {
                bannerStatus = 1;
            }
            break;
        }
    }

    // if(bannerStatus === 1) {
    //     document.getElementById("img-slider3").style.opacity = "0";
    //     setTimeout(function() {
    //         var j = -2560;
    //         for (var i = 0; i < 22; i++) {
    //             document.getElementById(`img-slider${i+1}`).style.right = `${j}px`;
    //             j += 128;
    //         }

    //         document.getElementById("img-slider1").style.right = "-2560px";
    //         document.getElementById("img-slider2").style.right = "-2432px";
    //         document.getElementById("img-slider3").style.right = "-2304px";
    //         document.getElementById("img-slider4").style.right = "-2176px";
    //         document.getElementById("img-slider5").style.right = "-2048px";
    //         document.getElementById("img-slider6").style.right = "-1920px";
    //         document.getElementById("img-slider7").style.right = "-1792px";
    //         document.getElementById("img-slider8").style.right = "-1664px";
    //         document.getElementById("img-slider9").style.right = "-1536px";
    //         document.getElementById("img-slider10").style.right = "-1408px";
    //         document.getElementById("img-slider11").style.right = "-1280px";
    //         document.getElementById("img-slider12").style.right = "-1152px";
    //         document.getElementById("img-slider13").style.right = "-1024px";
    //         document.getElementById("img-slider14").style.right = "-896px";
    //         document.getElementById("img-slider15").style.right = "-768px";
    //         document.getElementById("img-slider16").style.right = "-640px";
    //         document.getElementById("img-slider17").style.right = "-512px";
    //         document.getElementById("img-slider18").style.right = "-384px";
    //         document.getElementById("img-slider19").style.right = "-256px";
    //         document.getElementById("img-slider20").style.right = "-128px";
    //         document.getElementById("img-slider21").style.right = "0px";
    //         document.getElementById("img-slider22").style.right = "128px";
            
    //     }, 500);
    //     setTimeout(function() {
    //     document.getElementById("img-slider3").style.opacity = "1";
    //     }, 1000);
    //     bannerStatus = 2;
    // }
    // else if (bannerStatus === 2) {
    //     document.getElementById("img-slider1").style.opacity = "0";
    //     setTimeout(function () {
    //         document.getElementById("img-slider2").style.right = "-512px";
    //         document.getElementById("img-slider2").style.zIndex = "2";
    //         document.getElementById("img-slider3").style.right = "-256px";
    //         document.getElementById("img-slider3").style.zIndex = "3";
    //         document.getElementById("img-slider1").style.right = "0px";
    //         document.getElementById("img-slider1").style.zIndex = "1";
    //     }, 500);
    //     setTimeout(function () {
    //         document.getElementById("img-slider1").style.opacity = "1";
    //     }, 1000);
    //     bannerStatus = 3;
    // }
    // else if (bannerStatus === 3) {
    //     document.getElementById("img-slider2").style.opacity = "0";
    //     setTimeout(function () {
    //         document.getElementById("img-slider3").style.right = "-512px";
    //         document.getElementById("img-slider3").style.zIndex = "2";
    //         document.getElementById("img-slider1").style.right = "-256px";
    //         document.getElementById("img-slider1").style.zIndex = "3";
    //         document.getElementById("img-slider2").style.right = "0px";
    //         document.getElementById("img-slider2").style.zIndex = "1";
    //     }, 500);
    //     setTimeout(function () {
    //         document.getElementById("img-slider2").style.opacity = "1";
    //     }, 1000);
    //     bannerStatus = 1;
    // }
}