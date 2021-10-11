const FORMULAR = document.getElementById("formular");

FORMULAR.addEventListener("submit", function (e) {
    
    e.preventDefault();
    const NAVN = document.getElementById("navn").value;
    const ADRESSE = document.getElementById("adresse").value;
    const POSTNR = document.getElementById("postnr").value;
    const BYNAVN = document.getElementById("bynavn").value;
    const MOBILNUMMER = document.getElementById("mobilnummer").value;

    sessionStorage.setItem("navn", NAVN);
    sessionStorage.setItem("adresse", ADRESSE);
    sessionStorage.setItem("postnr", POSTNR);
    sessionStorage.setItem("bynavn", BYNAVN);
    sessionStorage.setItem("mobilnummer", MOBILNUMMER);

    document.location.href = "side2.html";
})