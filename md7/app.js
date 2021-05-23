let inputs = document.getElementById("inputs");
let divs = document.getElementById("divs");


function funk() {
if (inputs.value == ""){
    alert("ievadi vērtību");
}else{
    divs.innerHTML = "Sveiks " + inputs.value + ".";
    inputs.value = "";
setTimeout(function(){ 
    document.getElementById("divs").innerHTML = "";
}, 3000);
}}
