<template>
    <div>
      <h1>Contact Directory</h1>
      <router-link to="/add" class="btn btn-primary mb-3">Add New Contact</router-link>
      <DirectoryList />
    </div>
  </template>
  
  <script>
  import DirectoryList from '../components/DirectoryList.vue';
  
  export default {
    name: 'HomeView',
    components: {
      DirectoryList,
    },
  };
  </script>
  