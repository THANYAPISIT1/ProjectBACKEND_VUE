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
      <form @submit.prevent="updateCon">
        <div v-for="contract in contract" :key="contract.ConID" class="grid grid-cols-2 gap-4">

          <!-- <div>
            <label for="ConID" class="block text-sm font-medium text-gray-700">ConID : </label>
            <input v-model="contract.ConID" id="ConID" class="py-2 px-4 border-b" disabled/>
          </div>

          <div>
            <label for="AID" class="block text-sm font-medium text-gray-700">AID : </label>
            <input v-model="edit.AID" id="AID" class="py-2 px-4 border-b" />
          </div> -->

          <!-- loandate Field -->
          <div>
            <label for="loandate" class="block text-sm font-medium text-gray-700">วันที่กู้ยืม : </label>
            <input v-model="edit.LoanDate" id="loandate" type="date" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          
          <div>
            <label for="ReturnDate" class="block text-sm font-medium text-gray-700">วันที่ต้องคืน : </label>
            <input v-model="edit.ReturnDate" id="ReturnDate" type="date" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <div>
            <label for="Duration" class="block text-sm font-medium text-gray-700">ระยะเวลา : </label>
            <input v-model="edit.Duration" id="Duration" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <div>
            <label for="Priciple" class="block text-sm font-medium text-gray-700">เงินต้น : </label>
            <input v-model="edit.Priciple" id="Priciple" class="mt-1 p-2 border rounded-md w-full" />
          </div>
          
          <div>
            <label for="Interest" class="block text-sm font-medium text-gray-700">ดอกเบี้ย : </label>
            <input v-model="edit.Interest" id="Interest" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <div>
            <label for="Penality" class="block text-sm font-medium text-gray-700">ค่าปรับ : </label>
            <input placeholder="" v-model="edit.Penality" id="Penality" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <div>
            <label for="Status" class="block text-sm font-medium text-gray-700">สถานะ : </label>
            <select id="status" v-model="edit.Status" class="mt-1 p-2 border rounded-md w-full">
              <option value="ชำระแล้ว">ชำระแล้ว</option>
              <option value="ค้างชำระ">ค้างชำระ</option>
              <option value="อยู่ในสัญญา">อยู่ในสัญญา</option>
            </select>
          </div>

          <div>
            <label for="ReturnMoney" class="block text-sm font-medium text-gray-700">จำนวนเงินที่คืนมาแล้ว : </label>
            <input v-model="edit.ReturnMoney" id="ReturnMoney" class="mt-1 p-2 border rounded-md w-full" />
          </div>

          <div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-1/4">Update</button>
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
const contract = ref({
  LoanDate : '',
  ReturnDate : '',
  Duration : '',
  Status : '',
  Priciple : '',
  Interest : '',
  Penality : '8520',
  ReturnMoney : '',
})


onMounted(async () => {
  try {
    const ConID = route.params.ConID;
    const response = await axios.get(`http://localhost:8800/contract/${ConID}`);
    contract.value = response.data;
    edit.value = { ...response.data };
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
  Penality : '85200',
  ReturnMoney : '',
});

const updateCon = async () => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = ({
      // "ConID": edit.value.ConID,
      // "AID": edit.value.AID,
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
