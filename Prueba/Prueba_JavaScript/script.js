function hi(){
    console.log("Hola");
} 
hi();

function odd(number){
    if(number%2 == 0){
        return false;
    } else if (number%2 != 0){
        return true;
    }
}

var greeting = (name = "Miguel") => {
    console.log("Hola $()")
}

function output(amount){
    let cadena = ''
    for(let i = 0; i < amount; i++){
        console.log()
    }
}