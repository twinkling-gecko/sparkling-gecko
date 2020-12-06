<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: 'chart',
  data() {
    return {
      data: {
        labels: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
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
                labelString: '月',
              },
            },
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '消費量[g]',
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
