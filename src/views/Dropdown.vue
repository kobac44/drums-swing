<template>
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
</template>

<script>
export default {
  name: "dropdown",
  // props: ["title", "items"],
}
</script>

<style scoped>
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