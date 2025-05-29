<script>

import {Country} from "../model/country.entity.js";
import {TransactionService} from "../services/country-api.service.js";

export default {
  name: "country-summary",

  data() {
    return {
      apiServices: null,
      entity: new Country({}),
      entityList: [],
    };
  },

  methods: {
    buildResourcesListFromResponseData(resource) {
      return resource.map(response => new Country(response));
    },


    getAllResources(){
      this.apiServices.getAllResources()
          .then(response => {

            this.entityList = this.buildResourcesListFromResponseData(response.data);

            console.log("Lista de Ciudades: ", this.entityList);

          })
          .catch(error => {
            console.error("Error al cargar los datos de ciudades", error);
          });
    }


  },



  created() {

    this.apiServices =  new TransactionService('/countries');

    this.getAllResources();

    console.log('Country Summary component Created');
  }
}

</script>

<template>

  <div class="p-4">

    <h2 class="text-xl font-bold mb-4">Country</h2>

    <div class="grid grid-cols-2 gap-4">

      <pv-card v-for="country in entityList" :key="country.id" class="border rounded-lg p-4 shadow-md bg-blue-100">

        <template #header>
          <h3 class="text-lg font-semibold">{{ country.name }}</h3>
        </template>

        <template #content>
          <p>Descripción: {{ country.description }}</p>

        </template>

        <template #footer>
          <p class="text-sm text-gray-500">Amount: Todavia no sé</p>
        </template>

      </pv-card>
    </div>
  </div>





</template>

<style>

</style>