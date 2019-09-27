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