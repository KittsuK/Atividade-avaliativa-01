var GlobalName;
var GlobalMensage;
const popup = document.querySelector(".popup-wrapper")

function ConfirmZapMensage(){
    var name = document.getElementById("ct_name").value;
    var mensage = document.getElementById("ct_mensage").value;
    console.log(name,mensage,"variavel")

    GlobalName = name;
    GlobalMensage = mensage;

    document.getElementById("ConfirmName").textContent = GlobalName;
    document.getElementById("ConfirmMensage").textContent = GlobalMensage;
    console.log(GlobalName, GlobalMensage,"global")
}

function SendZap(){
    var phoneNumber = "5541997758995"

    var linkZap = "https://wa.me/" + phoneNumber + "?text=Nome: " + GlobalName + " - " + GlobalMensage;

    window.open(linkZap, "_blank")
}
