<template>
  <div>
    <!-- Top Section -->
    <div class="bg-gray-200 p-4 flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="Person" class="w-12 h-12 object-cover rounded-full mr-4">
      <div>
        <h1 class="text-2xl font-bold font-serif">สัญญาการกู้ยืมเงิน</h1>
        <!-- <p class="mt-2 text-gray-600">Description or any other content goes here.</p> -->
      </div>
      <router-link to="/ConForm" class="text-blue-500 px-4 py-2 ml-auto">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md ">Add Data</button>
      </router-link>
    </div>

    <!-- Data Grid Section -->
    <div class="mt-4 p-4">
      <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ContactID</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">ReturnDate</th>
            <th class="py-2 px-4 border-b">Principle</th>
            <th class="py-2 px-4 border-b"></th>
            <th class="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          <!-- Your data rows go here -->
          <!-- For example: -->
          <tr v-for="contract in contracts" :key="contract.ConID">
            <th class="py-2 px-4 border-b">{{ contract.ConID }}</th>
            <th class="py-2 px-4 border-b">{{ contract.Status }}</th>
            <th class="py-2 px-4 border-b">{{ contract.ReturnDate }}</th>
            <th class="py-2 px-4 border-b">{{ contract.Priciple }}</th>
            <th class="py-2 border-b">
              <router-link :to="'/ConDetail/' + contract.ConID"><button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mr-1">Details</button></router-link>
              <router-link :to="'/ConDetail_edit/' + contract.ConID"><button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 ml-1">Edit</button></router-link>
            </th>
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

const contracts = ref([]);



onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8800/contract');
    contracts.value = response.data;
    console.log(response)
  } catch (error) {
    console.error(error);
  }
});
</script>

