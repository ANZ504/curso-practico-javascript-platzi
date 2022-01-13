//Square code


function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}


//Triangle Code


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function alturaTrianguloIsoceles(lado1,lado2,base) {
    if (lado1 === lado2 && lado1 != base ) {
        const resultadoIso = Math.sqrt(lado1*lado2-(base**2/4));
        return alert("Si es isoceles y la respuesta es: " + resultadoIso.toFixed(4));
    }
    else {
        alert("No es isoceles");
    }
}
//Prices and discount 
function priceAndDiscounts(price,discount) {
    const descuento =  ((price * discount)/100);
    const precioFinal =  price - descuento;
    alert("El precio de tu producto es: " + price);
    return alert("Tu descuento es de: " + descuento + " Y tu precio final es de: " + precioFinal);

}
// Circle Code


function diametroCirculo(radio) {
    return radio * 2;
}

function areaCirculo(radio) {
    return Math.PI * radio ** 2;
}

function perimetroCirulo(radio) {
    return diametroCirculo(radio) * Math.PI;
}

//Interaction whith HTML
//Square Code
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resPerimetro = document.getElementById("Result");

    const perimetro = perimetroCuadrado(value);
    resPerimetro.innerHTML = "El perimetro es: " + perimetro.toFixed(2) + " cm";


}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resArea = document.getElementById("Result");

    const area = areaCuadrado(value);

    resArea.innerHTML = "El area es: " + area.toFixed(2) + " cm";

}
//Triangle Code
function calcularPerimetroTriangulo() {
    //Traer el evento
    const inputSideA = document.getElementById("inputSideA");
    const inputSideB = document.getElementById("inputSideB");
    const inputBase = document.getElementById("inputBase");

    const a = parseInt(inputSideA.value);
    const b = parseInt(inputSideB.value);
    const base = parseInt(inputBase.value);

    const resPerimetro = document.getElementById("triangleResult");

    const perimetro = perimetroTriangulo(a, b, base);

    resPerimetro.innerHTML = "El perimetro es" + perimetro + "cm";
}

function calcularAreaTriangulo() {
    const inputHeight = document.getElementById("inputHeight");
    const inputBase = document.getElementById("inputBase");

    const height = parseInt(inputHeight.value);
    const base = parseInt(inputBase.value);

    const resArea = document.getElementById("triangleResult");

    const perimetro = areaTriangulo(base, height);

    resArea.innerHTML = "El perimetro es" + perimetro + "cm";
}