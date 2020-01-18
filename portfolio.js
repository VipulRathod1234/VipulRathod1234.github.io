var id = document.getElementById("name");
var isChange = false;
setInterval(function(){
    if(isChange)
    {
        id.style.background = "black";
    }
    else
    {
        id.style.background = "white";
    }
    isChange = !isChange;
}, 1000);