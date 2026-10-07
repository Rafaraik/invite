const envelopeButton = document.getElementById("envelope_button");
const envelope = document.querySelector(".envelope");
const folder1 = document.querySelector(".folder1");
const invitationScreen = document.querySelector(".invitation");

envelopeButton.addEventListener("click", function() {
     setTimeout(function() {
    const jumpscare = document.querySelector(".jumpscare");
    const scream = document.getElementById("scream");

    scream.currentTime = 0;
    scream.play();

    setTimeout(function() {
        jumpscare.style.display = "flex";
    }, 50);

    setTimeout(function() {
        jumpscare.style.display = "none";
        scream.pause();
        scream.currentTime = 0;
    }, 1500);


}, 10000);
    envelope.classList.add("fade");


    
    setTimeout(function() {
        invitationScreen.style.display = "block";
    }, 1000);

});
const paper2 = document.querySelector(".paper2");
const frameB = document.querySelector(".frame_B");
const map = document.querySelector(".map");

paper2.addEventListener("click", function() {
    map.style.display = "block";
});

frameB.addEventListener("click", function() {
    map.style.display = "block";
});

map.addEventListener("click", function() {
    map.style.display = "none";
});
