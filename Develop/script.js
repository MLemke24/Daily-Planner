

$(document).ready(function(){


    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"))
    let children = $("tbody").children()
for (let i = 0; i < children.length; i++)  {

    var childTr = children.eq(i)
    var time = childTr.id
    var trChildren = childTr.children();
    var textArea = trChildren.eq(1);
    var button = trChildren.eq(2).find("button")
    
    if (localStorage.getItem(time) === null) {
    var Items = localStorage.getItem(time)
    textArea.innerHTML = Items

      }

    button.on("click", function(Save) {

    localStorage.setItem(time, Items)
    

    })
    
}

})





    