let modal = document.getElementById('id01');

let ptscount = 0
let modal2 = document.getElementById('id011');


window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none";
  }
}
let pts = document.getElementById('pts');




const count = function () {
  ptscount = ptscount + 1 
  setTimeout(count,60000);
pts.innerHTML = ptscount + " pts";

}


count()


$(document).keyup(function(e) {
  if (e.key === "Escape") { // escape key maps to keycode `27`
  modal.style.display = "none";
  modal2.style.display = "none";
 }
});

/* this is the password input field */
var password = target.previousElementSibling;
( 'password' == password.getAttribute('type') ) ? password.setAttribute('type', 'text') : password.setAttribute('type', 'password');
target.textContent = ( 'Hide' == target.textContent ) ? 'Show' : 'Hide';
putCursorAtEnd(password);




function getHU() {
  let username = 'laushi' 
let mdp1 = "yoshi"
 
  var nom  =document.getElementById("username").value;  
  console.log(nom)
  var mdp  =document.getElementById("pass").value;  


if (nom === username && mdp === mdp1) {
  document.location.href='indexconnected.html'
}

else  {

  alert('Informations incorrectes')
}




}









function getHUen() {
  let username = 'laushi' 
let mdp1 = "yoshi"
 
  var nom  =document.getElementById("username").value;  
  console.log(nom)
  var mdp  =document.getElementById("pass").value;  


if (nom === username && mdp === mdp1) {
  document.location.href='indexconnecteden .html'
}

else  {

  alert('Incorrect username/password')
}




}



