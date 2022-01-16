function game(opt) {
    
    let optMachine = Math.floor(Math.random() * (4 - 1)) + 1;
    if (
        opt === 1 && optMachine === 3 ||
        opt === 2 && optMachine === 1 ||
        opt === 3 && optMachine === 2 
       ) {
        console.log("Ganaste");
    }
    else if (opt === optMachine) {
        console.log("Empate");
    } else {
        console.log("Perdiste");
    }
}