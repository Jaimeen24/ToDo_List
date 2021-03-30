// hide list element
var closes = document.getElementsByClassName("close");
var i;
for (i = 0; i < closes.length; i++) {
    closes[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}
// add new task
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Invalid Input!!");
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    //   document.getElementById("myInput").value = "";
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < closes.length; i++) {
        closes[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
