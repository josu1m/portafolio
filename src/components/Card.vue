<template>
    <div class="card">
        <div class="card-image-container">
            <img :src="image" :alt="title" class="card-image" />
        </div>
        <div class="card-content">
            <span class="card-badge">{{ badge }}</span>
            <h2 class="card-title">{{ title }}</h2>
            <p class="card-description">{{ description }}</p>
            <button class="card-button" @click="onButtonClick">
                {{ buttonText }}
                <span class="button-arrow">→</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
// Define los props usando la interfaz de TypeScript
defineProps<{
    image: string;
    title: string;
    description: string;
    buttonText: string;
    badge: string;
}>()

// Define el evento de emisión para el clic del botón
const emit = defineEmits<{
    (e: 'buttonClick'): void;
}>()

// Función para manejar el clic del botón
const onButtonClick = () => {
    emit('buttonClick');
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

.card {
    background-color: light-dark(#5992c73a, #29292965);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    max-width: 350px;
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
}

.card:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-image-container {
    overflow: hidden;
    height: 200px;
}

.card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.card:hover .card-image {
    transform: scale(1.1);
}

.card-content {
    padding: 15px;
    position: relative;
}

.card-badge {
    position: absolute;
    top: -12px;
    left: 24px;
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    color: light-dark(#000000, #efefec);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.card-title {
    color: light-dark(#000000, #efefec);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 12px;
    transition: color 0.3s ease;
}

.card-title:hover {
    color: #0984e3;
}

.card-title::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #0984e3;
    transition: width 0.3s ease;
}

.card:hover .card-title::after {
    width: 100%;
}

.card-description {
    color: light-dark(#000000, #efefec);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 24px;
}

.card-button {
    background: linear-gradient(45deg, #0984e3, #00cec9);
    color: light-dark(#000000, #efefec);
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.card-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(9, 132, 227, 0.3);
}

.button-arrow {
    margin-left: 8px;
    transition: transform 0.3s ease;
}

.card-button:hover .button-arrow {
    transform: translateX(4px);
}
</style>
<!--      
    
    // Define una referencia tipada para almacenar los datos de las tarjetas
const tarjetas = ref<Tarjeta[]>([]); // Ahora la referencia sabe que es un array de Tarjeta

const handleButtonClick = (title: string) => {
  console.log(`Botón clickeado en la tarjeta: ${title}`);
};

// Obtén los datos de las tarjetas al montar el componente
onMounted(async () => {
  tarjetas.value = await obtenerTarjetas();
});
    <Card v-for="(tarjeta, index) in tarjetas" :key="index" 
      :image="tarjeta.image" 
      :title="tarjeta.title"
      :description="tarjeta.description" 
      :buttonText="tarjeta.buttonText" 
      :badge="tarjeta.badge"
        @buttonClick="handleButtonClick(tarjeta.title)" />
     -->