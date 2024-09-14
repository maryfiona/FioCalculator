const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
const historySection = document.getElementById("history");
const historyButton = document.getElementById("history-btn");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        const result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function addToHistory(entry) {
    const listItem = document.createElement("li");
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}

function toggleHistory() {
    historySection.classList.toggle("show");
}
