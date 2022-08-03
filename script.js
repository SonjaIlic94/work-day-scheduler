// display the current time
const currentTime = moment().format('YYYY-MM-DD');
var block = document.querySelector("#time-block");
document.querySelector("#currentDay").innerHTML = "Today's date is " + currentTime;


// possible schedule times
const blockTime = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM"
]

function timeBlockGenerator() {
    // create time blocks 9-5

    // makes the horizontal card
    var makeBlockSection = document.createElement("row");
    makeBlockSection.className = "block-section";
    block.appendChild(makeBlockSection);

    var scheduleInput = document.createElement("input");
    scheduleInput.className = "schedule-input";
    scheduleInput.setAttribute("type", "text");
    scheduleInput.setAttribute("placeholder", "Enter to-do item here")
    makeBlockSection.appendChild(scheduleInput);

};

timeBlockGenerator();
//be able to type in the time blocks
// time blocks must know whta time it currently is
// if event as happened, block is grey
// if event iscurrent, block is red
// if event is future, block is green
// time blocks have save feature (local storage)