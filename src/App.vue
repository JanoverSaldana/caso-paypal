<script >

import ToolbarContent from "./public/components/toolbar-content.component.vue";

export default {
  name: 'App',
  components: {ToolbarContent},


  created() {
    console.log('App component created')
  }
};
</script>

<template>

  <div class="page-container flex flex-column flex-1 w-full h-screen">

    <div class="toolbar-page">
      <toolbar-content></toolbar-content>
    </div>

    <div class="flex flex-column flex-1 w-full h-full">
      <router-view></router-view>
    </div>

  </div>
</template>

<style>

</style>
