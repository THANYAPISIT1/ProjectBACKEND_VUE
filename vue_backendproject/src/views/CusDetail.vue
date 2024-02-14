<template>
<section class="bg-light mt-6">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="col-span-1 md:mb-0 md:mr-4">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile Image" class="w-full md:w-auto md:max-w-xs mx-auto mb-4 md:mb-0 rounded-lg shadow-md">
        </div>
        <div v-for="customers in customers" :key="customers.CusID" class="col-span-1">
          <div class="bg-secondary inline-block py-4 px-6 md:py-7 md:px-8 mb-4 md:mb-7 rounded-lg shadow-md">
            <h3 class="text-teal-400 text-3xl mb-1">{{ customers.CusName }}</h3>
            <span class="text-primary text-xl grid grid-cols-2"><p>CustomerID : </p>{{ customers.CusID }}</span>
          </div>
          <ul class="list-none md:list-disc mb-7">
            <li class="mb-3 md:mb-4 text-lg"><span class="text-secondary text-base md:text-lg font-semibold me-2">SSN:</span> {{ customers.SSN }}</li>
            <li class="mb-3 md:mb-4 text-lg"><span class="text-secondary text-base md:text-lg font-semibold me-2">PhoneNo. :</span> {{ customers.CusPhoneNo }}</li>
            <li class="mb-3 md:mb-4 text-lg"><span class="text-secondary text-base md:text-lg font-semibold me-2">Income :</span> {{ customers.Income }}</li>
            <li class="mb-3 md:mb-4 text-lg"><span class="text-secondary text-base md:text-lg font-semibold me-2">Facebook :</span> {{ customers.Facebook }}</li>
            <li class="mb-3 md:mb-4 text-lg"><span class="text-secondary text-base md:text-lg font-semibold me-2">สินทรัพย์ :</span>{{ customers.Asset }}</li>
            <li class="text-lg"><span class="text-secondary text-base md:text-lg font-semibold me-2">ที่อยู่:</span>{{ customers.Address }}</li>
          </ul>
          <ul class="flex list-none mb-0 space-x-4">
            <li><a href="#!" class="text-xl"><i class="ti-twitter-alt"></i></a></li>
            <li><a href="#!" class="text-xl"><i class="ti-facebook"></i></a></li>
            <li><a href="#!" class="text-xl"><i class="ti-pinterest"></i></a></li>
            <li><a href="#!" class="text-xl"><i class="ti-instagram"></i></a></li>
          </ul>
        </div>
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


onMounted(async () => {
  try {
    const CusID = route.params.CusID;
    const response = await axios.get(`http://localhost:8800/customers/${CusID}`);
    customers.value = response.data;
  } catch (error) {
    console.error(error);
  }
});


</script>

<style>

</style>