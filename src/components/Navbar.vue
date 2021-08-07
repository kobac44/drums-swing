<template>
  <nav>
    <Dropdown title="DRUM BOOK" :items="drumbook" />
    <Dropdown title="ABOUT" :items="about" />
    <div class="menu-item"><a href="#">CONTACT</a></div>
    <Dropdown title="BUY" :items="buy" />
  </nav>
</template>

<script>
import Dropdown from "./Dropdown";

export default {
  name: "navbar",
  components: {
    Dropdown,
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
};
</script>

<style>
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
</style>
