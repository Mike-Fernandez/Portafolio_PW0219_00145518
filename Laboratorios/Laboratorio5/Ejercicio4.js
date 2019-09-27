//Ejercicio 4
function getRand(){
    flag = false;
    array = [Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100),
            Math.floor(Math.random()*100),Math.floor(Math.random()*100)];
    let guess = window.prompt("Trate de adivinar un número del arreglo: ");
    for(number of array){
        if(number == guess){
            flag = true;
        }
    }
    if(flag){
        alert("Felicidades, ha ganado")
    } else{
        alert("You lose, your guess: " + guess)
    }
}