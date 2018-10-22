var numeroTotalAprovadosCaracteristicas = sessionStorage.getItem("AprovadoTotalCaracteristicas") != null ? sessionStorage.getItem("AprovadoTotalCaracteristicas") : 0;
var numeroTotalDesaprovadosCaracteristicas = sessionStorage.getItem("DesaprovadoTotalCaracteristicas") != null ? sessionStorage.getItem("DesaprovadoTotalCaracteristicas") : 0;
var nuemeroTotalAprovadosSubCaracteristicas = sessionStorage.getItem("AprovadoTotalSubCaracteristicas") != null ? sessionStorage.getItem("AprovadoTotalSubCaracteristicas") : 0;
var nuemeroTotalDesaprovadoSubcaracteristicas = sessionStorage.getItem("DesaprovadoTotalSubCaracteristicas") != null ? sessionStorage.getItem("DesaprovadoTotalSubCaracteristicas") : 0;
var numeroTotalProguntas = parseInt(nuemeroTotalDesaprovadoSubcaracteristicas) + parseInt(nuemeroTotalAprovadosSubCaracteristicas) + parseInt(numeroTotalDesaprovadosCaracteristicas) + parseInt(numeroTotalAprovadosCaracteristicas);
var totalAprovados = parseInt(numeroTotalAprovadosCaracteristicas) + parseInt(nuemeroTotalAprovadosSubCaracteristicas)
var notaTotal =  Math.round(20 * totalAprovados / numeroTotalProguntas) 
$(document).ready(function () {
    var caracteristica = document.getElementById("caracteristicas");
    var caracteristicas = new Chart(caracteristica, {
        type: 'pie',
        data: {
            labels: ["Aprobados", "Desaprobados"],
            datasets: [{
                data: [numeroTotalAprovadosCaracteristicas, numeroTotalDesaprovadosCaracteristicas],
                backgroundColor: [
                    'rgba(59, 94, 252, 1)',
                    'rgba(76, 193, 220, 1)',
                ],
                borderColor: [
                    'rgba(60, 61, 68, 1)',
                    'rgba(60, 61, 68, 1)'
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
                    'rgba(59, 94, 252, 1)',
                    'rgba(76, 193, 220, 1)',
                ],
                borderColor: [
                    'rgba(60, 61, 68, 1)',
                    'rgba(60, 61, 68, 1)'
                ]
            }]
        },

    });
/*
    var total = document.getElementById("total");
    var totalChart = new Chart(total, {
        type: 'bar',
        data: {
            labels: ["Total Aprobados", "Total Desaprobados"],
            datasets: [{
                label: '# de preguntas',
                data: [(parseInt(nuemeroTotalAprovadosSubCaracteristicas) + parseInt(numeroTotalAprovadosCaracteristicas)), parseInt(numeroTotalDesaprovadosCaracteristicas) + parseInt(nuemeroTotalDesaprovadoSubcaracteristicas)],
                backgroundColor: [
                    'rgba(59, 94, 252, 1)',
                    'rgba(76, 193, 220, 1)',
                ],
                borderColor: [
                    'rgba(60, 61, 68, 1)',
                    'rgba(60, 61, 68, 1)'
                ]
            }]
        },

    });*/   

    var total = document.getElementById("total");
    var TotalData = {
        label: 'Graficos de Respuestas',
        data: [(parseInt(nuemeroTotalAprovadosSubCaracteristicas) + parseInt(numeroTotalAprovadosCaracteristicas)), (parseInt(numeroTotalDesaprovadosCaracteristicas) + parseInt(nuemeroTotalDesaprovadoSubcaracteristicas)),0],
            backgroundColor: [
                'rgba(59, 94, 252, 1)',
                'rgba(76, 193, 220, 1)',
            ],
            borderColor: [
                'rgba(60, 61, 68, 1)',
                'rgba(60, 61, 68, 1)'
            ]
    };
    var totalChart = new Chart(total, {
        type: 'bar',
        data: {
            labels: ["Total Aprobados", "Total Desaprobados",""],
            datasets: [TotalData],
        }

    });

    $("#notaTotal").text(notaTotal)
})