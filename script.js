let dist = prompt("Digite a distância em KM:")
let tempo = prompt("Digite o tempo percorrido:")
let cinema = prompt("O cinema fica na cidade? (true/false)");
let climaRuim = prompt("O clima está ruim? (true/false)");

if (dist > 5){
    carro = true;
    console.log(carro)
} else if (dist > 1 && tempo < 15){
    carro = true;
    console.log(carro)
} else if (dist > 1 && tempo > 15){
    carro = false;
    console.log(carro)
}

if (carro == true){
    if (cinema == true){
        carro = false;
        taxi = true;
        console.log(carro, taxi)
    } else {
        carro = true;
        console.log(carro)
    }
} else {
    if (climaRuim == true) {
        chuva = true;
        console.log(chuva)
    } else {
        console.log("ritmo de passeio")
    }
}
