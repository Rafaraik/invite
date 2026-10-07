const envelopeButton = document.getElementById("envelope_button");
const envelope = document.querySelector(".envelope");
const folder1 = document.querySelector(".folder1");
const invitationScreen = document.querySelector(".invitation");

envelopeButton.addEventListener("click", function() {

    // Envelope fades and moves away
    envelope.classList.add("fade");
    setTimeout(function() {
        folder1.classList.add("fade");
    }, 1000);
    folder1.classList.add("move");

    // Show second page after the envelope animation
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