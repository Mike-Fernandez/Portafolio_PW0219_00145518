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