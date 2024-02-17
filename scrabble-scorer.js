// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";

   for (let i = 0; i < word.length; i++) {

      for (const pointValue in oldPointStructure) {

         if (oldPointStructure[pointValue].includes(word[i])) {
            letterPoints += `Points for '${word[i]}': ${pointValue}\n`
         }

      }
   }
   return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble! Enter a word:\n");

   gamePrompt = input.question("Enter a word to score: ")

   console.log(oldScrabbleScorer(gamePrompt));
};

function simpleScorer(simple) {
   simple = simple.toUpperCase(); // Using "simple" to differentiate between the various word scoring systems //
   let score = 0

   for (let i = 0; i < simple.length; i++) {
      score += 1;
   }

   return score;
}

function vowelBonusScorer(bonus) {
   bonus = bonus.toUpperCase();
   bonusScore = 0
   let vowel = ["A", "E", "I", "O", "U"];
   for (let i = 0; i < bonus.length; i++) {
      if (vowel.includes(bonus[i])) {
         bonusScore += 3
      } else {
         bonusScore += 1
      }
   }
   return bonusScore
}

function scrabbleScorer(scrabble) {
   let scrabbleScore = 0
   scrabble = scrabble.toUpperCase()
   for (let i = 0; i < scrabble.length; i++) {
      scrabbleScore += newPointStructure[scrabble[i]]
   } return scrabbleScore
};

const scoringAlgorithms = [
   {
      name: "Simple Score",
      description: "Each letter is worth 1 point",
      scoreFunction: "A function with a parameter for user input that returns a score"
   },
   {
      name: "Bonus Vowels",
      description: "Vowels are 3 pts, consonants are 1 pt.",
      scoreFunction: "A function that reutns a score based on the number of vowels and consonants."
   },
   {
      name: "Scrabble",
      description: "The traditional socring algorithm.",
      scoreFunction: "Uses the ScrabbleScorer() function to determine the score for a given word."
   }
];

function scorerPrompt() {
   let score = 0
   transform(oldPointStructure)
   word = input.question("Let's play some scrabble!\nEnter a word to score: ")
   gameNumber = input.question("Which scoring algorithm would you like to use? \n 0 - Simple: One point per character \n 1 - Vowel Bonus: Vowels are worth 3 points \n 2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: ");

   if (gameNumber == "0") {
      score = simpleScorer(word)
   }
   else if (gameNumber == "1") {
      score = vowelBonusScorer(word)
   }
   else if (gameNumber == "2") {
      score = scrabbleScorer(word)
   }
   console.log(`Score for '${word}' : ${score}`);
};

function transform(oldPointStructure) {
   let newStructure = {}
   for (item in oldPointStructure) {
      let letters = oldPointStructure[item]
      for (let i = 0; i < letters.length; i++){
         newStructure[letters[i]] = Number(item)
      } 
   } return newStructure
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   scorerPrompt();

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};
