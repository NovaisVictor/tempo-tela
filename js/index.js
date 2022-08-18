let ctx = document.getElementById('chart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Roboto'

let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',
    // The data for our dataset
    data: {
        labels: ["tela", "Ativi física", "Estudo", "Temp família", "tempo tedio", "Sono", "Escola / Trabalho", "Tempo livre", "Higiene pessoal", "Refeicoes"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: [
                '#22C4DE', '#EE5151', '#FC22E6', '#589AEF', '#FC8F22', '#D23689', '#7058EF', '#FCC922', '#CD40EF',
          '#CEEB09'
            ],
            data: [24, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        }]
    },
    // Configuration options go here
    options: {
        animation : {
            duration : 2000,
            easing : 'easeOutBounce'
        },
        layout : {
            padding : {
                left : 20,
                right : 20,
                top : 20,
                bottom : 20
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
                stepValue: 5,
                max: 24,
                min: 0
            }
        }],
    }
});

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
    chart.data.datasets[0].data[data] = chart.data.datasets[0].data[data] + 1
    chart.data.datasets[0].data[0] = chart.data.datasets[0].data[0] - 1
    chart.update()
    num = 0
    input = document.getElementById(data)
    input.value= num++
}

function removeValue(data) {
    chart.data.datasets[0].data[data] = chart.data.datasets[0].data[data] - 1
    chart.data.datasets[0].data[0] = chart.data.datasets[0].data[0] + 1
    chart.update()
}