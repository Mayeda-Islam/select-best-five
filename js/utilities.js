function selectButton() {
   // set the player name into selected box
   const playerName = document.getElementById("player-name").innerText;
   const playerContainer = document.getElementById("player-container");
   const li = document.createElement("li");
   li.classList.add("li");
   playerContainer.appendChild(li);
   let player = document.getElementsByClassName("li");
   const playerLength = player.length;
   console.log(playerLength);
   if (playerLength - 1 < 5) {
      console.log(playerLength - 1);
      li.innerText = playerName;
      playerContainer.appendChild(li);
   } else {
      alert("beshi");
   }
}

document.getElementById("calculate").addEventListener("click", function () {
   const perPlayerById = document.getElementById("per-player");
   const perPlayerString = perPlayerById.value;
   const perPlayerValue = parseInt(perPlayerString);
   console.log(perPlayerValue);
   const playerExpense = document.getElementById("player-expense");
   const playerContainer = document.getElementsByClassName("li");

   playerExpense.innerText = perPlayerValue * playerContainer.length;
});
document
   .getElementById("calculate-total")
   .addEventListener("click", function () {
      const playerExpense = document.getElementById("player-expense").innerText;
      const managerValue = calculateTotal("manager");
      const coachValue = calculateTotal("coach");
      const totalValue = parseInt(playerExpense) + managerValue + coachValue;
      const displayTotalById = document.getElementById("displayTotal");
      displayTotalById.innerText = totalValue;
      console.log(totalValue);
   });
function calculateTotal(inputId) {
   const getManagerById = document.getElementById(inputId);
   const managerString = getManagerById.value;
   const managerValue = parseInt(managerString);
   return managerValue;
}
