<template>
  <div class="bg-gray-200 p-4 flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="Person" class="w-12 h-12 object-cover rounded-full mr-4">
      <div>
        <h1 class="text-2xl font-bold">รายละเอียดลูกค้า</h1>
        <p class="mt-2 text-gray-600">รหัสสัญญา : 002</p>
      </div>

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
            <td>
                <router-link to="/CusDetail" class="text-blue-500 px-4 py-2 ml-auto=">
                    <button @click="goToForm" class="bg-blue-500 text-white px-4 py-2 rounded-md ">Add Data</button>
                </router-link>
            </td>
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