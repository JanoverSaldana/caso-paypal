<script>

import {Category} from "../model/category.entity.js";
import {TransactionService} from "../services/country-api.service.js";

export default {
  name: "category-validation",


  data(){
    return {
      apiServicesCategories: null,
      entityCategories: [],

      itemCategory: new Category({}),
      idCategory: null,

      //Formulario
      submitted: false,
      category: '',
      existCategory: false,
    }
  },

  methods: {

    onSubmit() {


      for (const categoryfor of this.entityCategories) {
        if (this.category.trim().toLowerCase() === categoryfor.name.toLowerCase()) {
          this.idCategory = categoryfor.id;
          this.existCategory = true;


          Promise.all([
            this.getCategoryById()
          ]).then(() => {
            this.verificarRegisteredInAt()
          });


          break; // ¡Corta el bucle al encontrar coincidencia!
        } else {
          this.existCategory = false;
        }
      }

      console.log('Resultado de la categoria',this.existCategory, 'con ID: ', this.idCategory)

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


    getCategoryById(){
      return this.apiServicesCategories.getResourceById(this.idCategory).then(response => {
        this.itemCategory = response.data;
        console.log('La categoria es: ', this.itemCategory)
      }) .catch(error => {
        console.error("Error al cargar los datos de la categoria", error);
      });
    },

    verificarRegisteredInAt(){
      if (!this.itemCategory.registeredInAt) {
        const now = new Date();
        this.itemCategory.registeredInAt = now
            .toLocaleString('es-PE', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            })
            .replace(',', '');


        this.updatedResource();
      }
    },

    updatedResource() {
      this.apiServicesCategories.updatedResource(this.itemCategory.id, this.itemCategory)
          .then(response => {
            console.log("Categoría actualizada correctamente", response.data);
          })
          .catch(error => {
            console.error("Error al actualizar la categoría", error);
          });
    }

  },


  created() {

    this.apiServicesCategories =  new TransactionService('/categories');

    this.getAllCategories();

    console.log('Category validation component Created');
  }



}

</script>

<template>

  <div class="flex flex-1 flex-column p-2 w-full h-full align-items-center">


    <div class="formulario flex flex-row w-full">

      <form @submit.prevent="onSubmit" class="validator-category flex flex-1 w-full p-2">

        <div class="flex flex-col gap-1">
          <pv-input-text v-model="category" name="category" type="text" placeholder="Category" :class="{'p-invalid':
          submitted && !category }" fluid/>
        </div>

        <pv-button class="ml-4" type="submit" severity="secondary" label="Category Validation"/>
      </form>

    </div>


    <div v-if="existCategory">
      <p> <strong> LA CATEGORIA EXISTE </strong> </p>


      <div class="data-category  flex flex-1 flex-column w-full h-full">
        <pv-card v-model:dt="itemCategory" >

          <template #header>
            <p> <strong> Nombre de la categoria: {{itemCategory.name}} </strong> </p>
          </template>

          <template #content>
            <p> <strong> Descripción: </strong> {{itemCategory.description}} </p>
            <p> <strong> Ingresos: </strong> {{itemCategory.income}} </p>
            <p> <strong> Gastos: </strong> {{itemCategory.expenses}} </p>
            <p> <strong> País: </strong> {{itemCategory.countryId}} </p>
            <p> <strong> Registered In At: </strong> {{itemCategory.registeredInAt}} </p>
          </template>



        </pv-card>
      </div>


    </div>


    <div v-if="!existCategory">
      <p> <strong> LA CATEGORIA NO EXISTE </strong> </p>
    </div>


  </div>





</template>

<style >

</style>