var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
//console.log(currentDay)

//check to see what time it is, color code timeblocks
console.log(moment().hour());

var h = moment().hour();
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$(".taskBlock").each(function (i, item) {
    if (h === hours[i]) {
        $(this).addClass("present");
    }
})
$(".taskBlock").each(function (i, item) {
    if (h < hours[i]) {
        $(this).addClass("past");
    }
})
$(".taskBlock").each(function (i, item) {
    if (h > hours[i]) {
        $(this).addClass("future");
    }
})

//when .taskBlock is clicked, input field is available
$(".taskBlock").click(function(){
    $(this).prop(enabled);

})




