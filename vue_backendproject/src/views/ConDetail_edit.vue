<template>
  <div>
    <!-- Back Button -->
    <router-link to="/" class="text-blue-500 px-4 py-2">Back</router-link>

    <!-- Form Section -->
    <div class="p-4">
      <div class="my-4" v-for="contractItem in contract" :key="contractItem.ConID">
        <h1 class="text-2xl font-bold mb-4"> Contract Detail </h1>
        <p class="mt-2 text-gray-600">ContractID : {{ contractItem.ConID }}</p>
      </div>

      <!-- Form Grid -->
      <form @submit.prevent="updateCon">
        <div v-for="contractItem in contract" :key="contractItem.ConID" class="grid grid-cols-2 gap-4">
          <!-- loandate Field -->
          <div>
            <label for="loandate" class="block text-sm font-medium text-gray-700">วันที่กู้ยืม : </label>
            <input v-model="edit.LoanDate" id="loandate" class="mt-1 p-2 border rounded-md w-full" readonly />
          </div>

          <!-- ReturnDate Field -->
          <div>
            <label for="ReturnDate" class="block text-sm font-medium text-gray-700">วันที่ต้องคืน : </label>
            <input v-model="edit.ReturnDate" id="ReturnDate" class="mt-1 p-2 border rounded-md w-full" readonly />
          </div>

          <!-- Duration Field -->
          <div>
            <label for="Duration" class="block text-sm font-medium text-gray-700">ระยะเวลา : </label>
            <input v-model="edit.Duration" id="Duration" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <!-- Priciple Field -->
          <div>
            <label for="Priciple" class="block text-sm font-medium text-gray-700">เงินต้น : </label>
            <input v-model="edit.Priciple" id="Priciple" class="mt-1 p-2 border rounded-md w-full" />
          </div>
          
          <!-- Interest Field -->
          <div>
            <label for="Interest" class="block text-sm font-medium text-gray-700">ดอกเบี้ย : </label>
            <input v-model="edit.Interest" id="Interest" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <!-- Penality Field -->
          <div>
            <label for="Penality" class="block text-sm font-medium text-gray-700">ค่าปรับ : </label>
            <input v-model="edit.Penality" id="Penality" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <!-- Status Field -->
          <div>
            <label for="Status" class="block text-sm font-medium text-gray-700">สถานะ : </label>
            <select id="status" v-model="edit.Status" class="mt-1 p-2 border rounded-md w-full">
              <option value="ชำระแล้ว">ชำระแล้ว</option>
              <option value="ค้างชำระ">ค้างชำระ</option>
              <option value="อยู่ในสัญญา">อยู่ในสัญญา</option>
            </select>
          </div>

          <!-- ReturnMoney Field -->
          <div>
            <label for="ReturnMoney" class="block text-sm font-medium text-gray-700">จำนวนเงินที่คืนมาแล้ว : </label>
            <input v-model="edit.ReturnMoney" id="ReturnMoney" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <div>
            <button @click="showAlert" type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-1/4">Update</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const contract = ref([])

const showAlert = () => {
  alert('Data has been update!'); 
};

onMounted(async () => {
  try {
    const ConID = route.params.ConID;
    const response = await axios.get(`http://localhost:8800/contract/${ConID}`);
    contract.value = response.data;
    edit.value = { ...response.data[0] };
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});
const edit = ref({
  LoanDate : '',
  ReturnDate : '',
  Duration : '',
  Status : '',
  Priciple : '',
  Interest : '',
  Penality : '',
  ReturnMoney : '',
});

const updateCon = async () => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = ({
      "LoanDate": edit.value.LoanDate,
      "ReturnDate": edit.value.ReturnDate,
      "Duration": edit.value.Duration,
      "Status": edit.value.Status,
      "Priciple": edit.value.Priciple,
      "Interest": edit.value.Interest,
      "Penality": edit.value.Penality,
      "ReturnMoney": edit.value.ReturnMoney,
    });

    console.log(raw);
    const ConID = route.params.ConID;
    await axios.post(`http://localhost:8800/contract/edit/${ConID}`,{raw});
    console.log("Contract updated successfully");
  } catch (error) {
    console.error("Error updating contract", error);
  }
};
</script>

<style>

</style>
