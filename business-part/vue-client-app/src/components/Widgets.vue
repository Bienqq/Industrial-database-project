<template>
  <div>
    <b-row>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-primary water">
          <div class="h4 m-0 ">Water</div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="value" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-warning power">
          <div class="h4 m-0">Power </div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="value" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-danger heat">
          <div class="h4 m-0">Heat </div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="value" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-success costs">
          <div class="h4 m-0">Total costs</div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="value" />
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
      value: 33
    };
  }
};
</script>

<style>
.water {
  background-image: url("../assets/img/drops.svg");
  background-repeat: no-repeat;
  background-position: top right;
}
.power {
  background-image: url("../assets/img/current.svg");
  background-repeat: no-repeat;
  background-position: top right;
}
.heat {
  background-image: url("../assets/img/heat.svg");
  background-repeat: no-repeat;
  background-position: top right;
}
.costs {
  background-image: url("../assets/img/costs.svg");
  background-repeat: no-repeat;
  background-position: top right;
}


</style>