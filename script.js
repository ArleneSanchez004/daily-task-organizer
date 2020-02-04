var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
//console.log(currentDay)

//check to see what time it is, color code timeblocks
//console.log(moment().hour());

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
});

//save the input
var storageInput = ["9","10","11","12","13","14","15","16","17"];

$(".saveBtn").click(function(event) {
   var storeInput = $(this).siblings("textarea").val();
    localStorage.setItem($(this).siblings("textarea").attr("id") ,storeInput);                
    console.log(storeInput);
});

storageInput.forEach(function(input){
    $("#" + input).val(localStorage.getItem(input));
});

