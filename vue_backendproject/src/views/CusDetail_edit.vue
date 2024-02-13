<template>
    <div>
      <!-- Back Button -->
      <router-link to="/CusDetail" class="text-blue-500 px-4 py-2">Back</router-link>
  
      <!-- Form Section -->
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4"> customers Detail </h1>
  
        <!-- Form Grid -->
        <div>
    <div v-for="customers in customers" :key="customers.CusID" class="grid grid-cols-2 gap-4">
      <!-- SSN Field -->
      <div>
        <label for="SSN" class="block text-sm font-medium text-gray-700">SSN : </label>
        <h2 class="py-2 px-4 border-b">{{ customers.SSN }}</h2>
      </div>

      <!-- CusPhoneNo Field -->
      <div>
        <label for="CusPhoneNo" class="block text-sm font-medium text-gray-700">PhoneNo. : </label>
        <h2 class="py-2 px-4 border-b">{{ customers.CusPhoneNo }}</h2>
      </div>

      <!-- Income Field -->
      <div>
        <label for="Income" class="block text-sm font-medium text-gray-700">Income : </label>
        <h2 class="py-2 px-4 border-b">{{ customers.Income }}</h2>
      </div>

      <!-- Facebook Field -->
      <div>
        <label for="Facebook" class="block text-sm font-medium text-gray-700">Facebook : </label>
        <h2 class="py-2 px-4 border-b">{{ customers.Facebook }}</h2>
      </div>

      <!-- Asset Field -->
      <div>
        <label for="Asset" class="block text-sm font-medium text-gray-700">Asset : </label>
        <h2 class="py-2 px-4 border-b">{{ customers.Asset }}</h2>
      </div>

      <!-- Address Field -->
      <div>
        <label for="Address" class="block text-sm font-medium text-gray-700">Address : </label>
        <h2 class="py-2 px-4 border-b">{{ customers.Address }}</h2>
      </div>

    </div>
  </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const contracts = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8800/customers/${1}`);
    contracts.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
  </script>
  
  <style>
  /* Your component-specific styles go here */
  </style>
  