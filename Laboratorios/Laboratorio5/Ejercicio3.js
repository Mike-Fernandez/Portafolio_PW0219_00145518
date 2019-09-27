//Ejercicio 3
function count(number, array){
    let counter = 0;
    for(e of array){
        if(e == number){
            counter++;
        }
    }
    console.log(counter);
}