<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'chart',
  data() {
    return {
      data: {
        labels: ['1日', '2日', '3日', '4日', '5日', '6日', '7日'],
        datasets: [
          {
            label: 'Line Dataset',
            data: [600, 569, 520, 455, 444, 400, 369],
            borderColor: '#CFD8DC',
            fill: false,
            type: 'line',
            lineTension: 0.3,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '日数',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '残量[g]',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 50,
              },
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  },
}
</script>
