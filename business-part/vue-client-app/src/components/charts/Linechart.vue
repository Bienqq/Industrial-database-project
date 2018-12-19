<script>
import { Line } from "vue-chartjs";
import axios from "axios";

const URL =
  process.env.VUE_APP_NODE_SERVER_URL + "/business/temperature-charts";

export default {
  extends: Line,
  data() {
    return {
      datacollection: null,
      t1out: 0,
      t2out: 0
    };
  },
  methods: {
    fillData() {
      this.datacollection = {
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
            label: "T1out [℃] ",
            borderColor: "red",
            type: "line",
            backgroundColor: "rgba(246, 74, 72, 0.7)",
            borderWidth: 2,
            data: this.t1out
          },
          {
            label: "T2out [℃] ",
            borderColor: "brown",
            backgroundColor: "rgba(180, 44, 44, 0.6)",
            borderWidth: 2,
            data: this.t2out
          }
        ]
      };
    }
  },
  mounted() {
    axios
      .get(URL)
      .then(response => {
        const { t1out, t2out } = response.data;
        this.t1out = t1out
        this.t2out = t2out
        this.fillData();
        this.renderChart(this.datacollection);
      })
      .catch(err => {
        this.$toasted.show(err, {
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
