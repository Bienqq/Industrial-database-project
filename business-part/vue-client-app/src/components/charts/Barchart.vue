

<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Water Usage",
          backgroundColor: "#007bff",
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },
        {
          label: "Current Usage",
          backgroundColor: "#ffc107",
          data: [10, 44, 22, 42, 12, 1, 55, 41, 98, 10, 19, 56]
        }
      ]
    });
  }
};
</script>

<style>
</style>
