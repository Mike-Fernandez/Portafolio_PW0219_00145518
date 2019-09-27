//Ejercicio 9
function circle(){
    var radius = window.prompt("Ingrese el radio de su circulo: ")
    if(radius <= 0){
        return -1
    } else{
        let area = Math.PI*Math.pow(radius,2);
        return area;
    }
}