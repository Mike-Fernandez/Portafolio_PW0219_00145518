// Ejercicio 1
var arr = [1,"hola",3,true,[1,2,3],"hola2"];

var funcion = x => {
    let typeArr =[];
    let counts = {};

    x.forEach(element => {
        typeArr.push(typeof element);
    });

    typeArr.forEach(element=>{
        counts[element] = (counts[element] || 0) +1;
    });

    console.log(typeArr);
    console.log(counts);
}


//Ejercicio 2
function arithmetic(arr){
    let sum = 0;
    let avg;
    for(r of arr){
        sum+=r;
    }
    console.log('SUM ' + sum);
    console.log('AVG ' + sum/arr.length)
}

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

//Ejercicio 5
function palindrome(word){
    var re = /[\W_]/g;
    let temp = word.replace(re,'');
    let split = temp.split('');
    let reverse = split.reverse().join('');
    if(reverse == temp){
        return true;
    }else{
        return false;
    }
}

//Ejercicio 6
function reorder(array){
    let menor = array[0];
    let aux;
    for(let i = 0; i < array.length -1; i++){
        if(menor < array[i+1]){
            aux = array[i+1];
            array[i+1] = menor;
            array[i] = aux;
        }
    }
    console.log(array);
}
