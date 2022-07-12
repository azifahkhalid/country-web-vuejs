import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/country",
    name: "countries",
    component: () => import("./components/CountryList")
  },
  {
    path: "/country/:code",
    name: "country-details",
    component: () => import("./components/CountryDetail")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;