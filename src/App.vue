<template>
  <header>
    <Navbar />
    <Footer />
    <nav>
      <Dropdown title="DRUM BOOK" :items="drumbook" />
      <Dropdown title="ABOUT" :items="about" />
      <div class="menu-item"><a href="#">CONTACT</a></div>
      <Dropdown title="BUY" :items="buy" />
    </nav>
    <div class="menu-item" @click="isOpen = !isOpen">
      <a href="#">
        {{ title }}
      </a>
      <svg viewBox="0 0 1030 638" width="10">
        <path
          d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
          fill="#OOO"
        ></path>
      </svg>
      <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
          <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import Dropdown from "";
import Navbar from "./Navbar";
import Footer from "./components/Footer";


export default {
  name: "App",
  components: {
    Navbar,
    Dropdown,
    Footer,
  },
  data() {
    return {
      drumbook: [
        {
          title: "PDF-Pages",
          link: "#",
        },
        {
          title: "Vid-Snibs",
          link: "#",
        },
      ],
      about: [
        {
          title: "Kobie Watkins",
          link: "#",
        },
        {
          title: "Drum Book-1",
          link: "#",
        },
        {
          title: "KWG",
          link: "#",
        },
      ],
      buy: [
        {
          title: "Music",
          link: "#",
        },
        {
          title: "Education Material",
          link: "#",
        },
      ],
    };
  },
  props: ["title", "items"],
  methods: {
    isOpen: false,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(92, 105, 105);
}

header {
  width: 100vw;
  background-color: rgb(218, 185, 136);
  color: #000000;
  padding: 15px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  padding: 10px 20px;
  position: relative;
  text-align: center;
  font-size: 12px;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.2s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #5b615f;
  border-bottom-color: #ff5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

a {
  color: #000000;
  font-weight: bolder;
}

nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}

nav .menu-item .sub-menu {
  position: absolute;
  background-color: rgb(218, 185, 136);
  top: calc(100% + 18px);
  left: 50%;
  transform: translate(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
