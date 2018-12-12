<template>
  <div>
    <b-row>
      <b-col
        sm="6"
        lg="3"
        class="p-1"
      >
        <b-card class="text-white bg-primary card water">
          <div class="h4 m-0 ">Water <span>Last week: {{ totalWater }}</span></div>
          <b-progress
            height={}
            class="progress-xs my-3"
            variant="primary"
            animated
            v-bind:value="water"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
        class="p-1"
      >
        <b-card class="text-white bg-warning card power ">
          <div class="h4 m-0">Power <span>Last week: {{ totalPower }} </span> </div>
          <b-progress
            height={}
            class=" progress-xs my-3"
            variant="warning"
            animated
            v-bind:value="power"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
        class="p-1"
      >
        <b-card class="text-white bg-danger card heat">
          <div class="h4 m-0">Heat <span>Last week: {{ totalHeat }}</span> </div>
          <b-progress
            height={}
            class=" progress-xs my-3"
            variant="danger"
            animated
            v-bind:value="heat"
          />
        </b-card>
      </b-col>
      <b-col
        sm="6"
        lg="3"
        class="p-1"
      >
        <b-card class="text-white bg-success card costs">
          <div class="h4 m-0">Total costs <span>{{ totalCosts }} </span></div>
          <b-progress
            height={}
            class="progress-xs my-3"
            variant="success"
            animated
            v-bind:value="costs"
          />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

const URL = process.env.VUE_APP_NODE_SERVER_URL + "/business/data";

export default {
  name: "widgets",
  data() {
    return {
      totalWater: "",
      totalPower: "",
      totalHeat: "",
      totalCosts: "",
      water: 0,
      power: 0,
      heat: 0,
      costs: 25
    };
  },
  mounted() {
    axios
      .get(URL)
      .then(result => {
        let {
          water: waterConsumption,
          power: powerConsumption,
          heat,
          costs: moneyCosts
        } = result.data;

        this.water = waterConsumption / 1300;
        this.totalWater = `${(waterConsumption / 100).toPrecision(5)} hl`;

        this.totalPower = `${(powerConsumption / 1000).toPrecision(5)} Kwh`;
        this.power = powerConsumption / 10080;

        this.totalHeat = `${heat.toPrecision(4)} ℃`;
        this.heat = heat;

        this.totalCosts = `${(moneyCosts / 1000).toPrecision(5)} tys. zl`;
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

<style lang="scss" scoped>
.card {
  background-repeat: no-repeat;
  background-position: top right;
  box-shadow: 0 0 4px 0.5px rgba(0, 0, 0, 0.4);

  &.water {
    background-image: url("../assets/img/drops.svg");
  }

  &.power {
    background-image: url("../assets/img/current.svg");
  }

  &.heat {
    background-image: url("../assets/img/heat.svg");
  }

  &.costs {
    background-image: url("../assets/img/costs.svg");
  }

  span {
    font-size: 13px;
  }
}
</style>