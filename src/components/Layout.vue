<template>
  <header class="site-header">
    <nav class="navbar" :class="{ 'nav-open': isMenuOpen }" ref="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">Mi Sitio</div>
        <button
          class="navbar-toggle"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="toggle-bar"></span>
          <span class="toggle-bar"></span>
          <span class="toggle-bar"></span>
        </button>
        <ul class="navbar-menu">
          <li class="menu-item">
            <a href="#inicio" @click="closeMenu" class="menu-link">Inicio</a>
          </li>
          <li class="menu-item">
            <a href="#acerca" @click="closeMenu" class="menu-link">Acerca</a>
          </li>
          <li class="menu-item dropdown">
            <a
              href="#"
              @click.prevent="toggleDropdown"
              class="menu-link dropdown-toggle"
            >
              Servicios
              <span class="arrow" :class="{ 'arrow-open': isDropdownOpen }"
                >&#9662;</span
              >
            </a>
            <ul
              class="dropdown-menu"
              :class="{ 'dropdown-open': isDropdownOpen }"
            >
              <li class="dropdown-item">
                <a href="#servicio1" @click="closeMenu" class="dropdown-link"
                  >Servicio 1</a
                >
              </li>
              <li class="dropdown-item">
                <a href="#servicio2" @click="closeMenu" class="dropdown-link"
                  >Servicio 2</a
                >
              </li>
              <li class="dropdown-item">
                <a href="#servicio3" @click="closeMenu" class="dropdown-link"
                  >Servicio 3</a
                >
              </li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#contacto" @click="closeMenu" class="menu-link"
              >Contacto</a
            >
          </li>
          <li class="menu-item">
            <button
              class="menu-link boton-theme"
              style="
                margin: 6px;
                padding: 6px;
                border: none;
                border-radius: 50%;
              "
            >
              <Theme />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Theme from "./Theme.vue";

const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);
const navbar = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) {
    isDropdownOpen.value = false;
  }
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
  isDropdownOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (navbar.value && !navbar.value.contains(event.target as Node)) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.site-header {
  background-color: light-dark(#cbcdcf, #1a1b1e);
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: light-dark(#333, #ffffff);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.navbar-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  padding-right: 1.8rem;
}

.toggle-bar {
  display: block;
  width: 25px;
  height: 2px;
  background-color: light-dark(#333, #ffffff);
  margin: 5px 0;
  transition: 0.3s;
}

.navbar-menu {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  position: relative;
}

.menu-link {
  color: light-dark(#333, #e0e0e0);
  text-decoration: none;
  padding: 0.75rem 1rem;
  display: block;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
}

.menu-link:hover,
.menu-link:focus {
  color: light-dark(#0056b3, #64b5f6);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: light-dark(#ffffff, #2c2d30);
  min-width: 200px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-10px);
}

.dropdown-menu.dropdown-open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  padding: 0.75rem 1rem;
  color: light-dark(#333, #e0e0e0);
  transition: all 0.3s ease;
  display: block;
  text-decoration: none;
}

.dropdown-link:hover,
.dropdown-link:focus {
  color: light-dark(#0056b3, #64b5f6);
  background-color: light-dark(#f8f9fa, #3a3b3f);
}

.arrow {
  display: inline-block;
  margin-left: 5px;
  transition: transform 0.3s;
}

.arrow-open {
  transform: rotate(180deg);
}

.boton-theme {
  background-color: light-dark(#e0e0e0, #3a3b3f);
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.boton-theme:hover {
  background-color: light-dark(#d0d0d0, #4a4b4f);
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }

  .nav-open .toggle-bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .nav-open .toggle-bar:nth-child(2) {
    opacity: 0;
  }

  .nav-open .toggle-bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .navbar-menu {
    position: fixed;
    top: 58px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background-color: light-dark(
      rgba(202, 207, 212, 0.95),
      rgba(26, 27, 30, 0.95)
    );
    padding-top: 0.2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .nav-open .navbar-menu {
    transform: translateX(0);
  }

  .dropdown-menu {
    position: static;
    background-color: light-dark(#e8eef3, #35363a);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    box-shadow: none;
    transform: none;
  }

  .dropdown-menu.dropdown-open {
    max-height: 500px;
  }

  .menu-link,
  .dropdown-link {
    padding: 1rem 1.25rem;
  }
}
</style>
