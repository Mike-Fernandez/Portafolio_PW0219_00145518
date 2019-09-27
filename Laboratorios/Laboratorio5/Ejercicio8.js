//Ejercicio 8
function binary(number){
    var arr = [];
    var quotient = 0;
    var remainder = 0;
    if(number == 0){
        return 0;
    }
    while(number >= 1){
        quotient = number/2;
        remainder = number%2;
        if(remainder == 0){
            arr.push(0);
        } else {
            arr.push(1)
        }
        number = Math.trunc(quotient);
    }
    console.log(arr);
}