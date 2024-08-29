<template>
  <Layout>
    <Carousel :slides="slides" :autoplayInterval="5000" />

    <button @click="openModal">Abrir Modal Grande</button>
    <Modal title="Modal Grande" :isVisible="isModalVisible" size="small" @close="closeModal">
      <template #content>
        Lorem
      </template>
      <template #footer>
        <button @click="closeModal" style="background-color: crimson; margin: 6px; padding: 6px; border-radius: 10px; border: none;">Cancelar</button>
        <button style="background-color: blueviolet; margin: 6px; padding: 6px; border-radius: 10px; border: none;">Guardar</button>
      </template>
    </Modal>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue';
import Carousel from '@/components/Carousel .vue';
import { slides } from '../ts/slides';
import Modal from '../components/Modal.vue';
import { ref } from 'vue';

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>
