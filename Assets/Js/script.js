//created variable in which we have targeted current day
var displayCurrentDay= document.querySelector("#currentDay");

//Created variable and added moment.
var currentDay= moment();

//added date formar to display current
displayCurrentDay.innerHTML= currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a");

//adding class to time block class
var timeBlock = $(".time-block").addClass("row");

var currentHour = parseInt(moment().format("H"));


//selected save button and created an array and created a loop plus set get item
var saveBtn= document.getElementsByClassName("saveBtn");
var timeSlots=["9","10","11","12", "13", "14", "15", "16", "17"];
for(var i =0; i<timeSlots.length; i++){
    const slot= timeSlots[i];
    var textArea= document.getElementById(slot);
    textArea.innerHTML= localStorage.getItem(slot);
}

// time blocks COLOR CODED to indicate past, present, or future
$("textarea").each(function () {
    var $this = $(this);
    var id = parseInt($this.attr("id"));
  
    if (currentHour > id) {
      $(this).addClass("past");
    }
    if (currentHour < id) {
      $(this).addClass("future");
    }
    if (currentHour === id) {
      $(this).addClass("present");
    }
  });

// calling an event listner on each save button and setting value in local storage.
Object.values(saveBtn).forEach(saveBtn => {
    saveBtn.addEventListener("click", function(event){
        const id = event.target.id;
        const key =  id.split("_")[1];
        let textArea= document.getElementById(key).value; 
        localStorage.setItem(key, textArea);
    
    })    
});


