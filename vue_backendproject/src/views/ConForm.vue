<template>
  <div>
    <!-- Back Button -->
    <router-link to="/" class="text-blue-500 px-4 py-2">Back</router-link>

    <!-- Form Section -->
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Contract Form Page</h1>

      <!-- Form Grid -->
      <div class="grid grid-cols-2 gap-4">
        <!-- loandate Field -->
        <div>
          <label for="loandate" class="block text-sm font-medium text-gray-700">วันที่กู้ยืม</label>
          <input id="loandate" type="text" v-model="formData.loandate" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <!-- duration Field -->
        <div>
          <label for="duration" class="block text-sm font-medium text-gray-700">ระยะเวลา</label>
          <input id="duration" type="text" v-model="formData.duration" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <!-- returndate Field -->
        <div>
          <label for="returndate" class="block text-sm font-medium text-gray-700">วันที่ต้องคืน</label>
          <input id="returndate" v-model="formData.returndate" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <!-- principle Field -->
        <div>
          <label for="principle" class="block text-sm font-medium text-gray-700">เงินต้น</label>
          <input id="principle" type="tel" v-model="formData.principle" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <!-- interest Field -->
        <div>
          <label for="interest" class="block text-sm font-medium text-gray-700">ดอกเบี้ย</label>
          <input id="interest" type="text" v-model="formData.interest" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <!-- penalty Field -->
        <div>
          <label for="penalty" class="block text-sm font-medium text-gray-700">ค่าปรับ</label>
          <input id="penalty" type="number" v-model="formData.penalty" class="mt-1 p-2 border rounded-md w-full">
        </div>

        <!-- status Field -->
        <div>
          <label for="status" class="block text-sm font-medium text-gray-700">สถานะ</label>
          <input id="status" type="text" v-model="formData.status" class="mt-1 p-2 border rounded-md w-full">
        </div>
        
        <div>
            <label for="return" class="block text-sm font-medium text-gray-700">จำนวนเงินที่คืนมาแล้ว : </label>
            <input id="return" type="text" v-model="formData.status" class="mt-1 p-2 border rounded-md w-full">
        </div>
          <button @click="submitForm" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-1/4">Submit</button>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; 

const formData = ref({
    loandate: '',
    duration: '',
    returndate: '',
    principle: '',
    interest: '',
    penalty: '',
    status: '',
    status: ''
});

</script>

<style>

</style>