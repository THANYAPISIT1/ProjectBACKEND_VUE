<template>
    <div>
      <!-- Back Button -->
      <router-link :to="'/ConDetail/' + finance.ConID" class="text-blue-500 px-4 py-2">Back</router-link>
  
      <!-- Form Section -->
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Finance Form Page</h1>
  
        <!-- Form Grid -->
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-2 gap-4">
            <!-- FDate Field -->
            <div>
              <label for="FDate" class="block text-sm font-medium text-gray-700">Date</label>
              <input id="FDate" type="date" v-model="add.FDate" class="mt-1 p-2 border rounded-md w-full">
            </div>
  
            <!-- Detail Field -->
            <div>
              <label for="Detail" class="block text-sm font-medium text-gray-700">Detail</label>
              <input id="Detail" type="text" v-model="add.Detail" class="mt-1 p-2 border rounded-md w-full">
            </div>
  
            <!-- Amount Field -->
            <div>
              <label for="Amount" class="block text-sm font-medium text-gray-700">Amount</label>
              <input id="Amount" type="number" v-model="add.Amount" class="mt-1 p-2 border rounded-md w-full">
            </div>
            <div>
                
            </div>
            <!-- ConID Field -->
            <!-- <div>
              <label for="ConID" class="block text-sm font-medium text-gray-700">ConID</label>
              <input id="ConID" type="tel" v-model="add.ConID" class="mt-1 p-2 border rounded-md w-full">
            </div> -->

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-1/4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'; 
  import axios from 'axios';
  import { useRoute } from 'vue-router'


  const route = useRoute();
  const add = ref({
    FDate: '',
    Detail: '',
    Amount: '',
    ConID: '',
  });
  const finance = ref({});
  
  const submitForm = async() =>{
    try {
    const ConID = route.params.ConID;
    const response = await axios.post(`http://localhost:8800/finance/${ConID}`, {
        "FDate": add.value.FDate,
        "Detail": add.value.Detail,
        "Amount": add.value.Amount,
      });
  
      alert("Add New Finance success");
      window.location.reload();
      console.log(response);
    } catch (error) {
      console.error('Error adding New Finance:', error);
      alert("Failed to add New Finance");
    }
  }
  
  
  </script>
  
  <style>
  /* Your component-specific styles go here */
  </style>
  