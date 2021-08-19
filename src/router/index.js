import { createRouter, createWebHistory } from "vue-router";
import DrumBook from "../views/DrumBook";
import About from "../views/About";
import Contacts from "../views/Contacts";

const routes = [
  {
    path: "/",
    name: "DRUM BOOK",
    component: DrumBook,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
