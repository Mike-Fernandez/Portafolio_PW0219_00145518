window.onload = () =>{
    var eventos = document.forms.journal;
    var form = document.getElementsByName("form");
    form.addEventListener("submit",addEvent);

    function addEvent(){
        console.log("hi");
    }
}
