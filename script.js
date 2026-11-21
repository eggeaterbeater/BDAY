
// ENVELOPE OPENING

const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const envelopeScreen = document.getElementById("envelopeScreen");
const birthdayPage = document.getElementById("birthdayPage");

openButton.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.classList.add("hide");
        birthdayPage.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createConfetti();
    }, 1000);
});


// MUSIC BUTTON

const musicButton = document.getElementById("musicButton");
const birthdayMusic = document.getElementById("birthdayMusic");

musicButton.addEventListener("click", () => {
    if (birthdayMusic.paused) {
        birthdayMusic.play();
        musicButton.textContent = "♫ Pause our song";
    } else {
        birthdayMusic.pause();
        musicButton.textContent = "♫ Play our song";
    }
});


// BLOW THE CANDLES

const wishButton = document.getElementById("wishButton");
const wishMessage = document.getElementById("wishMessage");
const flames = document.querySelectorAll(".flame");

wishButton.addEventListener("click", () => {
    flames.forEach((flame) => {
        flame.classList.add("off");
    });

    wishMessage.textContent =
        "I hope all your wishes come true. Happy Birthday! ♡";

    wishButton.textContent = "Wish made! ♡";

    createConfetti();
});


// CONFETTI ANIMATION

function createConfetti() {
    const colors = ["#EBCB70", "#F2D9A4", "#FFF9E9", "#C99D3D", "#D9A76C"];

    for (let i = 0; i < 70; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.animationDelay = Math.random() * 1.5 + "s";
        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4500);
    }
}
