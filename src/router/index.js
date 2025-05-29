import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "../public/pages/home.component.vue";
import CategoryValidationComponent from "../transaction/component/category-validation.component.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [

        {path: '/:pathMatch(.*)*', redirect: '/home'},

        {path: '/home',   name: 'Home',    component: HomeComponent,   meta: { title: 'Home' }},
        {path: '/countries/transaction-category/details/new', name, component: CategoryValidationComponent, meta: { title: 'Transaction'}},

    ]
});


router.beforeEach((to, from, next) => {
    let baseTitle = 'ElixirLine';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})




export default router;