<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  name: 'chart',
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
