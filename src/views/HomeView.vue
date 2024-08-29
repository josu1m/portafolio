<template>
  <div>
    <Carousel :slides="slides" :autoplayInterval="5000" />
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel .vue';

import { slides } from '../ts/slides'; // Importa el archivo TypeScript

</script>
