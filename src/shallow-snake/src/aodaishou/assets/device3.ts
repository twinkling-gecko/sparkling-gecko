export default {
  name: 'Device3',
  graphInfos: [
    {
      title: 'Detargent',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [
              1150,
              1100,
              1100,
              1000,
              1000,
              1000,
              2000,
              1800,
              1500,
              1200,
              1000,
              1000,
            ],
            backgroundColor: 'rgba(24, 188, 156, 0.2)',
            borderColor: 'rgba(24, 188, 156, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'use[g]',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 100,
              },
            },
          ],
        },
      },
    },
  ],
}
