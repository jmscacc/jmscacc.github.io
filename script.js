
const monthsarry = "";

const month = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];

const first = "July 10 2017";

function countdown(){
    const firstDate = new Date(first);
    const currentDate = new Date();
    const currentMonthsarry = (currentDate.getTime() - firstDate.getTime()) / 2629746000;
    document.getElementById("months").innerHTML = parseInt(currentMonthsarry) + 1;
    document.getElementById("ordinal").innerHTML = nth(parseInt(currentMonthsarry));
    const monthsarryMonth = currentDate.getMonth();
    const monthsarryDate = new Date(month[monthsarryMonth] + " 10 " + currentDate.getFullYear());
    const totalSeconds = (monthsarryDate.getTime() - currentDate.getTime()) / 1000;
    const days = totalSeconds / 86400;
    const hours = (days - parseInt(days))* 86400 / 3600;
    const minutes = (hours - parseInt(hours))* 3600 / 60;
    const seconds = (minutes - parseInt(minutes))* 60;

    document.getElementById("days").innerHTML = parseInt(days);
    document.getElementById("hours").innerHTML = formatTime(parseInt(hours));
    document.getElementById("minutes").innerHTML = formatTime(parseInt(minutes));
    document.getElementById("seconds").innerHTML = formatTime(parseInt(seconds));

}

function formatTime(time){
    if(time < 10){
        return "0"+ time;
    }
    return time;
}

function nth(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
}

countdown();

setInterval(countdown, 1000);


