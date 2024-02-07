var GlobalName;
var GlobalMensage;

function ConfirmZapMensage(){
    var name = document.getElementById("ct_name").value;
    var mensage = document.getElementById("ct_mensage").value;
    console.log(name,mensage)

    GlobalName = name;
    GlobalMensage = mensage;

    document.getElementById("ConfirmName").textContent = GlobalName;
    document.getElementById("ConfirmMensage").textContent = GlobalMensage;

}