//menu.addEventListener("click", async function (event) {
//    if (event.target.tagName == "A") {
//        let texto = event.target.textContent;
//        if (texto == "Eliminar") {
//            let id = menu.parentElement.dataset.id;
//            await fetch("api/pendientes/" + id, { method: "delete" });//elimina se tiene que hacer una confirmacion 
//            window.location.replace("/index");//NAVEGACION
//        }
//    }
//});