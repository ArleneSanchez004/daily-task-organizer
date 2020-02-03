var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//console.log(currentDay)

//check to see what time it is, color code timeblocks
console.log(moment().hour());

var h = moment().hour();
var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

$(".taskBlock").each(function (i, item) {
    if (h === hours[i]) {
        this.addClass("present");
    }
})
// $(".taskBlock").each(function () {
//     if (h <= hours) {
//         $(".taskBlock").addClass("past");
//         console.log("past");
//     }
// });

// $(".taskBlock").each(function () {
//     if (h >= hours) {
//         $(".taskBlock").addClass("future");
//     }
// });

