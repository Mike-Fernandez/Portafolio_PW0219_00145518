window.onload = () => {
    function makeVisible(day){
        let div = document.getElementById(day);
        if (div.style.display === "none") {
            div.style.display = "block";
          } else {
            div.style.display = "none";
          }
        console.log(bLunes);
    }

    let lunes = document.getElementById("lunes")
    lunes.style.display = "none";
    let martes = document.getElementById("martes")
    martes.style.display = "none";
    let miercoles = document.getElementById("miercoles")
    miercoles.style.display = "none";
    let jueves = document.getElementById("jueves")
    jueves.style.display = "none";
    let viernes = document.getElementById("viernes")
    viernes.style.display = "none";

    var bLunes = document.querySelector("#bLunes")
    var bMartes = document.querySelector("#bMartes");
    var bMiercoles = document.querySelector("#bMiercoles");
    var bJueves = document.querySelector("#bJueves");
    var bViernes = document.querySelector("#bViernes");

    bLunes.addEventListener("click",function(){makeVisible("lunes")});
    bMartes.addEventListener("click",function(){makeVisible("martes")});
    bMiercoles.addEventListener("click",function(){makeVisible("miercoles")});
    bJueves.addEventListener("click",function(){makeVisible("jueves")});
    bViernes.addEventListener("click",function(){makeVisible("viernes")});

}
