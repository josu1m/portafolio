<template>
  <header>
    <nav class="navbar" ref="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <RouterLink to="/" class="navbar-logo">ModernNav</RouterLink>
          <button class="navbar-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
            <span class="sr-only">Toggle navigation</span>
            <div class="hamburger-icon" :class="{ open: isMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <Transition name="navbar-slide">
          <div v-show="isMenuOpen || !isMobile" class="navbar-menu" :class="{ open: isMenuOpen }">
            <NavbarItem v-for="item in menuItems" :key="item.id" :item="item" @close-menu="closeMenu" />
            <Theme class="navbar-item theme-item" />
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import NavbarItem from "./NavbarItem.vue";
import Theme from "./Theme.vue";
import { useNavbar } from "../ts/menuItems";

const {
  menuItems,
  isMenuOpen,
  isMobile,
  toggleMenu,
  closeMenu,
  handleClickOutside,
  handleResize,
} = useNavbar();

const navbar = ref<HTMLElement | null>(null);

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.navbar {
  background-color: light-dark(#efedea, #202020);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  font-family: "Roboto", sans-serif;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: light-dark(#000000, #efefec);
  transition: color 0.3s ease;
  background: linear-gradient(45deg, #3498db, #8e44ad);
  background-size: 200% 200%;
  animation: gradientShift 5s ease infinite;
  background-clip: text;
  color: transparent;

}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger-icon {
  width: 30px;
  height: 20px;
  position: relative;
  transition: 0.5s ease-in-out;
}

.hamburger-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: light-dark(#000000, #efefec);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

.hamburger-icon span:nth-child(1) {
  top: 0px;
}

.hamburger-icon span:nth-child(2) {
  top: 10px;
}

.hamburger-icon span:nth-child(3) {
  top: 20px;
}

.hamburger-icon.open span:nth-child(1) {
  top: 10px;
  transform: rotate(135deg);
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger-icon.open span:nth-child(3) {
  top: 10px;
  transform: rotate(-135deg);
}

.navbar-menu {
  display: flex;
  gap: 1rem;
  align-items: center;
  /* Alinea verticalmente los elementos */
}

.navbar-slide-enter-active,
.navbar-slide-leave-active {
  transition: all 0.3s ease-out;
}

.navbar-slide-enter-from,
.navbar-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.theme-item {
  display: flex;
  align-items: center;
  padding: 10px;
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-brand {
    width: 100%;
    justify-content: space-between;
  }

  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: light-dark(#efedea, #313030);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.open {
    padding: 1rem;
  }

  .theme-item {
    width: 16%;
    padding: 20px;
  }
}
</style>
