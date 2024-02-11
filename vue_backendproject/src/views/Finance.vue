<template>
<!-- Header -->
    <div class="bg-gray-200 p-4 flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="Person" class="w-12 h-12 object-cover rounded-full mr-4">
      <div>
        <h1 class="text-2xl font-bold">สัญญาการกู้ยืมเงิน</h1>
        <p class="mt-2 text-gray-600">รหัสสัญญา : 002</p>
      </div>
      <router-link to="/CusForm" class="text-blue-500 px-4 py-2 ml-auto">
        <button @click="goToForm" class="bg-blue-500 text-white px-4 py-2 rounded-md ">Add Data</button>
      </router-link>
    </div>
<!-- Content -->
    <div class="mt-4 p-4">
      <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ลำดับ</th>
            <th class="py-2 px-4 border-b">วันที่</th>
            <th class="py-2 px-4 border-b">รายละเอียด</th>
            <th class="py-2 px-4 border-b">จำนวน</th>
            <th class="py-2 px-4 border-b">คงเหลือ</th>
          </tr>
        </thead>
        <tbody>
          <!-- Your data rows go here -->
          <!-- For example: -->
          <tr>
            <td class="py-2 px-4 border-b text-center">1</td>
            <td class="py-2 px-4 border-b text-center">11/2</td>
            <td class="py-2 px-4 border-b text-center">กู้เงิน</td>
            <td class="py-2 px-4 border-b text-center">5000</td>
            <td class="py-2 px-4 border-b text-center">-5000</td>
          </tr>
          <!-- ... Repeat for other data rows -->
        </tbody>
      </table>
    </div>
</template>

<script setup>

</script>

<style>

</style>