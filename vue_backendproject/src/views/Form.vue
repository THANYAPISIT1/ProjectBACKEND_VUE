<template>
    <div>
      <!-- Back Button -->
      <router-link to="/" class="text-blue-500 px-4 py-2">Back</router-link>
  
      <!-- Form Section -->
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Form Page</h1>
  
        <!-- Form Grid -->
        <div class="grid grid-cols-2 gap-4">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" type="text" v-model="formData.name" class="mt-1 p-2 border rounded-md w-full">
          </div>
  
          <!-- SSN Field -->
          <div>
            <label for="ssn" class="block text-sm font-medium text-gray-700">SSN</label>
            <input id="ssn" type="text" v-model="formData.ssn" class="mt-1 p-2 border rounded-md w-full">
          </div>
  
          <!-- Address Field -->
          <div class="col-span-2">
            <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
            <textarea id="address" v-model="formData.address" class="mt-1 p-2 border rounded-md w-full"></textarea>
          </div>
  
          <!-- PhoneNo Field -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">PhoneNo</label>
            <input id="phone" type="tel" v-model="formData.phone" class="mt-1 p-2 border rounded-md w-full">
          </div>
  
          <!-- Facebook Field -->
          <div>
            <label for="facebook" class="block text-sm font-medium text-gray-700">Facebook</label>
            <input id="facebook" type="text" v-model="formData.facebook" class="mt-1 p-2 border rounded-md w-full">
          </div>
  
          <!-- Income Field -->
          <div>
            <label for="income" class="block text-sm font-medium text-gray-700">Income</label>
            <input id="income" type="number" v-model="formData.income" class="mt-1 p-2 border rounded-md w-full">
          </div>
  
          <!-- Asset Field -->
          <div>
            <label for="asset" class="block text-sm font-medium text-gray-700">Asset</label>
            <input id="asset" type="text" v-model="formData.asset" class="mt-1 p-2 border rounded-md w-full">
          </div>
  
          <!-- Image Display -->
          <div class="col-span-2 row-span-2">
            <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
            <img :src="formData.image" alt="User Image" class="mt-1 p-2 border rounded-md w-full h-32 object-cover">
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    ssn: '',
    address: '',
    phone: '',
    facebook: '',
    income: '',
    asset: '',
    image: ''
  });
</script>
  