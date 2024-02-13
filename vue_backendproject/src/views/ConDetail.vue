<template>
    <div>
      <!-- Back Button -->
      <router-link to="/" class="text-blue-500 px-4 py-2">Back</router-link>
  
      <!-- Form Section -->
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4"> Contract Detail </h1>
  
        <!-- Form Grid -->
        <div>
    <div v-for="contract in contract" :key="contract.ConID" class="grid grid-cols-2 gap-4">
      <!-- loandate Field -->
      <div>
        <label for="loandate" class="block text-sm font-medium text-gray-700">วันที่กู้ยืม : </label>
        <h2 class="py-2 px-4 border-b">{{ contract.LoanDate }}</h2>
      </div>

      <!-- duration Field -->
      <div>
        <label for="duration" class="block text-sm font-medium text-gray-700">ระยะเวลา : </label>
        <h2 class="py-2 px-4 border-b">{{ contract.Duration }}</h2>
      </div>

      <!-- returndate Field -->
      <div>
        <label for="returndate" class="block text-sm font-medium text-gray-700">วันที่ต้องคืน : </label>
        <h2 class="py-2 px-4 border-b">{{ contract.ReturnDate }}</h2>
      </div>

      <!-- principle Field -->
      <div>
        <label for="principle" class="block text-sm font-medium text-gray-700">เงินต้น : </label>
        <h2 class="py-2 px-4 border-b">{{ contract.Priciple }}</h2>
      </div>

      <!-- interest Field -->
      <div>
        <label for="interest" class="block text-sm font-medium text-gray-700">ดอกเบี้ย : </label>
        <h2 class="py-2 px-4 border-b">{{ contract.Interest }}</h2>
      </div>

      <!-- penalty Field -->
      <div>
        <label for="penalty" class="block text-sm font-medium text-gray-700">ค่าปรับ : </label>
        <h2 class="py-2 px-4 border-b">{{ contract.Penality }}</h2>
      </div>

      <!-- status Field -->
      <div>
        <label for="status" class="block text-sm font-medium text-gray-700">สถานะ : </label>
        <h2 class="py-2 px-4 border-b">{{ contract.Status }}</h2>
      </div>

      <div>
        <label for="return" class="block text-sm font-medium text-gray-700">จำนวนเงินที่คืนมาแล้ว : </label>
        <h2 class="py-2 px-4 border-b">{{ contract.ReturnMoney }}</h2>
      </div>
    </div>
  </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const contract = ref({});


onMounted(async () => {
  try {
    const ConID = this.route.params.ConID;
    const response = await axios.get(`http://localhost:8800/contract/${ConID}`);
    contract.value = response.data;
    console.log(response)
  } catch (error) {
    console.error(error);
  }
});
  </script>
  
  <style>
  /* Your component-specific styles go here */
  </style>
  