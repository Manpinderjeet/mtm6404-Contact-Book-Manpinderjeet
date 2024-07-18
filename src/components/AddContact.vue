<template>
    <form @submit.prevent="addContact">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input v-model="firstName" type="text" class="form-control" id="firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input v-model="lastName" type="text" class="form-control" id="lastName" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" class="form-control" id="email" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Add Contact</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'AddContact',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    },
    methods: {
      addContact() {
        const newContact = {
          id: Date.now(),
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        };
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/');
      },
    },
  };
  </script>
  