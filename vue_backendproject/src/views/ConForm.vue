<template>
  <div>
    <!-- Back Button -->
    <router-link to="/" class="text-blue-500 px-4 py-2">Back</router-link>

    <!-- Form Section -->
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Contract Form Page</h1>

      <!-- Form Grid -->
      <form @submit.prevent="submitForm">
      <div class="grid grid-cols-2 gap-4">
        <!-- LoanDate Field -->
        <div>
          <label for="LoanDate" class="block text-sm font-medium text-gray-700">วันที่กู้ยืม</label>
          <input id="LoanDate" type="date" v-model="add.LoanDate" class="mt-1 p-2 border rounded-md w-full" >
        </div>
        <!-- ReturnDate Field -->
        <div>
          <label for="ReturnDate" class="block text-sm font-medium text-gray-700">วันที่ต้องคืน</label>
          <input id="ReturnDate" v-model="add.ReturnDate" class="mt-1 p-2 border rounded-md w-full" type="date">
        </div>

        <!-- duration Field -->
        <div>
          <label for="duration" class="block text-sm font-medium text-gray-700">ระยะเวลา</label>
          <input id="duration" type="text" v-model="add.Duration" class="mt-1 p-2 border rounded-md w-full">
        </div>
        
        <!-- status Field -->
        <div>
          <label for="status" class="block text-sm font-medium text-gray-700">สถานะ</label>
          <input id="status" type="text" v-model="add.Status" class="mt-1 p-2 border rounded-md w-full">
        </div>
        

        <!-- Priciple Field -->
        <div>
          <label for="Priciple" class="block text-sm font-medium text-gray-700">เงินต้น</label>
          <input id="Priciple" type="tel" v-model="add.Priciple" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <!-- interest Field -->
        <div>
          <label for="interest" class="block text-sm font-medium text-gray-700">ดอกเบี้ย</label>
          <input id="interest" type="text" v-model="add.Interest" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <!-- Penality Field -->
        <div>
          <label for="Penality" class="block text-sm font-medium text-gray-700">ค่าปรับ</label>
          <input id="Penality" type="number" v-model="add.Penality" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <div>
            <label for="return" class="block text-sm font-medium text-gray-700">จำนวนเงินที่คืนมาแล้ว : </label>
            <input id="return" type="text" v-model="add.ReturnMoney" class="mt-1 p-2 border rounded-md w-full">
        </div>
        <div>
            <label for="CusID" class="block text-sm font-medium text-gray-700">CusID : </label>
            <input id="CusID" type="text" v-model="add.CusID" class="mt-1 p-2 border rounded-md w-full">
        </div>
        <div>
            <label for="AID" class="block text-sm font-medium text-gray-700">AID : </label>
            <input id="AID" type="text" v-model="add.AID" class="mt-1 p-2 border rounded-md w-full">
        </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-1/4">Submit</button>
      </div>
    </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const add = ref({
  LoanDate: '',
  ReturnDate: '',
  Duration: '',
  Status: '',
  Priciple: '',
  Interest: '',
  Penality: '',
  ReturnMoney: '',
  CusID: '',
  AID: '',
});

const submitForm = async() =>{
  try {
    const response = await axios.post('http://localhost:8800/contract', {
      "LoanDate": add.value.LoanDate,
      "ReturnDate": add.value.ReturnDate,
      "Duration": add.value.Duration,
      "Status": add.value.Status,
      "Priciple": add.value.Priciple,
      "Interest": add.value.Interest,
      "Penality": add.value.Penality,
      "ReturnMoney": add.value.ReturnMoney,
      "CusID": add.value.CusID,
      "AID": add.value.AID,
    });

    console.log(response);
    alert("Add contract success");
    window.location.reload();
  } catch (error) {
    console.error('Error adding contract:', error);
    alert("Failed to add contract");
  }
}



</script>

<style>

</style>