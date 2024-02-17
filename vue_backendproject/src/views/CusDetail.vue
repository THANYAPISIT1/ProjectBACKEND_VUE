<template>
<section class="bg-light mt-6">
  <router-link to="/customer" class="text-blue-500 px-4 py-2">Back</router-link>
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="col-span-1 md:mb-0 md:mr-4">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile Image" class="w-full md:w-auto md:max-w-xs mx-auto mb-4 md:mb-0 rounded-lg shadow-md">
        </div>
        <div v-for="customers in customers" :key="customers.CusID" class="col-span-1">
          <div class="bg-secondary inline-block py-4 px-6 md:py-7 md:px-8 mb-4 md:mb-7 rounded-lg shadow-md">
            <h3 class="text-teal-400 text-3xl mb-1">{{ customers.CusName }}</h3>
            <span class="text-primary text-xl grid grid-cols-2"><p>CustomerID : </p>{{ customers.CusID }}</span>
          </div>
            <div>
              <label for="SSN" class="block text-sm font-medium text-gray-700">SSN : </label>
              <h2 class="py-2 px-4 border-b w-1/2">{{ customers.SSN }}</h2>
            </div>
            <div>
              <label for="CusPhoneNo" class="block text-sm font-medium text-gray-700">PhoneNo : </label>
              <h2 class="py-2 px-4 border-b w-1/2">{{ customers.CusPhoneNo }}</h2>
            </div>
            <div>
              <label for="Income" class="block text-sm font-medium text-gray-700">Income : </label>
              <h2 class="py-2 px-4 border-b w-1/2">{{ customers.Income }}</h2>
            </div>
            <div>
              <label for="Facebook" class="block text-sm font-medium text-gray-700">Facebook : </label>
              <h2 class="py-2 px-4 border-b w-1/2">{{ customers.Facebook }}</h2>
            </div>
            <div>
              <label for="Asset" class="block text-sm font-medium text-gray-700">Asset : </label>
              <h2 class="py-2 px-4 border-b w-1/2">{{ customers.Asset }}</h2>
            </div>
            <div>
              <label for="Address" class="block text-sm font-medium text-gray-700">Address : </label>
              <h2 class="py-2 px-4 border-b w-1/2">{{ customers.Address }}</h2>
            </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'

const customers = ref([]);
const route = useRoute();


onMounted(async () => {
  try {
    const CusID = route.params.CusID;
    const response = await axios.get(`http://localhost:8800/customers/${CusID}`);
    customers.value = response.data;
  } catch (error) {
    console.error(error);
  }
});


</script>

<style>

</style>