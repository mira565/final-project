import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Main from "./modules/main/Main-page.vue";
import About from "./modules/about/About-page.vue";
import Products from "./modules/main/components/products/Products-page.vue";
import AddProduct from "./modules/admin/Admin-page.vue";
import Basket from "./modules/contacts/Basket-page.vue";
import Details from "./modules/main/components/products/Products-details.vue";
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/basket",
      name: "basket",
      component: Basket,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/add-product",
      name: "add-product",
      component: AddProduct,
    },
    {
      path: "/product/:id",
      name: "product",
      component: Details,
    },
  ],
});
