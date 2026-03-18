const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move NO button randomly
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// YES button action
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;color:white;">
            <h1>Yayyy Vinnie ❤️😍</h1>
            <p>You just made me the happiest person alive 💖</p>
            <h2>I Love You Forever 💍✨</h2>
        </div>
    `;

    // Confetti effect
    for(let i=0; i<100; i++){
        let confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background = "white";
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(confetti);
    }
});