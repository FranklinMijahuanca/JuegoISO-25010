var numeroTotalAprovadosCaracteristicas = sessionStorage.getItem("AprovadoTotalCaracteristicas") != null ? sessionStorage.getItem("AprovadoTotalCaracteristicas") : 0;
var numeroTotalDesaprovadosCaracteristicas = sessionStorage.getItem("DesaprovadoTotalCaracteristicas") != null ? sessionStorage.getItem("DesaprovadoTotalCaracteristicas") : 0;
var nuemeroTotalAprovadosSubCaracteristicas = sessionStorage.getItem("AprovadoTotalSubCaracteristicas") != null ? sessionStorage.getItem("AprovadoTotalSubCaracteristicas") : 0;
var nuemeroTotalDesaprovadoSubcaracteristicas = sessionStorage.getItem("DesaprovadoTotalSubCaracteristicas") != null ? sessionStorage.getItem("DesaprovadoTotalSubCaracteristicas") : 0;
var numeroTotalProguntas = parseInt(nuemeroTotalDesaprovadoSubcaracteristicas) + parseInt(nuemeroTotalAprovadosSubCaracteristicas) + parseInt(numeroTotalDesaprovadosCaracteristicas) + parseInt(numeroTotalAprovadosCaracteristicas);
var totalAprovados = parseInt(numeroTotalAprovadosCaracteristicas) + parseInt(nuemeroTotalAprovadosSubCaracteristicas)
var notaTotal = 20 * totalAprovados / numeroTotalProguntas
$(document).ready(function () {
    var caracteristica = document.getElementById("caracteristicas");
    var caracteristicas = new Chart(caracteristica, {
        type: 'pie',
        data: {
            labels: ["Aprobados", "Desaprobados"],
            datasets: [{
                data: [numeroTotalAprovadosCaracteristicas, numeroTotalDesaprovadosCaracteristicas],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }]
        },

    });
    var subCaracteristica = document.getElementById("Subcaracteristicas");
    var caracteristicas = new Chart(subCaracteristica, {
        type: 'pie',
        data: {
            labels: ["Aprobados", "Desaprobados"],
            datasets: [{
                data: [nuemeroTotalAprovadosSubCaracteristicas, nuemeroTotalDesaprovadoSubcaracteristicas],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }]
        },

    });
    var total = document.getElementById("total");
    var totalChart = new Chart(total, {
        type: 'bar',
        data: {
            labels: ["Total Aprobados", "Total Desaprobados"],
            datasets: [{
                label: '# de preguntas',
                data: [(parseInt(nuemeroTotalAprovadosSubCaracteristicas) + parseInt(numeroTotalAprovadosCaracteristicas)), parseInt(numeroTotalDesaprovadosCaracteristicas) + parseInt(nuemeroTotalDesaprovadoSubcaracteristicas)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }]
        },

    });
    $("#notaTotal").text(notaTotal)
})