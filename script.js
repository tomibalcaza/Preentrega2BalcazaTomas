function iniciarSimulador() {
    let numeros = [];
    let cantidad = parseInt(prompt("¿Cuántos números quieres ingresar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Debes ingresar un número válido.");
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Número no válido, intenta de nuevo.");
            i--;
        }
    }

    let operacion = prompt("Elige una operación: suma, promedio, valor mayor o valor menor").toLowerCase();
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = numeros.reduce((acc, num) => acc + num, 0);
            break;
        case "promedio":
            resultado = numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
            break;
        case "valor mayor":
            resultado = Math.max(...numeros);
            break;
        case "valor menor":
            resultado = Math.min(...numeros);
            break;
        default:
            resultado = "Operación no válida.";
    }

    alert(`El resultado de la operación "${operacion}" es: ${resultado}`);
    console.log(`Números ingresados: ${numeros}`);
    console.log(`Resultado: ${resultado}`);
}
