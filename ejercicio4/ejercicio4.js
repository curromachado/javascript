function calcularIMC() {
    var Peso = document.getElementById('Peso').value;
    var AlturaCm = document.getElementById('Altura').value;

    //convertir altura de cm a metros
    var alturaM = AlturaCm / 100;

    //Calcular IMC
    var imc = Peso / Math.pow(alturaM, 2);

    //Mostrar el resultado
    var resultado = "Su IMC es: " + imc.toFixed(2);

    //Mostrar tabla de recomendacion de IMC
    if (imc < 18.5) {
        resultado += " - Bajo peso";
      } else if (imc >= 18.5 && imc < 24.9) {
        resultado += " - Peso normal";
      } else if (imc >= 25 && imc < 29.9) {
        resultado += " - Sobrepeso";
      } else {
        resultado += " - Obesidad";
      }

    document.getElementById('resultado').innerText = resultado;
}