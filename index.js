var ply1Score = 0;
var ply2Score = 0;
const p = document.createElement("p");
p.setAttribute("id", "winMsg");
const div = document.getElementById("gameMain");

rollnow = (btnName) => {
    if (btnName === "play1-btn") {
        const diceImg = document.getElementById("dice-img");
        const randomdice = (Math.floor((Math.random() * 6) + 1));
        diceImg.setAttribute("src", `images/Dice${randomdice}.png`);
        ply1Score = parseInt(ply1Score + randomdice);
        document.getElementById("play1-score").innerText = ply1Score;
        if (ply1Score >= 30) {
            document.getElementById("resetBtn").removeAttribute("disabled");
            document.getElementById("play1-btn").setAttribute("disabled", true);
            document.getElementById("play2-btn").setAttribute("disabled", true);
            p.innerHTML = "congratulations Player-1 Won";
            div.append(p);
            ply1Score = 0;
        } else {
            document.getElementById("resetBtn").setAttribute("disabled", true);
            document.getElementById("play1-btn").setAttribute("disabled", true);;
            document.getElementById("play2-btn").removeAttribute("disabled");
        }
    } else {
        const diceImg = document.getElementById("dice-img");
        const randomdice = (Math.floor((Math.random() * 6) + 1));
        diceImg.setAttribute("src", `images/Dice${randomdice}.png`);
        ply2Score = parseInt(ply2Score + randomdice);
        document.getElementById("play2-score").innerText = ply2Score;
        if (ply2Score >= 30) {
            document.getElementById("resetBtn").removeAttribute("disabled");
            document.getElementById("play1-btn").setAttribute("disabled", true);
            document.getElementById("play2-btn").setAttribute("disabled", true);
            //    const div= document.getElementById("gameMain");
            //    const p=document.createElement("p");
            p.setAttribute("id", "winMsg")
            p.innerHTML = "congratulations Player-2 Won";
            div.append(p);
            ply2Score = 0;
        } else {
            document.getElementById("resetBtn").setAttribute("disabled", true);
            document.getElementById("play2-btn").setAttribute("disabled", true);
            document.getElementById("play1-btn").removeAttribute("disabled");
        }

    }
}
reset = () => {
    ply2Score = 0;
    ply1Score = 0;
    document.getElementById("play1-btn").removeAttribute("disabled");
    document.getElementById("play2-btn").removeAttribute("disabled");
    document.getElementById("resetBtn").setAttribute("disabled", true);
    document.getElementById("play1-score").innerText = 0;
    document.getElementById("play2-score").innerText = 0;
    // document.removeChild()
    document.getElementById("winMsg").innerText = "";
}

