

<script>
import { Bar } from "vue-chartjs";
import axios from "axios";

const URL =
  process.env.VUE_APP_NODE_SERVER_URL + "/business/consumption-charts";

export default {
  extends: Bar,
  mounted() {
    axios
      .get(URL)
      .then(result => {
        const { water, heat } = result.data;

        for (let i = 0; i < water.length; i++) {
          water[i] = (water[i] / 100).toPrecision(4);
          heat[i] = (heat[i] / 1000).toPrecision(4);
        }

        this.renderChart({
          labels: [
            "6 days ago",
            "5 days ago",
            "4 days ago",
            "3 days ago",
            "2 days ago",
            "yesterday",
            "today"
          ],
          datasets: [
            {
              label: "Water usage [hl] ",
              backgroundColor: "#007bff",
              data: water
            },
            {
              label: "Current usage [kWh] ",
              backgroundColor: "#ffc107",
              data: heat
            }
          ]
        });
      })
      .catch(error => {
        this.$toasted.show(error, {
          theme: "toasted-primary",
          position: "bottom-center",
          duration: 1500,
          type: "error",
          icon: "error_outline"
        });
      });
  }
};
</script>

<style>
</style>
