//Ejercicio 6
function reorder(array){
    let aux;
    for(let i = 0; i < array.length -1; i++){
        let menor = array[i];
        if(menor > array[i+1]){
            aux = array[i+1];
            array[i+1] = menor;
            array[i] = aux;
        }
    }
    for(let i = 0; i<array.length-1;i++){
        menor = array[i]
        if(menor > array[i+1]){
            reorder(array);
        }
    }
    console.log(array);
}


