<template>
  <div>
    <!-- Back Button -->
    <router-link to="/" class="text-blue-500 px-4 py-2">Back</router-link>

    <!-- Form Section -->
    <div class="p-4">
      <div class="my-4" v-for="contract in contract" :key="contract.ConID">
        <h1 class="text-2xl font-bold mb-4"> Contract Detail </h1>
        <p class="mt-2 text-gray-600">ContractID : {{ contract.ConID }}</p>
      </div>

      <!-- Form Grid -->
      <div>
        <div v-for="contract in contract" :key="contract.ConID" class="grid grid-cols-2 gap-4">
          <!-- loandate Field -->
          <div>
            <label for="loandate" class="block text-sm font-medium text-gray-700">วันที่กู้ยืม : </label>
            <!-- Replace h2 with input -->
            <input v-model="contract.LoanDate" id="loandate" type="date" class="py-2 px-4 border-b" />
          </div>
          <!-- Other Fields ... -->

          <div>
            <label for="ReturnDate" class="block text-sm font-medium text-gray-700">วันที่ต้องคืน : </label>
            <!-- Replace h2 with input -->
            <input v-model="contract.ReturnDate" id="ReturnDate" type="date" class="py-2 px-4 border-b" />
          </div>

          <div>
            <label for="Duration" class="block text-sm font-medium text-gray-700">ระยะเวลา : </label>
            <!-- Replace h2 with input -->
            <input v-model="contract.Duration" id="Duration" class="py-2 px-4 border-b" />
          </div>

          <div>
            <label for="Priciple" class="block text-sm font-medium text-gray-700">เงินต้น : </label>
            <!-- Replace h2 with input -->
            <input v-model="contract.Priciple" id="Priciple" class="py-2 px-4 border-b" />
          </div>
          
          <div>
            <label for="Interest" class="block text-sm font-medium text-gray-700">ดอกเบี้ย : </label>
            <!-- Replace h2 with input -->
            <input v-model="contract.Interest" id="Interest" class="py-2 px-4 border-b" />
          </div>

          <div>
            <label for="Penality" class="block text-sm font-medium text-gray-700">ค่าปรับ : </label>
            <!-- Replace h2 with input -->
            <input v-model="contract.Penality" id="Penality" class="py-2 px-4 border-b" />
          </div>

          <div>
            <label for="Status" class="block text-sm font-medium text-gray-700">สถานะ : </label>
            <!-- Replace h2 with input -->
            <input v-model="contract.Status" id="Status" class="py-2 px-4 border-b" />
          </div>

          <div>
            <label for="ReturnMoney" class="block text-sm font-medium text-gray-700">จำนวนเงินที่คืนมาแล้ว : </label>
            <!-- Replace h2 with input -->
            <input v-model="contract.ReturnMoney" id="ReturnMoney" class="py-2 px-4 border-b" />
          </div>
          <!-- Goto Finance -->
          <div>
            <button @click="updateData" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-1/4">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const contract = ref({});
const route = useRoute();

onMounted(async () => {
  try {
    const ConID = route.params.ConID;
    const response = await axios.get(`http://localhost:8800/contract/${ConID}`);
    contract.value = response.data;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});

const editcontract = async () => {
    await axios.put(`http://localhost:8800/contract/${ConID}`, {
      "LoanDate" :  contract.value.LoanDate,
      "ReturnDate" : contract.value.ReturnDate,
      "Duration" : contract.value.Duration,
      "Priciple" : contract.value.Principle,
      "Interest" : contract.value.Interest,
      "Penality" : contract.value.Penality,
      "Status" : contract.value.Status,
      "ReturnMoney" : contract.value.ReturnMoney

    }).then((response) =>{
      console.log(response)
    }).catch((err) => {
      console.log(err)
    });
</script>

<style>
/* Your component-specific styles go here */
</style>
