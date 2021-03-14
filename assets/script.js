var timeKey, value, valueText, block

$(document).ready(function(){
  
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"))
  let children = $("tbody").children()

 
    if (localStorage.length > 0) {
      block = JSON.parse(localStorage.getItem(timeKey));
      console.log(block)
     
    }

  

  $("button").on("click", function(){

    timeKey = $(this).parent().attr("id")
    console.log(timeKey)
  
    value = $(this).closest("tr");
    valueText = value.find("td:eq(0)").text();
    console.log(valueText)

    localStorage.setItem(timeKey, JSON.stringify(valueText))


  })

  
   
   
  })






















//   for (let i = 0; i < children.length; i++)  {
//     // grab id to put in local storage
//     var childTr = children.eq(i)
//     // console.log(childTr)
//     var block = childTr[0].id
//     // console.log(block)
    
    

//     // grab text to put in local storage
//     var trChildren = childTr.children();
//     // console.log(trChildren)
//     var textArea = trChildren.eq(1)
//     // console.log(textArea)
    
//     var button = trChildren.eq(2).find("button")

//     button.on("click", function() {
//       //this code below will become your "block" variable
//       
//       //this set msg to localstorage
//    
      
//    
//     // console.log(Items)
//     }

//   }


/*
function that loads items into saved positions
function that saves items
save button onclick handler function
function that audits times and styles dynamically

.val() gives value of input field
.text() gives text within eleem
*/

// let glenVar = $("#textarea").val();
// console.log(glenVar)

    