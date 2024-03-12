let dist, km, tempo,carro,climaRuim,chuva;

if (dist > 5){
    carro = true;
} 

if (dist > 1 && tempo < 15){
    carro = true;
}

if (dist > 1 && tempo > 15){
    carro = false;
}

if (carro == true && cinema == true){
    carro = false;
    taxi = true;
}

if (carro == true && cinema == false){
    carro = true;
}

if (carro == false && climaRuim == true){
    chuva = true;
}

if (carro == false && climaRuim == false){
    console.log("ritmo de passeio")
}