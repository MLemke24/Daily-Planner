  $(document).ready(function(){
  // Day and hour 
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"))
  let children = $("tbody").children()

    // Load schedule from local storage
$("tbody").find("tr").each(function() { 
 document.getElementById("8-text").innerHTML = (localStorage.getItem("8"));
 document.getElementById("9-text").innerHTML = (localStorage.getItem("9"));
 document.getElementById("10-text").innerHTML = (localStorage.getItem("10"));
 document.getElementById("11-text").innerHTML = (localStorage.getItem("11"));
 document.getElementById("12-text").innerHTML = (localStorage.getItem("12"));
 document.getElementById("13-text").innerHTML = (localStorage.getItem("13"));
 document.getElementById("14-text").innerHTML = (localStorage.getItem("14"));
 document.getElementById("15-text").innerHTML = (localStorage.getItem("15"));
 document.getElementById("16-text").innerHTML = (localStorage.getItem("16"));
 document.getElementById("17-text").innerHTML = (localStorage.getItem("17"));

 
  })
    //  Save Button
  $("button").on("click", function(timeKey, valueText){
    var timeKey = $(this).parent().attr("id");
    // console.log(timeKey)
    var value = $(this).closest("tr");
    var valueText = value.find("td:eq(0)").text();
    // console.log(valueText)

    // Set things in local storage
   localStorage.setItem(timeKey, valueText)
    

  })
})

// set color blocks via time of day

let TimeOfDay = function () {
  let currentTime = moment().hours()

$(".tasks").each(function(){
  let pastTime = parseInt($(this).attr("id"))
  console.log(pastTime)
  if(pastTime < currentTime) {
    $(this).addClass("table-dark")
  }
})

    }

  
   
   
 

















    