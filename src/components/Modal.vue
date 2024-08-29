<template>
    <Transition name="modal-fade" appear>
        <div v-if="isVisible" class="modal-wrapper">
            <div class="modal-backdrop"></div>
            <div class="modal-overlay" @click="closeModal">
                <Transition name="modal-zoom" appear>
                    <div :class="['modal-content', modalSizeClass]" @click.stop>
                        <header class="modal-header">
                            <h2 class="modal-title">{{ title }}</h2>
                            <button class="close-button" @click="closeModal" aria-label="Close modal">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </header>
                        <main class="modal-main">
                            <slot name="content">Modal Content</slot>
                        </main>
                        <footer class="modal-footer">
                            <slot name="footer">
                                <button class="modal-button" @click="closeModal">Close</button>
                            </slot>
                        </footer>
                    </div>
                </Transition>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';

interface Props {
    title: string;
    isVisible: boolean;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
}

const props = withDefaults(defineProps<Props>(), {
    size: 'medium'
});

const emit = defineEmits<{
    (e: 'close'): void;
}>();

const closeModal = () => {
    emit('close');
};

const modalSizeClass = computed(() => `modal-${props.size}`);

watch(() => props.isVisible, (newValue) => {
    if (newValue) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});
</script>

<style scoped>
.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
}

.modal-overlay {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.modal-content {
    background-color: #ffffff;
    color: #333333;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);

}

.modal-small {
    width: 30%;
}

.modal-medium {
    width: 60%;
}

.modal-large {
    width: 70%;
}

.modal-xlarge {
    width: 95%;
}

.modal-header {
    background-color:  #f8f8f8;
    border-bottom: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
}

.modal-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    color:  #2c3e50;
}

.modal-main {
    overflow-y: auto;
    flex-grow: 1;
    padding:0;
    margin:5px;
}

.modal-footer {
    background-color: #f8f8f8;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between; /* Distribuye el espacio entre los elementos */
    padding: 6px;
    padding-right: 20px;
    padding-left: 20px;
}



.close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 1px;
    color:  #999;
    transition: all 0.3s ease;
    border-radius: 50%;
}

.close-button:hover {
    color:  #333;
    background-color: rgba(0, 0, 0, 0.05);
    transform: rotate(90deg);
}

.modal-button {
    background-color:  #3498db;
    color:  #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.modal-button:hover {
    background-color:  #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Enhanced Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-zoom-enter-active,
.modal-zoom-leave-active {
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-zoom-enter-from,
.modal-zoom-leave-to {
    transform: scale(0.9);
    opacity: 0;
}

@media (max-width: 768px) {
  .modal-content {
    width: 80%;
  }
}
@media (max-width: 460px) {
  .modal-content {
    width: 90%;
  }
}
</style>
<!-- 

    const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

      <button @click="openModal">Abrir Modal Grande</button>
      <Modal title="Modal Grande" :isVisible="isModalVisible" size="small" @close="closeModal">
        <template #content>
          Lorem 
        </template>
        <template #footer>
          <button @click="closeModal">Cancelar</button>
          <button>Guardar</button>
        </template>
      </Modal>
 -->