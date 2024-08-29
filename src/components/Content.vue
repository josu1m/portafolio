<template>
    <div class="content-main">
        <slot />
    </div>
</template>

<style scoped>
.content-main {
    display: grid;
    /* Usamos grid para el layout */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* Definimos columnas adaptables */
    gap: 1rem;
    /* Espacio entre columnas y filas */
    border-radius: 10px;
    padding: 0.5rem;
    border: 1px solid light-dark(#d3d3d328, #33333317);
    box-shadow: 0 4px 6px light-dark(#cac9c9, #635cd357);
    max-width: 100%;
    margin: 15px auto;
    /* Centra el contenedor horizontalmente */
    transition: all 0.3s ease-in-out;
    font-family: "Roboto", sans-serif;
    justify-items: center;
    /* Centra los elementos de la cuadrícula horizontalmente */
}

/* Media Queries para diferentes pantallas */

/* Pantallas grandes */
@media (min-width: 1200px) {
    .content-main {
        padding: 2rem;
        grid-template-columns: repeat(4, 1fr);
        /* 4 columnas en pantallas grandes */
        box-shadow: 0 6px 10px light-dark(#b8b8b8, #44444457);
    }
}

/* Pantallas medianas */
@media (min-width: 768px) and (max-width: 1199px) {
    .content-main {
        padding: 1rem;
        grid-template-columns: repeat(2, 1fr);
        /* 2 columnas en pantallas medianas */
        box-shadow: 0 5px 8px light-dark(#c2c2c2, #55555547);
    }
}

/* Pantallas pequeñas */
@media (max-width: 767px) {
    .content-main {
        padding: 0.5rem;
        grid-template-columns: 1fr;
        /* 1 columna en pantallas pequeñas */
        box-shadow: 0 4px 6px light-dark(#cac9c9, #635cd357);
    }
}
</style>
