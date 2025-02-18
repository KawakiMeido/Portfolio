let img = document.getElementById("avatar");
let timeout;
var unrequitedActivation = false;
var isUserInteracted = false;
let SoundEffect = new Audio("WHO_AM_I_2.m4a");
let bgm = new Audio("Mitsukiyo.mp3");
let warningBox = document.getElementById("warning-Box");
bgm.loop = true;
bgm.volume = 0.4;
SoundEffect.loop = true;

function resetAudio() {
    bgm.pause();
    SoundEffect.currentTime = 0.8;
    SoundEffect.play().catch(err => console.log("Playback error:", err));
}

//Transforming Website
function unrequited(){
    let TargetElement = document.getElementById("avatar");
    var Ancestor = new Set();
    let current = TargetElement;

    while (current){
        Ancestor.add(current);
        current = current.parentElement;
    }

    document.querySelectorAll("*").forEach(element => {
        if (!Ancestor.has(element) && element !== TargetElement) {
            element.style.visibility = "hidden";
        }
    });

    TargetElement.style.borderColor = "#000000"
    document.body.style.backgroundColor = "#000000";
}

document.addEventListener("click", () => {
    isUserInteracted = true;
    bgm.play();
    warningBox.style.opacity = "0";
    setTimeout(() => {
        warningBox.style.display = "none";
    }, 500);
}, { once: true });

// Track mouse hover over image
img.addEventListener("mouseenter", () => {
    if (!unrequitedActivation){
        timeout = setTimeout(() => {
            if (isUserInteracted){
                unrequitedActivation = true;
                img.src = "unrequitable.jpg";
                resetAudio();
                unrequited();
            }
        }, 1000);
    }
});

// Track mouse exit image
img.addEventListener("mouseleave", () => {
    clearTimeout(timeout);
});