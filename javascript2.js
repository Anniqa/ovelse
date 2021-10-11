const FORMOUTPUT = document.getElementById("formulardata")
FORMOUTPUT.innerHTML = "navn: " + sessionStorage.getItem("navn") + " <br>adresse: "+ sessionStorage.getItem('adresse')  + " <br>postnr: "+ sessionStorage.getItem('postnr') + "<br>bynavn: "+ sessionStorage.getItem('bynavn')+ "<br>mobilnummer: "+ sessionStorage.getItem('mobilnummer');
;
