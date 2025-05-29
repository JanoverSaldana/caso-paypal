<script>

import ToolbarContentComponent from "../components/toolbar-content.component.vue";
import ToolbarContent from "../components/toolbar-content.component.vue";
import CountrySummary from "../../transaction/component/country-summary.component.vue";

export default {
  name: 'Home',
  components: {CountrySummary, ToolbarContent},

  created() {
    console.log('Home component created.')
  }
}
</script>

<template>

  <div class="page-container flex flex-column flex-1 w-full h-full">


      <h1> {{$t('home.title')}} </h1>

      <h2> {{$t('home.sub-title')}} </h2>


    <div class="page-content flex flex-1 w-full h-full">

      <country-summary></country-summary>

    </div>

  </div>
</template>

<style>

</style>