<template>
  <div class="bg-gray-200 p-4 flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="Person" class="w-12 h-12 object-cover rounded-full mr-4">
      <div>
        <h1 class="text-2xl font-bold">รายละเอียดลูกค้า</h1>
        <!-- <p class="mt-2 text-gray-600">รหัสสัญญา : 002</p> -->
      </div>

      <router-link to="/CusForm" class="text-blue-500 px-4 py-2 ml-auto">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md ">Add Data</button>
      </router-link>

    </div>
<!-- Content -->
    <div class="mt-4 p-4">
      <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden text-center">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">UID</th>
            <th class="py-2 px-4 border-b">ชื่อ-นามสกุล</th>
            <th class="py-2 px-4 border-b">เบอร์โทรศัพท์</th>
            <th class="py-2 px-4 border-b">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          <!-- Your data rows go here -->
          <!-- For example: -->
          <tr v-for="customers in customers" :key="customers.CusID">
            <td class="py-2 px-4 border-b">{{customers.CusID}}</td>
            <td class="py-2 px-4 border-b">{{customers.CusName}}</td>
            <td class="py-2 px-4 border-b">{{customers.CusPhoneNo}}</td>
            <th class="py-2 border-b">
              <router-link :to="'/CusDetail/' + customers.CusID"><button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mr-1">Details</button></router-link>
              <router-link :to="'/CusDetail_edit/' + customers.CusID"><button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 ml-1">Edit</button></router-link>
            </th>
          </tr>
          <!-- ... Repeat for other data rows -->
        </tbody>
      </table>
    </div>



</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const customers = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8800/customers');
    customers.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>

</style>