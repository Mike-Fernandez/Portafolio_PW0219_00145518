var accidentSwitch = value => {
    if(value){
        return "Hubo un accidente";
    }
    return "Sin accidente";
}

function addEvent(acciones, accidente, tbody){
    let newDay = document.createElement("tr");
    let date = new Date();

   var actions = (acciones) => {
        for(let i = 0; i < acciones.length; i++){
            return acciones[i].concat(" ");
        }
    }

    newDay.innerHTML = `<td>${date.toLocaleString()}</td>
                        <td>${actions(acciones)}</td>
                        <td>${accidente}</td>`
    tbody.appendChild(newDay);
}

window.onload = () =>{
    let button = document.getElementById("submit_btn");
    let event_field = document.getElementById("event_field");
    let accSwitch = document.getElementById("accident_switch");
    let tbody = document.getElementById("table_body");

    button.addEventListener("click", function(){
        let string = event_field.value;
        let acciones = string.split(",");
        let accident = accidentSwitch(accSwitch.checked);

        addEvent(acciones,accident,tbody);
    })
}
