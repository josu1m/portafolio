<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<template>
  <div class="contenedor-todo">
    <Navbar />
    <main>
      <slot />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style>
.contenedor-todo {
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
main{
  padding-top: 40px;
  margin: 6px;
}
</style>
