// display the current time
const currentTime = moment().format("MMMM Do YYYY, HH:mm");
var block = document.querySelector("#time-block");
document.querySelector("#currentDay").innerHTML = "Today's date is " + currentTime;

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

// display time blocks
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
        //use the array to fill this in
        hour.innerHTML = blockTime[i] + ":00";
        makeBlockSection.appendChild(hour);

        // input the to do task
        var scheduleInput = document.createElement("textarea");
        scheduleInput.className = "textarea col-9";
        scheduleInput.setAttribute("type", "text");
        scheduleInput.setAttribute("placeholder", "Enter to-do item here");
        //genereate unique id for each textarea
        scheduleInput.setAttribute("id", "text" + i);
        scheduleInput.value = localStorage.getItem(blockTime[i]);
        makeBlockSection.appendChild(scheduleInput);

        //save button
        var saveBtn = document.createElement("button");
        saveBtn.className = "saveBtn";
        saveBtn.setAttribute("type", "submit");
        saveBtn.textContent = "Save Schedule Item";

        //save on click event
        saveBtn.addEventListener('click', function (event) {
            event.preventDefault();
            //generate storage key = time of the block
            let timeKey = blockTime[i];
            //generate storage value = specific textarea id value
            let userText = document.getElementById("text" + i).value;
            saveTask(timeKey, userText);
        });
        makeBlockSection.appendChild(saveBtn);

        // compare time array to current time
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

    //local storage
    function saveTask(timeKey, userText) {
        localStorage.setItem(timeKey, userText);
    }
};

scheduleBlockGenerator();
