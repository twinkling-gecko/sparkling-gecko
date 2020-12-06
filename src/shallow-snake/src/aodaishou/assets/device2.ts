export default {
  name: 'Device2',
  image:
    'https://cdn.discordapp.com/attachments/672180722684919814/785119032738447376/IMG_20201206_210631.jpg',
  graphInfos: [
    {
      title: 'Remaing amount',
      data: {
        labels: ['DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5', 'DAY6', 'DAY7'],
        datasets: [
          {
            label: 'Line Dataset',
            data: [180, 150, 120, 120, 100, 80, 40],
            borderColor: '#3498db',
            fill: false,
            type: 'line',
            lineTension: 0.3,
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Days',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'residual quantity[g]',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 50,
              },
            },
          ],
        },
      },
    },
    {
      title: 'Use',
      data: {
        labels: ['DAY1', 'DAY2', 'DAY3', 'DAY4', 'DAY5', 'DAY6', 'DAY7'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [0, 30, 30, 0, 20, 20, 40],
            backgroundColor: 'rgba(24, 188, 156, 0.2)',
            borderColor: 'rgba(24, 188, 156, 1)',
            fill: false,
            lineTension: 0.3,
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Days',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'residual quantity[g]',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 50,
              },
            },
          ],
        },
      },
    },
  ],
}
