//Ejercicio 7
function fibonacci(times){
    let first = 0;
    let second = 1;
    let fibo = [0,1];
    for(let i = 0; i < times ; i++){
        let third = first + second;
        first = second;
        second = third;
        fibo.push(third);
    }
    for(a of fibo){
        console.log(a);
    }
}