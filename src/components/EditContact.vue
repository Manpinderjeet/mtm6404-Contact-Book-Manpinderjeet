<template>
    <form @submit.prevent="editContact">
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
      <button type="submit" class="btn btn-primary mt-3">Edit Contact</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'EditContact',
    props: ['id'],
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    },
    created() {
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const contact = contacts.find(contact => contact.id === parseInt(this.id));
      if (contact) {
        this.firstName = contact.firstName;
        this.lastName = contact.lastName;
        this.email = contact.email;
      }
    },
    methods: {
      editContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        const index = contacts.findIndex(contact => contact.id === parseInt(this.id));
        if (index !== -1) {
          contacts[index].firstName = this.firstName;
          contacts[index].lastName = this.lastName;
          contacts[index].email = this.email;
          localStorage.setItem('contacts', JSON.stringify(contacts));
          this.$router.push('/');
        }
      },
    },
  };
  </script>
  