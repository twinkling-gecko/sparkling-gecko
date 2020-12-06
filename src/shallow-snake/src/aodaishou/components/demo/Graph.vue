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
            label: 'Bar Dataset',
            data: [500, 350, 0, 500, 350, 1000, 400],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
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
                labelString: '日数',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '消費量[ml]',
              },
              ticks: {
                beginAtZero: true,
                stepSize: 100,
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
