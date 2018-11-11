<template>
  <div>
    <b-row>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-primary">
          <div class="h4 m-0">Water </div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="value" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-warning">
          <div class="h4 m-0">Power </div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="value" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-danger">
          <div class="h4 m-0">Cheat </div>
          <b-progress height={} class="progress-white progress-xs my-3" :value="value" />
        </b-card>
      </b-col>
      <b-col sm="6" lg="3" class="p-1">
        <b-card class="text-white bg-info">
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
