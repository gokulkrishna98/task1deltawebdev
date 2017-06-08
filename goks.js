var add=document.getElementById("add");
var c=document.getElementById("para");
add.addEventListener("click",noteadd);
function noteadd () {
   var note=document.getElementById("note1");
   note.className="danger";
 
 }
 var ed=document.getElementById("edit");
  ed.addEventListener("click",edit);
 function edit(){
 	alert('hello');
    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.innerHTML = c.innerHTML;
    document.body.appendChild(x);
    x.addEventListener("input",adding);
    function adding(){
    	c.innerHTML=x.innerHTML;
    }
 }