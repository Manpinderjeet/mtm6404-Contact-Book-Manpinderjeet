<template>
    <div>
      <h1>Contact Details</h1>
      <div v-if="contact">
        <p><strong>First Name:</strong> {{ contact.firstName }}</p>
        <p><strong>Last Name:</strong> {{ contact.lastName }}</p>
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <router-link :to="{ path: '/edit/' + contact.id }" class="btn btn-warning btn-sm me-2">Edit</router-link>
        <button @click="deleteContact(contact.id)" class="btn btn-danger btn-sm me-2">Delete</button>
        <router-link to="/" class="btn btn-secondary btn-sm">Back to Contacts</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactDetails',
    props: ['id'],
    data() {
      return {
        contact: null,
      };
    },
    created() {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      this.contact = contacts.find(contact => contact.id === parseInt(this.id));
    },
    methods: {
      deleteContact(id) {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts = contacts.filter(contact => contact.id !== id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');
      },
    },
  };
  </script>
  