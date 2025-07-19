const inputText = document.getElementById("inputText");
const checkItNow = document.getElementById("checkItNow");
const resultData = document.getElementById("resultData");
const guessData = document.getElementById("guessData");
const checkRefreshBtn = document.querySelector(".hit-multiple-btns");

const randomNum =  Math.floor(Math.random() * 100 ) + 1;
console.log("Random number:", randomNum);
let guessCount = 0;

// hit the button
checkItNow.addEventListener("click", () => {
    getTheNumber();
})

function getTheNumber(){   
    guessCount++;    
    console.log("The number of guessess", guessCount)

   // alert("I'm hit");
    const userGuess = Number(inputText.value); // convert to number
    console.log("User entered number is:", userGuess );
if(userGuess < 1 || userGuess > 100 || isNaN(userGuess)){
    //resultData.innerText = "Please enter the number between 1 and 100";
    alert("Please enter the number between 1 and 100");
    return;
}
else if(userGuess === randomNum){
     resultData.innerText = `🎉 Congratulations! You guessed it right: ${userGuess}`;
        checkItNow.disabled = true;
        inputText.disabled = true;

        const createRef =  document.createElement("button");
        createRef.className = "btn btn-success";
        createRef.textContent = "Refresh the page";
        checkRefreshBtn.appendChild(createRef);     
        createRef.addEventListener("click", () => {
           window.location.reload(); // ✅ This reloads the page
        })   
}
else if(userGuess > randomNum){
    resultData.innerText = `📈 Too high! Try again: ${userGuess}`;
}
else{
    resultData.innerText = `📉 Too low!: ${userGuess}`;

}
guessData.innerText = `Number of Guesses: ${guessCount}`;
}













































