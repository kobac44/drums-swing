/* eslint-disable no-undef */
import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../components/Navbar";
import DrumBook from "../components/DrumBook";
import About from "../views/About";

const routes = [
  {
    path: "/Navbar",
    name: "Navbar",
    component: Navbar,
  },
  {
    path: "/drumbook",
    name: "DRUM BOOK",
    component: DrumBook,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
