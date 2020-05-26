function Generate(){
    var x = Math.floor(Math.random() *255)+1;
    var y = Math.floor(Math.random() *255)+1;
    var z = Math.floor(Math.random() *255)+1;
    document.querySelector("img").style.backgroundColor = "rgb("+x+","+y+","+z+")";
}
function Show(){
    var color = document.querySelector("select").value;
    document.querySelector("img").style.backgroundColor = color;
}
function Reset(){
    document.querySelector("img").style.backgroundColor = "white";
}


    