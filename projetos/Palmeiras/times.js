function div() {
    var palmeiras = document.getElementById("pam");
    var vasco = 10;
    var botafogo = 10;
    var corinthians = 0;
    if (vasco >= corinthians|| botafogo >= corinthians) {
        corinthians = corinthians++;
        palmeiras.setAttribute("id", "palmas");
    } else {
        alert("Deu alguma merda!")
    }

}
div();