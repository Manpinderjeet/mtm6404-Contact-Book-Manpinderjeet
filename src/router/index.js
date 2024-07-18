import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddView from '../views/AddView.vue';
import EditView from '../views/EditView.vue';
import ContactDetails from '../views/ContactDetails.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/add', component: AddView },
  { path: '/edit/:id', component: EditView, props: true },
  { path: '/contact/:id', component: ContactDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
