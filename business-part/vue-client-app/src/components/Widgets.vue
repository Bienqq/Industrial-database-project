<template>
  <div>
    <b-row>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-primary card water">
          <div class="h4 m-0 ">Water</div>
          <b-progress height={} class="progress-xs my-3" variant="primary" animated v-bind:value="water" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-warning card power ">
          <div class="h4 m-0">Power </div>
          <b-progress height={} class=" progress-xs my-3" variant="warning" animated v-bind:value="power" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-danger card heat">
          <div class="h4 m-0">Heat </div>
          <b-progress height={} class=" progress-xs my-3" variant="danger" animated v-bind:value="heat" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-success card costs">
          <div class="h4 m-0">Total costs</div>
          <b-progress height={} class="progress-xs my-3" variant="success" animated  v-bind:value="costs" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "widgets",

  data() {
    return {
      water: 33,
      power: 10,
      heat: 66,
      costs: 88
    };
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
}
</style>