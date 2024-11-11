//let from = document.querySelector("from");
let btn = document.getElementById("#nombre");
let lblerror = document.querySelector(".error");
btn.addEventListener("click", async function (e) {
    let descr = document.getElementById("#descripcion")
    if (descr.checkValidity()) {
        lblerror.textContent = "";
        let json = { descripcion = descripcion.value, nombre=nombre.value };
        let result = await fetch("api/Area", {
            method: "post",
            body: JSON.stringify(json),
            headers: {
                "Content-Type": "aplication/json"
            }
        });
        if (result.ok) {
            window.location.replace("Admin/Index");

        }
        else if (result.status == 400) {
            lblerror.textContent = "Verifique el mensaje";
        }
    }
    else {
        descr.reportValidity();

    }
});
