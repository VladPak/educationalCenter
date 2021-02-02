const date = new Date();

function RenderCalendar(){
  var monthNow = date.getMonth();
  var monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  document.querySelector(".calendarDate h4").innerHTML = monthArray[monthNow];
  document.querySelector(".calendarDate p").innerHTML = date.toDateString();
  var days = "";
  var monthDays = document.querySelector(".calendarCurrentDays");

  //month days
  for(var i=1; i <= lastDay; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
      days += `<div class="currentDay">${i}</div>`;
    }
    else{
      days += `<div>${i}</div>`;
      monthDays.innerHTML = days;
    }
  }
}

//Next month
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  RenderCalendar();
});

//Previous month
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  RenderCalendar();
});

RenderCalendar();
