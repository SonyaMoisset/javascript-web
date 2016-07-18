/*function clic() {
  console.log("Clic!");
}

var boutonElt = document.getElementById("bouton");
boutonElt.addEventListener("click", clic);*/

/*var boutonElt = document.getElementById("bouton");

boutonElt.addEventListener("click", function() {
  console.log("clic");
});*/

// boutonElt.removeEventListener("click", clic);

/*document.getElementById("bouton").addEventListener("click", function (e) {
  console.log("Evenement : " + e.type + ", texte de la cible : " + e.target.textContent);
})*/

document.getElementById("interdit").addEventListener("click", function (e) {
  console.log("Continuez plutot a lire le cours ;)");
  e.preventDefault();
});