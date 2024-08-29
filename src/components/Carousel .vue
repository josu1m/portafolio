<template>
    <div class="carousel">
        <div class="carousel-container">
            <div v-for="(slide, index) in displayedSlides" :key="slide.id" class="carousel-slide" :class="{
                'active': index === 1,
                'prev': index === 0,
                'next': index === 2
            }" :style="getSlideStyle(index)">
                <div class="card">
                    <div class="card-image">
                        <img :src="slide.image" :alt="slide.title" />
                    </div>
                    <div class="card-content">
                        <span class="category">{{ slide.category }}</span>
                        <h2>{{ slide.title }}</h2>
                        <p>{{ slide.subtitle }}</p>
                        <div class="location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="location-icon">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            {{ slide.location }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="carousel-indicators">
            <button v-for="(slide, index) in slides" :key="slide.id" class="indicator"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)"
                :aria-label="`Go to slide ${index + 1}`"></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

interface Slide {
    id: number;
    image: string;
    category: string;
    title: string;
    subtitle: string;
    location: string;
}

const props = defineProps<{
    slides: Slide[];
    autoplayInterval?: number;
}>();

const currentIndex = ref(0);
const autoplayTimer = ref<number | null>(null);

const displayedSlides = computed(() => {
    const slidesCount = props.slides.length;
    const prev = (currentIndex.value - 1 + slidesCount) % slidesCount;
    const next = (currentIndex.value + 1) % slidesCount;
    return [
        props.slides[prev],
        props.slides[currentIndex.value],
        props.slides[next]
    ];
});

const getSlideStyle = (index: number) => {
    const baseTransform = `translateX(${(index - 1) * 110}%)`;
    const scale = index === 1 ? 1 : 0.8;
    const translateZ = index === 1 ? 0 : -100;
    const filter = index === 1 ? 'none' : 'blur(2px) brightness(0.7)';

    return {
        transform: `${baseTransform} scale(${scale}) translateZ(${translateZ}px)`,
        filter
    };
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const goToSlide = (index: number) => {
    currentIndex.value = index;
};

const startAutoplay = () => {
    if (props.autoplayInterval) {
        autoplayTimer.value = setInterval(nextSlide, props.autoplayInterval);
    }
};

const stopAutoplay = () => {
    if (autoplayTimer.value) {
        clearInterval(autoplayTimer.value);
    }
};

onMounted(() => {
    startAutoplay();
});

onUnmounted(() => {
    stopAutoplay();
});
</script>

<style scoped>
.carousel {
    position: relative;
    width: 100%;
    height: 85vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: gradientAnimation 15s ease infinite;
    background-size: 400% 400%;
}

@keyframes gradientAnimation {
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

.carousel-container {
    position: relative;
    width: 100%;
    height: 450px;
    perspective: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-slide {
    position: absolute;
    width: 320px;
    height: 420px;
    transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.carousel-slide.active {
    z-index: 2;
}

.carousel-slide.prev,
.carousel-slide.next {
    z-index: 1;
}

.card {
    background-color: light-dark(#4455ee57, #28035398);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.card-image {
    position: relative;
    width: 100%;
    height: 60%;
    overflow: hidden;
}

.card-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-in-out;
}

.card:hover .card-image img {
    transform: scale(1.1);
}

.card-content {
    padding: 20px;
    color: light-dark(#000000, #efefec);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.category {
    background-color: light-dark(#2c328d60, #d851cd4d);
    color: light-dark(#ffffff, #efefec);
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    align-self: flex-start;
    transition: all 0.3s ease-in-out;
}

.card:hover .category {
    background-color: light-dark(#6d460c6e, #05787c6e);
}

h2 {
    margin: 10px 0;
    font-size: 1.5em;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
}

.card:hover h2 {
    transform: translateY(-5px);
}

p {
    margin: 0;
    opacity: 0.8;
    font-size: 0.9em;
    transition: all 0.3s ease-in-out;
}

.card:hover p {
    opacity: 1;
}

.location {
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-size: 0.9em;
    transition: all 0.3s ease-in-out;
}

.location-icon {
    margin-right: 5px;
    width: 16px;
    height: 16px;
}

.carousel-indicators {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: light-dark(#000000, #b9b6b6c7);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.indicator.active {
  background-color: light-dark(#d10a0a57, #61324ce8);
    transform: scale(1.2);
}

@media (max-width: 768px) {
    .carousel {
        height: 80vh;
    }

    .carousel-container {
        height: 380px;
    }

    .carousel-slide {
        width: 280px;
        height: 360px;
    }
}

@media (max-width: 480px) {
    .carousel {
        height: 50vh;
    }

    .carousel-container {
        height: 340px;
    }

    .carousel-slide {
        width: 240px;
        height: 320px;
    }
}


</style>