// hide list element
var closes:any = <HTMLElement><unknown>document.getElementsByClassName("close");
var i:number;
for (i = 0; i < closes.length; i++) {
    closes[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// add new task
function newElement() {
    var li = document.createElement("li");
    var inputValue:string = (document.getElementById("myInput") as HTMLTextAreaElement).value;
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
  
    if (inputValue === '') {
        alert("Invalid Input!!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
//   document.getElementById("myInput").value = "";
    (document.getElementById("myInput") as HTMLTextAreaElement).value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < closes.length; i++) {
        closes[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}