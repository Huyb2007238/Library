
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AddBookView from '../views/AddBookView.vue';
// import StoredBook from '../views/StoredBook.vue';
// import EditBookView from '../views/EditBookView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        // {
        //     path: '/admin/books/create',
        //     name: 'add-book',
        //     component: AddBookView
        // },
        // {
        //     path: '/admin/stored/books',
        //     name: 'stored-book',
        //     component: StoredBook
        // },
        // {
        //     path: '/admin/books/:id/edit',
        //     name: 'edit-book',
        //     component: EditBookView
        // },
        {
            path: '/auth/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/auth/register',
            name: 'register',
            component: RegisterView
        }
    ]
})

export default router
