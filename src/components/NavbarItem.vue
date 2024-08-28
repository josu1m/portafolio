<template>
  <div v-if="item.children" class="navbar-dropdown" ref="dropdownRef">
    <button class="navbar-item dropdown-trigger" @click="toggleDropdown">
      {{ item.label }}
      <span class="dropdown-arrow" :class="{ open: isDropdownOpen }">▼</span>
    </button>
    <Transition name="dropdown">
      <div v-show="isDropdownOpen" class="dropdown-menu">
        <RouterLink
          v-for="child in item.children"
          :key="child.id"
          :to="child.route"
          class="dropdown-item"
          @click="closeMenu"
        >
          {{ child.label }}
        </RouterLink>
      </div>
    </Transition>
  </div>
  <RouterLink
    v-else
    :to="item.route || ''"
    class="navbar-item"
    @click="closeMenu"
    :class="{ active: isActive(item.route || '') }"
  >
    {{ item.label }}
  </RouterLink>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const props = defineProps<{
  item: {
    id: number;
    label: string;
    route?: string;
    children?: { id: number; label: string; route: string }[];
  };
}>();

const emit = defineEmits<{
  (e: "close-menu"): void;
}>();

const isDropdownOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const isActive = computed(() => (path: string) => path && route.path === path);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeMenu = () => {
  isDropdownOpen.value = false;
  emit("close-menu");
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isDropdownOpen.value = false;
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
.navbar-item,
.dropdown-item,
.dropdown-trigger {
  text-decoration: none;
  color: light-dark(#000000, #efefec);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
}

.navbar-item::after,
.dropdown-item::after,
.dropdown-trigger::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: light-dark(#26979b, #0f61cc);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.navbar-item:hover::after,
.dropdown-item:hover::after,
.dropdown-trigger:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.navbar-item:hover,
.dropdown-item:hover,
.dropdown-trigger:hover {
  color: light-dark(#3d4a86, #acac0b);
}

.navbar-dropdown {
  position: relative;
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  margin-left: 0.25rem;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: light-dark(#efedea, #202020cc);
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-width: 200px;
  overflow: hidden;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease-out;
  overflow: hidden;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  max-height: 0;
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  max-height: 300px;
}

.navbar-item.active {
  color: light-dark(#3d4a86, #acac0b);
  font-weight: bold;
}

.navbar-item:hover {
  transform: translateY(-2px);
}

.dropdown-item:hover {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .navbar-item,
  .dropdown-trigger {
    opacity: 0;
    transform: translateY(-20px);
  }

  .navbar-menu.open .navbar-item,
  .navbar-menu.open .dropdown-trigger {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .navbar-dropdown {
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    background-color: transparent;
  }

  .dropdown-item {
    padding-left: 2rem;
  }
}
</style>
