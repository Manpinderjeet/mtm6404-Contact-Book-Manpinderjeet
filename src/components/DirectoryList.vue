<template>
    <div>
      <input v-model="searchQuery" class="form-control mb-3" placeholder="Search Contacts" />
      <ul class="list-group">
        <li v-for="contact in filteredContacts" :key="contact.id" class="list-group-item d-flex justify-content-between align-items-center">
          <router-link :to="{ path: '/contact/' + contact.id }">{{ contact.firstName }} {{ contact.lastName }}</router-link>
          <div>
            <router-link :to="{ path: '/edit/' + contact.id }" class="btn btn-warning btn-sm me-2">Edit</router-link>
            <button @click="deleteContact(contact.id)" class="btn btn-danger btn-sm">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DirectoryList',
    data() {
      return {
        contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
        searchQuery: '',
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts
          .filter(contact =>
            contact.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          .sort((a, b) => a.lastName.localeCompare(b.lastName));
      },
    },
    methods: {
      deleteContact(id) {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      },
    },
  };
  </script>
  