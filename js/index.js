document.getElementById('calculate-button').addEventListener('click', function () {
    const nodeList = document.querySelectorAll("ol li");
    const nodeLength = nodeList.length;
    const playerBudget = document.getElementById("player-budget").value;
    const playerBudgetValue = parseFloat(playerBudget);
    const playerExpenses = document.getElementById("player-expence");


    const expenses = nodeLength * playerBudgetValue;
    playerExpenses.innerText = expenses;



})

function getElementCoachAndManagerById(elementId) {
    const inputValue = document.getElementById(elementId);
    const inputCostValueString = inputValue.value;
    const managerCostValue = parseFloat(inputCostValueString);

    return managerCostValue;
}

document.getElementById('calculate-total-button').addEventListener('click', function () {
    const managerCost = getElementCoachAndManagerById('manager-cost');

    const coachCost = getElementCoachAndManagerById('coach-cost');


    const playerExpenses = document.getElementById('player-expence');
    const player = playerExpenses.innerText;
    const playerExpensesValue = parseInt(player);
    const totalCost = managerCost + coachCost + playerExpensesValue;
    const total = document.getElementById('total');
    total.innerText = totalCost;
    console.log(totalCost);



})


document.getElementById("select").addEventListener("click", function () {
    addPlayer("Neymar");
    document.getElementById("select").classList.add("disabled");
});
document.getElementById("select2").addEventListener("click", function () {
    addPlayer("Rooney");
    document.getElementById("select2").classList.add("disabled");
});
document.getElementById("select3").addEventListener("click", function () {
    addPlayer("Ronaldinho");
    document.getElementById("select3").classList.add("disabled");
});
document.getElementById("select4").addEventListener("click", function () {
    addPlayer("Ronaldo");
    document.getElementById("select4").classList.add("disabled");
});
document.getElementById("select5").addEventListener("click", function () {
    addPlayer("Messi");
    document.getElementById("select5").classList.add("disabled");
});
document.getElementById("select6").addEventListener("click", function () {
    addPlayer("Mbappe");
    document.getElementById("select6").classList.add("disabled");
});





