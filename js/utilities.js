function selectButton(buttonId) {
   console.log(buttonId);
   // set the player name into selected box
   const playerName = document.getElementById(
      buttonId + "-player-name"
   ).innerText;
   const playerContainer = document.getElementById("player-container");

   // disable button
   document.getElementById(buttonId).disabled = true;
   document
      .getElementById(buttonId)
      .classList.replace("hover:bg-blue-700", "disabled:opacity-50");
   let player = document.getElementsByClassName("li");
   const playerLength = player.length;
   console.log(playerLength);
   if (playerLength < 5) {
      const li = document.createElement("li");
      li.classList.add("li");
      li.innerText = playerName;
      playerContainer.appendChild(li);
   } else {
      alert("You have selected the best five players");
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
