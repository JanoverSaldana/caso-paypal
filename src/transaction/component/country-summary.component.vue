<script>

import {Country} from "../model/country.entity.js";
import {TransactionService} from "../services/country-api.service.js";
import {Category} from "../model/category.entity.js";

export default {
  name: "country-summary",

  data() {
    return {
      apiServicesCategories: null,
      apiServicesCountries: null,
      entity: new Country({}),
      amountAux : null,
      entityCountryList: [],
      entityCategories: [],
    };
  },

  methods: {
    buildResourcesListFromResponseData(resource) {
      return resource.map(response => new Country(response));
    },


    /** El indicador Amount muestra el monto total de dinero que se mueve por país para Paypal, el
     cual se obtiene sumando income y expenses de todas las categorías de un país. **/

    AddAmountToCountryByCategory() {

      this.entityCountryList.forEach(country => {

        this.entityCategories.forEach(category => {

          if (country.id === category.countryId) {
            country.amount += parseInt(category.income) + parseInt(category.expenses);
          }

        });

      })


    },

    getAllCategories() {
      return this.apiServicesCategories.getAllResources().then(response => {
        this.entityCategories = response.data.map(resource => new Category(resource));
        console.log("Lista de Categorías: ", this.entityCategories);
      })
          .catch(error => {
            console.error("Error al cargar los datos de categorías", error);
          });
    },

     getAllCountries() {
      return this.apiServicesCountries.getAllResources()
          .then(response => {

            this.entityCountryList = this.buildResourcesListFromResponseData(response.data);

            console.log("Lista de Ciudades: ", this.entityCountryList);

          })
          .catch(error => {
            console.error("Error al cargar los datos de ciudades", error);
          });
    },

    //INICIALIZAR CONSUMO DE APIS

    // Mismo flujo: pero garantiza ejecución ordenada
    getAllResources() {

      Promise.all([

        this.getAllCountries(),
        this.getAllCategories()

      ]).then(() => {
        this.AddAmountToCountryByCategory();
      });
    }

  },



  created() {

    this.apiServicesCategories =  new TransactionService('/categories');

    this.apiServicesCountries =  new TransactionService('/countries');

    this.getAllResources()

    console.log('Country Summary component Created');
  }
}

</script>

<template>

  <div class="p-4">

    <h2 class="text-xl font-bold mb-4">Country</h2>

    <div class="grid grid-cols-2 gap-4">

      <pv-card v-for="country in entityCountryList" :key="country.id" class="border rounded-lg p-4 shadow-md"
               style="background-color: #acc864;">

        <template #header>
          <h3 class="text-lg font-semibold">{{ country.name }}</h3>
        </template>

        <template #content>
          <p>Descripción: {{ country.description }}</p>

        </template>

        <template #footer>
          <p class="text-sm" >Amount: {{country.amount}}</p>
        </template>

      </pv-card>
    </div>
  </div>





</template>

<style>

</style>