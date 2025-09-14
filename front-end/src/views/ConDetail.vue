<template>
    <div>
      <!-- Back Button -->
      <router-link to="/" class="text-blue-500 px-4 py-2">Back</router-link>
  
      <!-- Form Section -->
  <div class="p-4">
    <div class="my-4 grid grid-cols-4" v-for="contract in contract" :key="contract.ConID">
      <h1 class="text-2xl font-bold mb-4 col-span-4"> Contract Detail </h1>
      <h2 class="mt-2 text-gray-600">ContractID : {{ contract.ConID }}</h2>
      <h2 class="mt-2 text-gray-600">CustomerID : {{ contract.CusID }}</h2>
    </div>
  
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
        <!-- ReturnMoney Field -->
        <div>
          <label for="return" class="block text-sm font-medium text-gray-700">จำนวนเงินที่ต้องคืน : </label>
          <h2 class="py-2 px-4 border-b">{{ contract.ReturnMoney }}</h2>
        </div>
        <!-- Goto Finance -->
        <!-- Goto Finance and Total Amount Section -->
        <div class="flex items-center justify-between">
            <div>
              <button @click="showTable" type="showItem" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Show Finance Table</button>
              <router-link :to="'/AddFinance/' + contract.ConID" class="my-8">
                <button type="addform" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add Finance Data</button>
              </router-link>
            </div>
            <!-- Total Amount Box -->
        </div>
        <div class="bg-gray-100 p-4 rounded-md text-center">
          <p class="text-sm font-medium text-sky-900">Profit : {{ totalAmount }} </p>
        </div>
        </div>
    </div>
    <!--  -->
    <div v-if="isTableVisible"  class="mt-4 p-4">
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
    </div>
  </template>
  
  <script setup>
import { ref, onMounted ,computed } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'

const finance = ref({});
const contract = ref({});
const route = useRoute();

const isTableVisible = ref(false);

const showTable = () => {
  isTableVisible.value = !isTableVisible.value; // Toggle the visibility
};

onMounted(async () => {
  try {
    const ConID = route.params.ConID;
    const response = await axios.get(`http://localhost:8800/contract/${ConID}`);
    contract.value = response.data;
    console.log(response)
  } catch (error) {
    console.error(error);
  }

// Finance Api called
  try {
    const ConID = route.params.ConID;
    const response = await axios.get(`http://localhost:8800/finance/${ConID}`);
    finance.value = response.data;
    console.log(response)
  } catch (error) {
    console.error(error);
  }
});

// Computed property to calculate the total amount
const totalAmount = computed(() => {
  const financeArray = finance.value;

  if (!Array.isArray(financeArray)) {
    return 0; // Return 0 if finance is not an array
  }

  return financeArray.reduce((total, item) => total + (item.Amount || 0), 0);
});

  </script>
  
  <style>
  /* Your component-specific styles go here */
  </style>
  