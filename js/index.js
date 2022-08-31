let ctx = document.getElementById('chart').getContext('2d');
Chart.defaults.set('plugins.datalabels', {
    color: '#FE777B'
  });
  Chart.defaults.font.family = "'FontAwesome', 'Helvetica Neue', 'Helvetica"
  Chart.defaults.font.size = 32;
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',
    // The data for our dataset
    data: {
        labels: ['\uf779', "Atividade física", "Estudo", "Tempo em família", "tempo de tédio", "Sono", "Escola / Trabalho", "Tempo livre", "Higiene pessoal", "Refeicoes", "Outro 1", "Outro 2"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                '#22C4DE', '#EE5151', '#FC22E6', '#589AEF', '#FC8F22', '#D23689', '#7058EF', '#FCC922', '#CD40EF',
          '#CEEB09', '#883260', '#FF8EB8'
            ],
            data: [24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }]
    },
    // Configuration options go here
    plugins: [ChartDataLabels],
    options: {
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                formatter: (value, context) => {
                    if(value < 1) {
                        return ''
                    }
                    return '';
                },
              },
        },
        animation : {
            duration : 2000,
            easing : 'easeOutBounce'
        },
        layout : {
            padding : {
                left : 10,
                right : 10,
                top : 10,
                bottom : 10
            }
        },
        legend : {
            display : false,
            position : 'bottom'
        },
        title : {
            display : false,
            text : 'Sales by Months',
            fontSize : 20
        },
        tooltips : {
            enabled : true,
            intersect : true,
            backgroundColor : 'rgba(41, 128, 185,0.8)'
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
    }
});
tela = document.getElementById("0")
tela.value = chart.data.datasets[0].data[0]

const addData = () => {
    let sizeData = chart.data.datasets[0].data.length
    chart.data.datasets[0].data[sizeData] = Math.random() * 100
    chart.data.labels[sizeData] = `New Data ${sizeData + 1}`
    chart.update()
}

const removeData = () => {
    chart.data.datasets[0].data.pop()
    chart.data.labels.pop()
    chart.update()
}

const addValue = (data) => {
    if (chart.data.datasets[0].data[data] < 24 && chart.data.datasets[0].data[0] >= 0) {
        chart.data.datasets[0].data[data] = chart.data.datasets[0].data[data] + 0.5
        chart.data.datasets[0].data[0] = chart.data.datasets[0].data[0] - 0.5
        chart.update()
    }
    
    input = document.getElementById(data)
    tela = document.getElementById("0")
    tela.value = chart.data.datasets[0].data[0]
    input.value = chart.data.datasets[0].data[data]
}

function removeValue(data) {
    if (chart.data.datasets[0].data[data] > 0) {
        chart.data.datasets[0].data[data] = chart.data.datasets[0].data[data] - 0.5
        chart.data.datasets[0].data[0] = chart.data.datasets[0].data[0] + 0.5
        chart.update()
    }
    
    input = document.getElementById(data)
    tela = document.getElementById("0")
    tela.value = chart.data.datasets[0].data[0]
    input.value = chart.data.datasets[0].data[data]
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