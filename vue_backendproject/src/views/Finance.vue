<template>
<!-- Header -->
<div>
  <div class="my-4">
    <router-link :to="'/ConDetail/' + finance.ConID" class="text-blue-500 px-4 py-2">Back</router-link>
  </div>
  <div class="bg-gray-200 p-4 flex items-center">
    <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="Person" class="w-12 h-12 object-cover rounded-full mr-4">
    <div>
      <h1 class="text-2xl font-bold">รายการการเงิน</h1>
      <p class="mt-2 text-gray-600">รหัสสัญญา : {{ finance.ConID }}</p>
      <label for="showTotalAmount" class="">
        
      </label>
    </div>
    <router-link to="/FinanceForm" class="text-blue-500 px-4 py-2 ml-auto">
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md ">Add Data</button>
    </router-link>
  </div>
  <!-- Content -->
  <div class="mt-4 p-4">
    <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">วันที่</th>
          <th class="py-2 px-4 border-b">รายละเอียด</th>
          <th class="py-2 px-4 border-b">จำนวน</th>
        </tr>
      </thead>
      <tbody>
        <!-- Finance data -->
        <tr v-for="finance in finance" :key="finance.FID">
          <td class="py-2 px-4 border-b text-center">{{ finance.FDate }}</td>
          <td class="py-2 px-4 border-b text-center">{{ finance.Detail }}</td>
          <td class="py-2 px-4 border-b text-center">{{ finance.Amount }}</td>
        </tr>
        <!-- ... Repeat for other data rows -->
      </tbody>
    </table>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'

const finance = ref({});
const route = useRoute();



onMounted(async () => {
  try {
    const ConID = route.params.ConID;
    const response = await axios.get(`http://localhost:8800/finance/${ConID}`);
    finance.value = response.data;
    console.log(response)
  } catch (error) {
    console.error(error);
  }
});

</script>

<style>

</style>