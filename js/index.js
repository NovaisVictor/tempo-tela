
// setup
const data = {
    labels: ["tela", "Atividade física", "Estudo", "Tempo em família", "tempo de tédio", "Sono", "Escola / Trabalho", "Tempo livre", "Higiene pessoal", "Refeicoes", "Outro 1", "Outro 2"],
    datasets: [{
        label: "My First dataset",
        data: [24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
            'rgb(34, 197, 214)', '#EE5151', '#FC22E6', '#589AEF', '#FC8F22', '#D23689', '#7058EF', '#FCC922', '#CD40EF',
            '#CEEB09', '#883260', '#FF8EB8'
        ],
    }]
}

// const barAvatar = {
//     id: 'barAvatar',
//     beforeDraw(chart, args, options) {
//         const { ctx, chartArea: { top, bottom, left, right, width, height },
//             scales: { x, y } } = chart;
//         ctx.save();

//         ctx.drawImage(img1, 522,  122, 60, 60);
//         // ctx.drawImage(img1, 12,  12, 30, 30);
//     }
// }


// config
const config = {
    type: 'pie',
    data,
    options: {
        plugins: {
            legend: {
                display: false,
                position: 'bottom'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        },
        legend: {
            display: false,
            position: 'bottom'
        },
        title: {
            display: false,
            text: 'Sales by Months',
            fontSize: 20
        },
        tooltips: {
            enebled: true,
            intersect: true,
            backgroundColor: 'rgba(41, 128, 185,0.8)'
        },
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 0.5,
                max: 24,
                min: 0,
                precision: 0
            }
        }],
    },
    // plugins: [barAvatar]
};

// render init block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


tela = document.getElementById("0")
tela.value = console.log(myChart.data.datasets[0].data[0])

const addValue = (data) => {
    if (myChart.data.datasets[0].data[data] < 24 && myChart.data.datasets[0].data[0] >= 0) {
        myChart.data.datasets[0].data[data] = myChart.data.datasets[0].data[data] + 0.5
        myChart.data.datasets[0].data[0] = myChart.data.datasets[0].data[0] - 0.5
        myChart.update()
    }

    input = document.getElementById(data)
    tela = document.getElementById("0")
    tela.value = myChart.data.datasets[0].data[0]
    input.value = myChart.data.datasets[0].data[data]
}

function removeValue(data) {
    if (myChart.data.datasets[0].data[data] > 0) {
        myChart.data.datasets[0].data[data] = myChart.data.datasets[0].data[data] - 0.5
        myChart.data.datasets[0].data[0] = myChart.data.datasets[0].data[0] + 0.5
        myChart.update()
    }

    input = document.getElementById(data)
    tela = document.getElementById("0")
    tela.value = myChart.data.datasets[0].data[0]
    input.value = myChart.data.datasets[0].data[data]
    input.document.inn
}

// chart.canvas.parentNode.style.height = '50em';
// chart.canvas.parentNode.style.width = '50em';
window.addEventListener('beforeprint', () => {
    myChart.resize(600, 600);
});
window.addEventListener('afterprint', () => {
    myChart.resize();
});