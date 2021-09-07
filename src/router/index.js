import { createRouter, createWebHistory } from "vue-router";
import DrumBook from "../views/DrumBook";
import About from "../views/About";
import Contact from "../views/Contact";
import BUY from "../views/BUY";

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
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    Path: "/buy",
    name: "BUY",
    component: BUY,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
