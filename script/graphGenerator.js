function definirCorCoeficiente(x) {
    if (x < 18)
        return ` <span style='float:right' class='bom'>` + Math.floor(x) + `</span>`
    if (x >= 18 && x < 25)
        return `<span style='float:right' class='medio'>` + Math.floor(x) + `</span>`
    if (x > 25)
        return `<span style='float:right' class='ruim'>` + Math.floor(x) + `</span>`
}
i=0;
/** 
 *  @string idDiv: código ISO 3166 para as bandeiras dos países
 *  @intArray benfordData: um array de tamanho 9 que armazena os primeiros digitos das mortes de cada país no formato [(quantidadeNumeros1),(quantidadeNumeros2)...(quantidadeNumeros9)]
 *  @string countryColor: cor RGB dominante da bandeira do país em questão
 *  @string nomePais: nome do país
 *  @int coeficiente: coeficiente de similaridade
 */
function gerarGrafico(idDiv, benfordData, countryColor, nomePais, coeficiente) {i++
    if (nomePais == undefined)
        nomePais = ' ';
    document.querySelector('.benford').insertAdjacentHTML(
        'afterbegin',
        `<div class='grafico' id="`+nomePais+`">
        <img class='bandeiras' crossorigin="anonymous" src="https://countryflagsapi.com/png/` + idDiv + `">&nbsp;` + nomePais + `` + definirCorCoeficiente(coeficiente) + `
        <canvas id="` + idDiv + `" width="350" height="300"></canvas>
        </div>`
    )
    var ctx = document.getElementById(idDiv).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets: [{
                    label: 'Aplicação da Lei de Benford (%)',
                    data: benfordData,
                    backgroundColor: [
                        'rgba(' + countryColor + ', 0.2)',
                    ],
                    borderColor: [
                        'rgba(' + countryColor + ', 1)',
                    ],
                    borderWidth: 1
                },
                {
                    data: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
                    label: 'Proporção de Benford (%)',

                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 60
                    }
                }]
            }
        }
    });
}