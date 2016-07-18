/*var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";*/

/*pseudoElt.addEventListener("focus", function() {
  document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
pseudoElt.addEventListener("blur", function() {
  document.getElementById("aidePseudo").textContent = "";
});*/

/*document.getElementById("confirmation").addEventListener("change", function(e) {
  console.log("Demande de confirmation :" + e.target.checked);
});*/

/*document.getElementById("nationalite").addEventListener("change", function(e) {
  console.log("Code de nationalite : " + e,target,value);
});*/

document.getElementById("courriel").addEventListener("blur", function(e) {
  var validiteCourriel = "";
  if (e.target.value.indexOf("@") === -1) {
    validiteCourriel = "Adresse invalide";
  }
  document.getElementById("aideCourriel").textContent = validiteCourriel;
});