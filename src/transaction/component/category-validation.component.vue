<script>

export default {
  name: "category-validation",
  components: {},

  created() {
    console.log('Category validation component Created');
  }
}

</script>

<template>

  <!--
  La vista Category, muestra una vista con el título “Transaction Category” y debajo una sección
Category-Validation.
• La sección Category-Validation dentro de la vista Transaction Category, presenta un form
conteniendo un input text field con el label Category Name, junto con un button Category
Página 2 de 6
Validation. Cuando el usuario ingresa la categoría y hace click en el botón Category-Validation, el
sistema valida si la categoría concuerda con alguna ya existente en Categories. Si encuentra una
coincidencia y el valor de registeredInAt no tiene valor, actualiza en el endpoint /categories  el
valor de registeredInAt con la fecha y hora actual y muestra debajo los datos asociados a la
categoría y el país (Country Id, Country Name, Category Name y registeredInAt). Si no encuentra
coincidencia, debe mostrar debajo el texto “Invalid Category”. Si se encuentra coincidencia, pero
ya existe un valor de fecha y hora en registeredInAt, entonces debe mostrar debajo el texto
“Already Category-Validation”.
-->

  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">{{$t('category-validation.title')}}</h2>

    <div class="mb-4">
      <label for="categoryName" class="block text-sm font-medium text-gray-700">Category Name</label>
      <input type="text" id="categoryName" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter category name">
    </div>

    <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Category Validation</button>

    <div class="mt-4">
      <!-- Aquí se mostrarán los resultados de la validación -->
      <p>Invalid Category</p>
      <!-- O -->
      <!-- <p>Already Category-Validation</p> -->
      <!-- O mostrar los datos de la categoría y país si hay coincidencia -->
    </div>
  </div>





</template>

<style >

</style>