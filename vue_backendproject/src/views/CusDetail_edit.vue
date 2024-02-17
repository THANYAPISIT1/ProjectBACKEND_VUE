<template>
  <section class="bg-light mt-6">
    <router-link to="/customer" class="text-blue-500 px-4 py-2">Back</router-link>
      <div class="container mx-auto p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="col-span-1 md:mb-0 md:mr-4">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile Image" class="w-full md:w-auto md:max-w-xs mx-auto mb-4 md:mb-0 rounded-lg shadow-md">
          </div>
        <form @submit.prevent="updateCus">
          <div v-for="customers in customers" :key="customers.CusID" class="col-span-1">
            <div class="bg-secondary inline-block py-4 px-6 md:py-7 md:px-8 mb-4 md:mb-7 rounded-lg shadow-md">
              <span class="text-primary text-xl grid grid-cols-2"><p>CustomerID : </p>{{ customers.CusID }}</span>
            </div>
            <div>
              <label for="CusName" class="block text-sm font-medium text-gray-700">Name : </label>
              <input v-model="edit.CusName" id="CusName" class="mt-1 p-2 border rounded-md w-1/2" />
            </div>
            <div>
              <label for="Address" class="block text-sm font-medium text-gray-700">Address : </label>
              <input v-model="edit.Address" id="Address" class="mt-1 p-2 border rounded-md w-1/2" />
            </div>
            <div>
              <label for="SSN" class="block text-sm font-medium text-gray-700">SSN : </label>
              <input v-model="edit.SSN" id="SSN" class="mt-1 p-2 border rounded-md w-1/2" />
            </div>
            <div>
              <label for="CusPhoneNo" class="block text-sm font-medium text-gray-700">PhoneNo : </label>
              <input v-model="edit.CusPhoneNo" id="CusPhoneNo" class="mt-1 p-2 border rounded-md w-1/2" />
            </div>
            <div>
              <label for="Income" class="block text-sm font-medium text-gray-700">Income : </label>
              <input v-model="edit.Income" id="Income" class="mt-1 p-2 border rounded-md w-1/2" />
            </div>
            <div>
              <label for="Facebook" class="block text-sm font-medium text-gray-700">Facebook : </label>
              <input v-model="edit.Facebook" id="Facebook" class="mt-1 p-2 border rounded-md w-1/2" />
            </div>
            <div>
              <label for="Asset" class="block text-sm font-medium text-gray-700">Asset : </label>
              <input v-model="edit.Asset" id="Asset" class="mt-1 p-2 border rounded-md w-1/2" />
            </div>

            <div>
              <button @click="showAlert" type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-1/4">Update</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </section>
  
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router'
  
  const customers = ref([]);
  const route = useRoute();

  const showAlert = () => {
    alert('Customer has been update!'); 
  };
  
  onMounted(async () => {
    try {
      const CusID = route.params.CusID;
      const response = await axios.get(`http://localhost:8800/customers/${CusID}`);
      customers.value = response.data;
      edit.value = { ...response.data[0] };
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  });
  const edit = ref({
    CusName: '',
    SSN : '',
    CusPhoneNo : '',
    Income : '',
    Facebook : '',
    Asset : '',
    Address : '',
  });

  const updateCus = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = ({
        "CusName": edit.value.CusName,
        "SSN": edit.value.SSN,
        "Address": edit.value.Address,
        "CusPhoneNo": edit.value.CusPhoneNo,
        "Income": edit.value.Income,
        "Facebook": edit.value.Facebook,
        "Asset": edit.value.Asset,
      });

      console.log(raw);
      const CusID = route.params.CusID;
      await axios.post(`http://localhost:8800/customers/edit/${CusID}`,{raw});
      console.log("customers updated successfully");
    } catch (error) {
      console.error("Error updating customers", error);
    }
  };

  </script>
  
  <style>
  
  </style>