/*Definindo as variáveis */
var a = parseInt(prompt("Digite o valor de A:"));
var b = parseInt(prompt("Digite o valor de B:"));
var c = parseInt(prompt("Digite o valor de C:"));
/*Definindo valores positivos e negativos de a, b e c.*/
if (a >= 0) {
    document.write("Δ= " + a + "x² ");
} else {
    document.write("Δ= " + a + "x² ");
}
if (b >= 0) {
    document.write("+ " + b + "x ");
} else {
    document.write(b + "x ");
}
if (c >= 0) {
    document.write("+ " + c);
} else {
    document.write(c);
}

document.write("<br>");
document.write("<br>");
/*Fazendo o cálculo de Delta */
var b2 = b**2;
if (a < 0) {
    document.write("Δ= " + b2 + " - 4 . (" + a + ")");
} else {
    document.write("Δ= " + b2 + " - 4 . " + a);
}
if (c < 0) {
    document.write(" . (" + c + ")");
} else {
    document.write(" . " + c);
}
document.write("<br>");
document.write("<br>");

var delta1 = -4*a*c;
if (delta1 >= 0) {
    document.write("Δ= " + b2 + "+" + delta1);
} else {
    document.write("Δ= " + b2, delta1);
}

document.write("<br>");
document.write("<br>");

var delta = b2 + delta1;
document.write("valor de delta: " + delta);

if (delta < 0) {
    document.write("<br>")
    document.write("<br>")
    document.write("A equação não possui valores R/Z < 0")
} else {
    document.write("<br>");
    document.write("<br>");
    /*Fómula de Bhaskara */
    document.write("Fórmula de Bhaskara: ");
    document.write("-b +- √Δ /2.a");

    document.write("<br>");
    document.write("<br>");

    if (b < 0) {
        b = -b
        var a2 = 2*a;
        document.write("X= " + b + " +- " + "√" + delta + "<br>");
        document.write("-----------<br>");
        document.write(a2);

        document.write("<br>");
        document.write("<br>");
        /*X1 e X2 */
        var delta2 = Math.sqrt(delta);
        var x1 = (b + delta2) /a2;
        document.write("X1= " + b + " + " + Math.round(delta2) + " <br> ");
        document.write("---------<br>");
        document.write(a2);
        document.write("<br>")
        document.write("X1 = " + Math.round(x1))

        document.write("<br>");
        document.write("<br>");

        var x2 = (b - delta2)/a2;
        document.write("X2= " + b + " - " + Math.round(delta2) + " <br> ");
        document.write("---------<br>");
        document.write(a2);
        document.write("<br>")
        document.write("X2 = " + Math.round(x2));
    } else {
        var a2 = 2*a;
        document.write("X= " +"-" + b + " +- " + "√" + delta + "<br>");
        document.write("-----------<br>");
        document.write(a2);

        document.write("<br>");
        document.write("<br>");
        /*X1 e X2 */
        var delta2 = Math.sqrt(delta);
        var x1 = (-b + delta2) /a2;
        document.write("X1= " + "-" + b + " + " + Math.round(delta2) + " <br> ");
        document.write("---------<br>");
        document.write(a2);
        document.write("<br>")
        document.write("X1 = " + Math.round(x1))

        document.write("<br>");
        document.write("<br>");

        var x2 = (-b - delta2)/a2;
        document.write("X2= " + "-" + b + " - " + Math.round(delta2) + " <br> ");
        document.write("---------<br>");
        document.write(a2);
        document.write("<br>")
        document.write("X2 = " + Math.round(x2));
    }
}