<template>
  <button
    @click="cycleTheme"
    class="theme-switcher"
    :aria-label="getAriaLabel()"
    :title="getThemeLabel(currentTheme)"
    style="cursor: pointer"
  >
    <i :class="currentThemeIcon"></i>
    <span v-if="currentTheme === 'light'" class="sr-only">Tema claro</span>
    <span v-else-if="currentTheme === 'dark'" class="sr-only">Tema oscuro</span>
    <span v-else class="sr-only">Tema del sistema</span>
  </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

type Theme = "light" | "dark" | "system";

const themes: Theme[] = ["light", "dark", "system"];
const currentTheme = ref<Theme>("system");

const currentThemeIcon = computed(() => {
  switch (currentTheme.value) {
    case "light":
      return "fas fa-sun";
    case "dark":
      return "fas fa-moon";
    default:
      return "fas fa-adjust";
  }
});

const applyTheme = (theme: "light" | "dark") => {
  document.documentElement.setAttribute("data-theme", theme);
};

const applySystemTheme = () => {
  document.documentElement.removeAttribute("data-theme");
};

const cycleTheme = () => {
  const currentIndex = themes.indexOf(currentTheme.value);
  const nextIndex = (currentIndex + 1) % themes.length;
  currentTheme.value = themes[nextIndex];
  changeTheme(currentTheme.value);
};

const changeTheme = (theme: Theme) => {
  if (theme === "system") {
    applySystemTheme();
  } else {
    applyTheme(theme);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);
  }
};

const getThemeLabel = (theme: Theme): string => {
  switch (theme) {
    case "light":
      return "Tema claro";
    case "dark":
      return "Tema oscuro";
    case "system":
      return "Tema del sistema";
  }
};

const getAriaLabel = (): string => {
  return `Cambiar tema (actual: ${getThemeLabel(currentTheme.value)})`;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    currentTheme.value = (localStorage.getItem("theme") as Theme) || "system";
  }
  changeTheme(currentTheme.value);
});
</script>

<style>
.theme-switcher {
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  outline: none;
  border: none;
  background-color: unset;
}

.theme-switcher:focus {
  outline: none;
}

i {
  font-size: 24px;
  color: light-dark(#000000, #ffffff);
}

[data-theme="light"] {
  color-scheme: light;
}

[data-theme="dark"] {
  color-scheme: dark;
}
</style>
