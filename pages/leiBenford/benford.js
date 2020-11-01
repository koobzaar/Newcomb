document.querySelector('.benford').insertAdjacentHTML(
    'afterbegin',
    `<div class='graficoLeiBenford'">
    <canvas id="aaa" width="300" height="300"></canvas>
    </div>`
)
var ctx = document.getElementById('aaa').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Prob. dig. 1', 'Prob. dig. 2', 'Prob. dig. 3', 'Prob. dig. 4', 'Prob. dig. 5', 'Prob. dig. 6', 'Prob. dig. 7', 'Prob. dig. 8', 'Prob. dig. 9'],
        datasets: [{
                label: 'Lei de Benford',
                data: [30.1, 17.6, 12.5, 9.7, 7.9, 6.7, 5.8, 5.1, 4.6],
                backgroundColor: [
                    'rgba(0,173,168, 0.2)',
                ],
                borderColor: [
                    'rgba(0,173,168, 1)',
                ],
                borderWidth: 1
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