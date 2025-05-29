<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-content",
  components: {LanguageSwitcher},


  created()
  {
    console.log('Toolbar component Created');
  }
}

</script>

<template>


  <pv-toolbar class="toolbar-elixir-line m-0  w-full border-none ">

    <template #start>

      <h5>paypal.com</h5>

    </template>



    <template #center>
      <div class="flex items-center gap-2">

        <router-link to="/home" class="text-gray-500 hover:text-gray-700">

          <pv-button class="button-option m-1 " >
            {{ $t('toolbar.option-1') }}
          </pv-button>

        </router-link>


        <router-link to="/countries/transaction-category/details/new" class="text-gray-500 hover:text-gray-700">

          <pv-button class="button-option m-1 " >
            {{ $t('toolbar.option-2') }}
          </pv-button>

        </router-link>
      </div>
    </template>




    <template #end>
      <div class="language-switcher">
        <language-switcher/>
      </div>
    </template>

  </pv-toolbar>



</template>

<style scoped>

</style>