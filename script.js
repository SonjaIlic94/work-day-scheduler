// display the current time
const currentTime = moment().format("MMMM Do YYYY, HH:mm");
var block = document.querySelector("#time-block");
document.querySelector("#currentDay").innerHTML = "Today's date is " + currentTime;
var saveBtnClick = document.querySelector("#saveBtn");

// possible schedule times
const blockTime = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
]

function scheduleBlockGenerator() {
    for (let i = 0; i < blockTime.length; i++) {

        // create time blocks 9-5
        // makes the horizontal card
        var makeBlockSection = document.createElement("div");
        makeBlockSection.className = "row time-block";
        block.appendChild(makeBlockSection);

        // input the time
        var hour = document.createElement("p");
        hour.className = "hour col-1";
        //use the arry to fill this in
        hour.innerHTML = blockTime[i] + ":00";
        makeBlockSection.appendChild(hour);

        // input the to do task
        var scheduleInput = document.createElement("textarea");
        scheduleInput.className = "textarea col-9";
        scheduleInput.setAttribute("type", "text");
        scheduleInput.setAttribute("placeholder", "Enter to-do item here");
        scheduleInput.setAttribute("id", "schedule-input");
        makeBlockSection.appendChild(scheduleInput);

        //save button
        var saveBtn = document.createElement("button");
        saveBtn.className = "saveBtn";
        saveBtn.setAttribute("type", "submit");
        saveBtn.textContent = "Save Schedule Item";
        makeBlockSection.appendChild(saveBtn);

        let compareTime = moment().hour();
        if (blockTime[i] == compareTime) {
            scheduleInput.className = "textarea col-9 present";
        }
        else if (blockTime[i] > compareTime) {
            scheduleInput.className = "textarea col-9 future";
        }
        else {
            scheduleInput.className = "textarea col-9 past";
        }

    };
    saveBtnClick.addEventListener('click', function () {
        console.log("clicked");
    });
};

scheduleBlockGenerator();


//be able to type in the time blocks
// time blocks must know whta time it currently is
// if event as happened, block is grey
// if event iscurrent, block is red
// if event is future, block is green
// time blocks have save feature (local storage)