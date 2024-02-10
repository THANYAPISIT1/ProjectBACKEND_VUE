<template>
  <div>
    <!-- Top Section -->
    <div class="bg-gray-200 p-4 flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="Person" class="w-12 h-12 object-cover rounded-full mr-4">
      <div>
        <h1 class="text-2xl font-bold">สัญญาการกู้ยืมเงิน</h1>
        <!-- <p class="mt-2 text-gray-600">Description or any other content goes here.</p> -->
      </div>
      <router-link to="/Form" class="text-blue-500 px-4 py-2 ml-auto">
        <button @click="goToForm" class="bg-blue-500 text-white px-4 py-2 rounded-md ">Add Data</button>
      </router-link>
    </div>

    <!-- Data Grid Section -->
    <div class="mt-4 p-4">
      <table class="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">ContactID</th>
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Status</th>
            <th class="py-2 px-4 border-b">ReturnDate</th>
            <th class="py-2 px-4 border-b">Description</th>
          </tr>
        </thead>
        <tbody>
          <!-- Your data rows go here -->
          <!-- For example: -->
          <tr>
            <td class="py-2 px-4 border-b">1</td>
            <td class="py-2 px-4 border-b">John Doe</td>
            <td class="py-2 px-4 border-b">Active</td>
            <td class="py-2 px-4 border-b">2022-02-15</td>
            <td class="py-2 px-4 border-b">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
          </tr>
          <!-- ... Repeat for other data rows -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const goToForm = () => {
  const router = useRouter();
  router.push('/Form'); // Replace '/form' with the route where your Form.vue is located
};
</script>

