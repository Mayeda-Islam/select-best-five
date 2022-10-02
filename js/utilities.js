function selectButton(buttonId) {
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
   // count the player number and give a warning
   if (playerLength < 5) {
      const li = document.createElement("li");
      li.classList.add("li");
      li.innerText = playerName;
      playerContainer.appendChild(li);
   } else {
      alert("You can't select more than five players");
   }
}
// calculate per player expense
document.getElementById("calculate").addEventListener("click", function () {
   const perPlayerById = document.getElementById("per-player");
   const perPlayerString = perPlayerById.value;
   const perPlayerValue = parseInt(perPlayerString);
   const playerExpense = document.getElementById("player-expense");
   const playerContainer = document.getElementsByClassName("li");
   playerExpense.innerText = perPlayerValue * playerContainer.length;
});
// get the all the manager and coach expenses and calculate total
document
   .getElementById("calculate-total")
   .addEventListener("click", function () {
      const playerExpense = document.getElementById("player-expense").innerText;
      const managerValue = calculateTotal("manager");
      const coachValue = calculateTotal("coach");
      const totalValue = parseInt(playerExpense) + managerValue + coachValue;
      const displayTotalById = document.getElementById("displayTotal");
      displayTotalById.innerText = totalValue;
   });
// common funtion of get the value of manager and coach
function calculateTotal(inputId) {
   const getTextValueById = document.getElementById(inputId);
   const text = getTextValueById.value;
   const textValue = parseInt(text);
   return textValue;
}
