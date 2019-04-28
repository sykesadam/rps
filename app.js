function choice(e) {
    const existingSection = document.querySelector("section");
    const playerChoice = e.target;
    playerChoice.classList.add("clicked");
    existingSection.classList.add("fade");

    setTimeout(() => {
        roundSection(playerChoice.dataset.choice);
    }, 800);
}

function roundSection(choice) {
    const page = document.querySelector("main");
    const existingSection = document.querySelector("section");
    const section = document.createElement("section");

    section.classList.add("round");

    page.removeChild(existingSection);
    page.appendChild(section);

    const roundSectionContent = document.querySelector(".round");
    roundSectionContent.innerHTML = `
        <div class="player-side">
            <div class="player-choice choice">${chooseEmoji(choice)}</div>
            <a href='#' class="play-again">Play again</a>
        </div>
        ${cpuGenerator()}
    `;

    chooseWinner(choice);

    const playAgain = document.querySelector(".play-again");
    playAgain.addEventListener("click", selectSection);
}

function selectSection() {
    const page = document.querySelector("main");
    const existingSection = document.querySelector("section");
    const section = document.createElement("section");

    section.classList.add("player-choices");
    page.removeChild(existingSection);
    page.appendChild(section);

    const selectSectionContent = document.querySelector(".player-choices");
    selectSectionContent.innerHTML = `
        <div class="choice" data-choice="rock">👊</div>
        <div class="choice" data-choice="paper">✋</div>
        <div class="choice" data-choice="scissors">✌</div>
    `;
    const choices = document.querySelectorAll(".choice");
    choices.forEach(function(c) {
        c.addEventListener("click", choice);
    });
}

function chooseWinner(choice) {
    const cpuChoice = document.querySelector(".cpu-choice").dataset.cpuChoice;
    const player = document.querySelector(".player-choice");

    if (
        (choice === "rock" && cpuChoice === "scissors") ||
        (choice === "paper" && cpuChoice === "rock") ||
        (choice === "scissors" && cpuChoice === "paper")
    ) {
        setTimeout(() => {
            player.style.background = "green";
        }, 300);
        console.log("player wins");
        return 1;
    } else if (
        (cpuChoice === "rock" && choice === "scissors") ||
        (cpuChoice === "paper" && choice === "rock") ||
        (cpuChoice === "scissors" && choice === "paper")
    ) {
        setTimeout(() => {
            player.style.background = "red";
            return 2;
        }, 300);
        console.log("cpu wins");
    } else {
        console.log("draw");
        return 3;
    }
}

function chooseEmoji(choice) {
    let emoji;
    switch (choice) {
        case "rock":
            emoji = "👊";
            break;
        case "paper":
            emoji = "✋";
            break;
        case "scissors":
            emoji = "✌";
            break;
    }
    return emoji;
}

function cpuGenerator() {
    let cpuRandom = Math.floor(Math.random() * 3);
    let cpuText;
    let cpuEmoji;
    switch (cpuRandom) {
        case 0:
            cpuText = "rock";
            cpuEmoji = "👊";
            break;
        case 1:
            cpuText = "paper";
            cpuEmoji = "✋";
            break;
        case 2:
            cpuText = "scissors";
            cpuEmoji = "✌";
            break;
    }

    const cpuChoice = `<div class="cpu-choice choice" data-cpu-choice="${cpuText}">${cpuEmoji}</div>`;
    return cpuChoice;
}

function roundSelect() {
    const page = document.querySelector("main");
    const existingSection = document.querySelector("section");
    const section = document.createElement("section");

    section.classList.add("rounds-select");
    if (existingSection != null) page.removeChild(existingSection);
    page.appendChild(section);

    const selectSectionContent = document.querySelector(".rounds-select");
    selectSectionContent.innerHTML = `
        <a href="#" class="round" data-round=1>1</a>
        <a href="#" class="round" data-round=3>3</a>
        <a href="#" class="round" data-round=5>5</a>
    `;
    const rounds = document.querySelectorAll(".round");
    rounds.forEach(function(c) {
        c.addEventListener("click", game);
    });
}

function game(e) {
    console.log(e.target.dataset.round);
    let won = false;
    while (!won) {
        selectSection();
        // all function calls here
    }
}

roundSelect();
