<template>
    <div>
      <h1>Edit Contact</h1>
      <EditContact :id="$route.params.id" />
    </div>
  </template>
  
  <script>
  import EditContact from '../components/EditContact.vue';
  
  export default {
    name: 'EditView',
    components: {
      EditContact,
    },
  };
  </script>
  