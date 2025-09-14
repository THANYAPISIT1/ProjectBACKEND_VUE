<template>
  <div>
    <!-- Back Button -->
    <router-link to="/Customer" class="text-blue-500 px-4 py-2">Back</router-link>

    <!-- Form Section -->
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Customer Form Page</h1>

      <!-- Form Grid -->
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-2 gap-4">
          <!-- CusID Field -->
          <!-- <div>
            <label for="CusID" class="block text-sm font-medium text-gray-700">CUstomerID</label>
            <input id="CusID" type="text" v-model="add.CusID" class="mt-1 p-2 border rounded-md w-full">
          </div> -->

          <!-- CusName Field -->
          <div>
            <label for="CusName" class="block text-sm font-medium text-gray-700">Name</label>
            <input id="CusName" type="text" v-model="add.CusName" class="mt-1 p-2 border rounded-md w-full">
          </div>

          <!-- SSN Field -->
          <div>
            <label for="SSN" class="block text-sm font-medium text-gray-700">SSN</label>
            <input id="SSN" v-model="add.SSN" class="mt-1 p-2 border rounded-md w-full">
          </div>

          <!-- Address Field -->
          <div>
            <label for="Address" class="block text-sm font-medium text-gray-700">Address</label>
            <input id="Address" type="tel" v-model="add.Address" class="mt-1 p-2 border rounded-md w-full">
          </div>

          <!-- CusPhoneNo Field -->
          <div>
            <label for="CusPhoneNo" class="block text-sm font-medium text-gray-700">PhoneNo.</label>
            <input id="CusPhoneNo" type="text" v-model="add.CusPhoneNo" class="mt-1 p-2 border rounded-md w-full">
          </div>

          <!-- Facebook Field -->
          <div>
            <label for="Facebook" class="block text-sm font-medium text-gray-700">Facebook</label>
            <input id="Facebook" type="text" v-model="add.Facebook" class="mt-1 p-2 border rounded-md w-full">
          </div>
          <!-- Income Field -->
          <div>
            <label for="Income" class="block text-sm font-medium text-gray-700">Income</label>
            <input id="Income" type="number" v-model="add.Income" class="mt-1 p-2 border rounded-md w-full">
          </div>

          <!-- Asset Field -->
          <div>
            <label for="Asset" class="block text-sm font-medium text-gray-700">Asset</label>
            <input id="Asset" type="text" v-model="add.Asset" class="mt-1 p-2 border rounded-md w-full">
          </div>
          <div>

          </div>

          <button @click="showAlert" type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-1/4">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; 
import axios from 'axios';


const showAlert = () => {
  alert('Customer has been Created!'); 
};

const add = ref({
  // CusID: '',
  CusName: '',
  SSN: '',
  Address: '',
  CusPhoneNo: '',
  Facebook: '',
  Income: '',
  Asset: '',
});

const submitForm = async() =>{
  try {
    const response = await axios.post('http://localhost:8800/customers', {
      // "CusID": add.value.CusID,
      "CusName": add.value.CusName,
      "SSN": add.value.SSN,
      "Address": add.value.Address,
      "CusPhoneNo": add.value.CusPhoneNo,
      "Facebook": add.value.Facebook,
      "Income": add.value.Income,
      "Asset": add.value.Asset,
    });

    alert("Add New customers success");
    window.location.reload();
    console.log(response);
  } catch (error) {
    console.error('Error adding New customers:', error);
    alert("Failed to add New Customers");
  }
}


</script>

<style>
/* Your component-specific styles go here */
</style>
