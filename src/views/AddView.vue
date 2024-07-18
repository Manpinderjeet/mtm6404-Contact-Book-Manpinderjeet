<template>
    <div>
      <h1>Add New Contact</h1>
      <AddContact />
    </div>
  </template>
  
  <script>
  import AddContact from '../components/AddContact.vue';
  
  export default {
    name: 'AddView',
    components: {
      AddContact,
    },
  };
  </script>
  