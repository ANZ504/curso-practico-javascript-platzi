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

function alturaTrianguloIsoceles(lado1, lado2, base) {
    if (lado1 === lado2 && lado1 != base) {
        const resultadoIso = Math.sqrt(lado1 * lado2 - (base ** 2 / 4));
        return alert("Si es isoceles y la respuesta es: " + resultadoIso.toFixed(4));
    } else {
        alert("No es isoceles");
    }
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
    const input = document.getElementById("inputSideSquare");
    const value = input.value;
    const resPerimetro = document.getElementById("result");

    const perimetro = perimetroCuadrado(value);
    resPerimetro.innerHTML = "El perimetro es: " + perimetro.toFixed(2) + " cm";

}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputSideSquare");
    const value = input.value;
    const resArea = document.getElementById("result");

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
//Circle Code
function calcularAreaCirculo() {
    const inputRatio = document.getElementById("inputRatio");
    const valueRatio = inputRatio.value;

    const resArea = document.getElementById("pResult");

    const area = areaCirculo(valueRatio);

    resArea.innerHTML = "El area es de : " + area.toFixed(2) + " cm";
}

function calcularPerimetroCirculo() {
    const inputRatio = document.getElementById("inputRatio");
    const valueRatio = inputRatio.value;

    const resPerimeter = document.getElementById("pResult");

    const diametro = diametroCirculo(valueRatio);

    const perimetro = diametro * Math.PI;

    resPerimeter.innerHTML = "El perimetro es de : " + perimetro.toFixed(2) + " cm";
    


}
//Price and DIscount Calculate 
//Prices and discount 
function priceAndDiscounts(price, discount) {
    const descuento = ((price * discount) / 100);
    const precioFinal = price - descuento;


    return precioFinal;

}

function calculateCoupon() {
    const cupons = [5, 25, 50];
    const cupon = document.getElementById("coupon");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else {
        return 0
    }
}

function calculatePriceAndDiscount() {

    const inputPrice = document.getElementById("inputPrice");
    const inputPercent = document.getElementById("inputPercent");
    const resPrice = document.getElementById("priceFinalResult");

    const valuePrice = inputPrice.value;
    const valuePercent = inputPercent.value;

    const price = priceAndDiscounts(valuePrice, valuePercent);
    const coupon = (price * calculateCoupon()) / 100;

    const finalPrice = price - coupon;
    resPrice.innerHTML = "Total: $" + finalPrice;
    

}
