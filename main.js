function jonat1(){
var div = document.createElement('div');
var div3 =document.getElementById('div3')
var inp1=document.getElementById('inp1')

div.style.width = "60%"; 
div.style.height ="5vh";
div.style.backgroundColor ="white"
div.style.borderRadius ="20px"
div.style.marginLeft ="170px"

var h1 = document.createElement('h1')
h1.innerText = inp1.value;

div.appendChild(h1);
div3.appendChild(div);





}