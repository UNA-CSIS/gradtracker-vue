import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SetupVue from "@/views/SetupVue.vue";
import SampleForm from "@/views/SampleForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/setupvue",
    name: "SetupVue",
    component: SetupVue
  },
  {
    path: "/sampleform",
    name: "SampleForm",

    component: SampleForm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
