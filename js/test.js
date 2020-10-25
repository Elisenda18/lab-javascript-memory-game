  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function flipCard() {
       card.querySelectorAll('.card div').forEach(div => {
          div.classList.toggle('front');
          div.classList.toggle('back');
       });
     
     // Game logic


       memoryGame.pickedCards.push(card);
       
       if (memoryGame.pickedCards.length === 2) {
         const card1 = memoryGame.pickedCards[0].getAttribute("data-card-name");  
         const card2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
   
         if (memoryGame.checkIfPair(card1, card2)) {
   
           //Updating the DOM Score Elements
           const pairsClicked = document.querySelector("#pairs-clicked");
           pairsClicked.innerText = memoryGame.pairsClicked;
   
           const pairsGuessed = document.querySelector("#pairs-guessed");
           pairsGuessed.innerText = memoryGame.pairsGuessed;
   
           //Clear pickedCards array for next turn
           memoryGame.pickedCards = [];
   
           // Check if the game if all pairs have been found
           if(memoryGame.isFinished()) {
             alert("Well done! You guessed them all. Refresh the page to start again ;)");
             memoryGame.shuffleCards();
           };
   
         } else {
            document.querySelector("#pairs-clicked").innerText = memoryGame.pairsClicked;
            memoryGame.pickedCards = [];
            setTimeout(flipCard, 700);
         };
     }  
    } 
});
