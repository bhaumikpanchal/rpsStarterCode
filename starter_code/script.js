// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
    var rpsElements = ["rock", "paper", "scissors"];

    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
    var random = Math.floor(Math.random() * 3);

    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
    var computerChoice = rpsElements[random];

    // Task 1, Step 4: return this new value
    return computerChoice;
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    
    var result = "";
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
    if((userChoice === "rock" && computerChoice === "paper") || 
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")) 
    {
        result = "computer wins";
    } else if ((userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper"))
    {
        result = "user wins";    
    } else {
        result = "draw";
    }
    

    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"
    console.log(result);

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
     $("#computer-choice").append("<br> " + computerChoice + " </br>");
     
    // Task 5: Show the winner in HTML after the word "Winner:"
     $("#winner").append("<br> " + result + " </br>");
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = null;
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.
    // $("#paper").click( function() { userChoice = "paper"; computerChoice=generateComputerChoice(); pickWinner(userChoice, computerChoice); } );
    // $("#rock").click( function() { userChoice = "rock"; computerChoice=generateComputerChoice(); pickWinner(userChoice, computerChoice);} );
    // $("#scissors").click( function() { userChoice = "scissors"; computerChoice=generateComputerChoice(); pickWinner(userChoice, computerChoice);} );
    $(".choice").click( function(userChoice) { 
        userChoice = this.id;
        computerChoice = generateComputerChoice();
        pickWinner(userChoice, computerChoice);
    });

    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
   // pickWinner(userChoice, computerChoice);

});