var ArrayPreguntas = sessionStorage.getItem("preguntasCaracteristicas") !== null ? JSON.parse(sessionStorage.getItem("preguntasCaracteristicas")) : JSON.parse(sessionStorage.getItem("preguntasSubcaracteristicas"))
var IconUltimo = $("span#ultimo");
var contadorArray = 0;
var template = $("div#respuesta");
var ArrayPreguntasDesarrolladas = [];
var numeroAleatorio = 0;
var icon = $("i#carita")
var numeroTotalAprovadosCaracteristicas = 0;
var numeroTotalDesaprovadosCaracteristicas = 0;
var numeroTotalAprovadosSubcaracteristicas = 0
var numeroTotalDesaprovadoSubcaracteristicas = 0
var aprobo = false;
var isCaracteristica = sessionStorage.getItem("preguntasCaracteristicas") !== null ? true : false;
$(document).ready(function () {
    if (isCaracteristica) {
        sessionStorage.removeItem("AprovadoTotalCaracteristicas")
        sessionStorage.removeItem("DesaprovadoTotalCaracteristicas")
    } else {

        sessionStorage.removeItem("AprovadoTotalSubCaracteristicas")
        sessionStorage.removeItem("DesaprovadoTotalSubCaracteristicas")
    }

    totalPreguntas()
    Preguntas()
    ClickBotonNext();
})
function clickInput() {
    $("input").on("click", function () {
        comparacion($("input:checked").val())
        $("input").not(this).attr("disabled",true);
    })
}
function Preguntas() {
    numeroAleatorio = 0;
    let buscado = true;

    do {

        numeroAleatorio = Math.floor(Math.random() * (ArrayPreguntas.length))

        if (contadorArray == ArrayPreguntas.length) {
            enabledButton()
            swal({
                type: "success",
                title: "Completo",
                text: "Completo todas las preguntas"
            })
            return;
        }
        if (!ArrayPreguntas[numeroAleatorio].isPreguntado) {
            buscado = false;
            contadorArray++;
            ArrayPreguntasDesarrolladas.push(numeroAleatorio)
            aumentarNumero(contadorArray)
            preguntaDom(ArrayPreguntas[numeroAleatorio].pregunta)

            $("p#respuesta").addClass("hide");
            ArrayPreguntas[numeroAleatorio].isPreguntado = true;
            agregarSeleccionado();
        }
    } while (buscado);
    template.html("")

    ArrayPreguntas[numeroAleatorio].posiblesRespuestas.forEach((elemento) => { agregarPreguntas(elemento) })

    clickInput()
}
function agregarSeleccionado() {
    if (IsChecked()) {
        ArrayPreguntas[numeroAleatorio].seleccionado = $("input:checked").val()

    }
}
function comparacion(valor) {

    if (valor == ArrayPreguntas[numeroAleatorio].respuesta) {
        icon.text("mood")
        EventoToast("Excelente")
        aprobo = true;
        if (sessionStorage.getItem("preguntasCaracteristicas") !== null) {
            isCaracteristica = true
        }
    } else {
        icon.text("mood_bad")
        EventoToast("Error")
        mensajeRespuesta(ArrayPreguntas[numeroAleatorio].respuesta)
    }

    if (aprobo && isCaracteristica) {
        numeroTotalAprovadosCaracteristicas++;
        sessionStorage.setItem("AprovadoTotalCaracteristicas", numeroTotalAprovadosCaracteristicas)
    } else if (!aprobo && isCaracteristica) {
        numeroTotalDesaprovadosCaracteristicas++;
        sessionStorage.setItem("DesaprovadoTotalCaracteristicas", numeroTotalDesaprovadosCaracteristicas)

    }
    if (aprobo && !isCaracteristica) {
        numeroTotalAprovadosSubcaracteristicas++;
        sessionStorage.setItem("AprovadoTotalSubCaracteristicas", numeroTotalAprovadosSubcaracteristicas)
        console.log("el numero total de AprovadosSub" + sessionStorage.getItem("AprovadoTotalSubCaracteristicas"))
    } else if (!aprobo && !isCaracteristica) {
        numeroTotalDesaprovadoSubcaracteristicas++;
        sessionStorage.setItem("DesaprovadoTotalSubCaracteristicas", numeroTotalDesaprovadoSubcaracteristicas)
        console.log("el numero total de AprovadosSub" + sessionStorage.getItem("DesaprovadoTotalSubCaracteristicas"))

    }
    aprobo = false;
    console.log(aprobo)

}
function ClickBotonNext() {
    $("i#next").on("click", function () {
        if (IsChecked()) {

            Preguntas();
        } else {
            swal({
                type: "error",
                title: "Respuesta",
                text: "Seleccione una respuesta"
            })
        }
    })
}

function mensajeRespuesta(respuesta) {
    $("p#respuesta").removeClass("hide");
    $("strong#respuesta").text(respuesta);
}
function IsChecked() {
    if ($("input").is(":checked")) {
        return true;
    }
    return false;
}
function enabledButton() {
    $("div.hide").removeClass("hide")
}
function agregarPreguntas(pregunta) {
    let template_pregunta = `<p><label><input class="with-gap" value="${pregunta}" name="group1" type="radio"/>
  <span>${pregunta}</span>
</label>
</p>`
    template.append(template_pregunta)

}
function preguntaDom(pregunta) {
    $("#pregunta").text(pregunta)
}
function EventoToast(html) {
    M.toast({ html: html, classes: "roundes" })
}
function aumentarNumero(numero) {
    $("span#numeroContador").text(numero)
}
function totalPreguntas() {
    IconUltimo.text(ArrayPreguntas.length)
}