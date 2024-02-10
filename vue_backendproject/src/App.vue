<script setup>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div id="app" class="flex">
    <!-- Sidebar Component -->
    <Sidebar />

    <!-- Main Content -->
    <div id="main-content" class="flex-1 ml-64 p-4">
      <!-- Your main content goes here -->
      <router-view />
      
    </div>
  </div>
  
  
</template>

<style>
  body {
    font-family: 'Kanit', sans-serif;
  }
</style>