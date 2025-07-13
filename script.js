/* ======== Matrix Digital Rain ======== */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const letters = "abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px Courier New";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 33);

/* ======== Typing Effect ======== */
function typeText(elementId, text, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

window.addEventListener("load", () => {
    const intro = "Miami.";
    const bio = "My background is rooted in investing (I operated a small fund at 18) and Jewish studies (I spent four years studying almost exclusively Talmud after high school).";

    typeText("intro", intro, 20, () => {
        setTimeout(() => {
            typeText("bio", bio, 20, () => {
                document.querySelector("ul.links").classList.add("show");
            });
        }, 500);
    });
});