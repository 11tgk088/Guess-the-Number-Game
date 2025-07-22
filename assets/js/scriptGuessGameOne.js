// Get DOM elements
const number = document.getElementById("inputText");
const hitBtn = document.getElementById("checkItNow");
const guessResult = document.getElementById("resultData");
const numberOfGuesses = document.getElementById("guessData");

// Generate a random secret number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber); // For testing only

let guessCount = 0; // Track number of attempts

// Trigger "Check It Now" button when Enter key is pressed inside the input
number.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        hitBtn.click();
    }
});

// Handle "Check" button click
hitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission if button is inside a form

    // Create the refresh button only once
    const ctawrap = document.querySelector(".hit-multiple-btns");
    let refreshBtn = document.querySelector(".refresh-btn"); // Check if button already exists

    if (!refreshBtn) {
        refreshBtn = document.createElement("button");
        refreshBtn.className = "btn btn-success d-none refresh-btn"; // Add unique class to track
        refreshBtn.type = "button";
        refreshBtn.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`; // Font Awesome icon
        ctawrap.appendChild(refreshBtn);

        // Reload page on click
        refreshBtn.addEventListener("click", () => {
            window.location.reload();
        });
    }

    guessResult.textContent = ""; // Clear previous result

    // Convert input to a number
    const userGuess = Number(number.value.trim());

    // Validate input: non-empty and between 1 and 100
    if (number.value.trim() === "") {
        guessResult.textContent = "Please enter a number";
        return;
    }

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        guessResult.textContent = "❌ Please enter a valid number between 1 and 100.";
        return;
    }

    // Increment and display guess count
    guessCount++;
    numberOfGuesses.textContent = `Number of attempts: ${guessCount}`;

    // Compare guess to secret number
    if (userGuess === secretNumber) {
        guessResult.textContent = `🎉 Correct! The number was ${secretNumber}`;
        hitBtn.disabled = true; // Disable guess button
        refreshBtn.classList.remove("d-none"); // Show refresh button
    } else if (userGuess < secretNumber) {
        guessResult.textContent = "📉 Too low! Try again.";
    } else {
        guessResult.textContent = "📈 Too high! Try again.";
    }

    console.log(typeof userGuess); // Debug: confirm type is number
});
