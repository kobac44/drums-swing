<template>
  <nav>
    <Dropdown title="DRUM BOOK" :items="drumbook" />
    <Dropdown title="ABOUT" :items="about" />
    <Dropdown title="BUY" :items="buy" />
    <div class="menu-item"><a href="#">Contact</a></div>
  </nav>
</template>

<script>
import Dropdown from "../views/Dropdown";

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
  props: ["title", "items"],
  methods: {
    isOpen: true,
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

/* div .menu-item a {
  text-decoration: none;
  color: #000;
  width: 10px;
} */
</style>
