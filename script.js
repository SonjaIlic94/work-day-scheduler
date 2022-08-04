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

function timeBlockGenerator(time) {
    for (let i = 0; i < blockTime.length; i++) {

        // create time blocks 9-5

        // makes the horizontal card
        var makeBlockSection = document.createElement("div");
        makeBlockSection.className = "row time-block";
        block.appendChild(makeBlockSection);

        // input the time
        var hour = document.createElement("p");
        hour.className = "hour";
        //use the arry to fill this in
        hour.textContent = blockTime[time];
        block.appendChild(hour);

        // input the to do task
        var scheduleInput = document.createElement("input");
        scheduleInput.className = "schedule-input";
        scheduleInput.setAttribute("type", "text");
        scheduleInput.setAttribute("placeholder", "Enter to-do item here");
        scheduleInput.setAttribute("id", "schedule-input");
        hour.appendChild(scheduleInput);


        //save button
        var saveBtn = document.createElement("button");
        saveBtn.className = "saveBtn";
        saveBtn.setAttribute("type", "submit");
        saveBtn.textContent = "Save Schedule Item";
        block.appendChild(saveBtn);
    };
};

timeBlockGenerator();
//be able to type in the time blocks
// time blocks must know whta time it currently is
// if event as happened, block is grey
// if event iscurrent, block is red
// if event is future, block is green
// time blocks have save feature (local storage)