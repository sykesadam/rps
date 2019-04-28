function roundSection(choice) {
    const page = document.querySelector("main");
    const existingSection = document.querySelector("section");
    const section = document.createElement("section");

    section.classList.add("round");

    page.removeChild(existingSection);
    page.appendChild(section);

    const roundSectionContent = document.querySelector(".round");
    roundSectionContent.innerHTML = `
        <div class="player-choice">${chooseEmoji(choice)}</div>
        ${cpuGenerator()}
    `;

    // put in seperate function
    const cpuChoice = document.querySelector(".cpu-choice").dataset.cpuChoice;

    if (
        (choice === "rock" && cpuChoice === "scissors") ||
        (choice === "paper" && cpuChoice === "rock") ||
        (choice === "scissors" && cpuChoice === "paper")
    ) {
        console.log("player wins");
    } else if (
        (cpuChoice === "rock" && choice === "scissors") ||
        (cpuChoice === "paper" && choice === "rock") ||
        (cpuChoice === "scissors" && choice === "paper")
    ) {
        console.log("cpu wins");
    } else {
        console.log("draw");
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
    console.log(cpuRandom);
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

    const cpuChoice = `<div class="cpu-choice" data-cpu-choice="${cpuText}">${cpuEmoji}</div>`;
    return cpuChoice;
}

function choice(e) {
    const existingSection = document.querySelector("section");
    const playerChoice = e.target;
    playerChoice.classList.add("clicked");
    setTimeout(() => {
        existingSection.classList.add("fade");
    }, 300);

    setTimeout(() => {
        roundSection(playerChoice.dataset.choice);
    }, 800);
}

const choices = document.querySelectorAll(".choice");
choices.forEach(c => {
    c.addEventListener("click", choice);
});
