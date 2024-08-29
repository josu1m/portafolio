// tarjetas.ts

// Interfaz para definir la estructura de los datos de las tarjetas
export interface Tarjeta {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    badge: string;
}

// Datos ficticios para simular una respuesta de una API
export const tarjetas: Tarjeta[] = [
    {
        image: 'https://elcomercio.pe/resizer/BQwWU2WWHigKl9USqhby8Ysl0yw=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6FEC2OXJGRHINHSFLCTKWXUUEA.jpg',
        title: 'Explora el Mundo',
        description: 'Descubre lugares increíbles y aventuras inolvidables alrededor del mundo.',
        buttonText: 'Ver más',
        badge: 'Nuevo',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ESO-VLT-Laser-phot-33a-07.jpg/1200px-ESO-VLT-Laser-phot-33a-07.jpg',
        title: 'Tecnología Moderna',
        description: 'Mantente al día con los últimos avances tecnológicos y gadgets.',
        buttonText: 'Explorar',
        badge: 'Popular',
    },
    {
        image: 'https://via.placeholder.com/300x200.png?text=Imagen+3',
        title: 'Estilo de Vida Saludable',
        description: 'Aprende cómo llevar un estilo de vida más saludable con estos simples consejos.',
        buttonText: 'Leer Más',
        badge: 'Recomendado',
    },
    {
        image: 'https://via.placeholder.com/300x200.png?text=Imagen+4',
        title: 'Arte y Cultura',
        description: 'Sumérgete en el fascinante mundo del arte y la cultura contemporánea.',
        buttonText: 'Descubrir',
        badge: 'En tendencia',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ESO-VLT-Laser-phot-33a-07.jpg/1200px-ESO-VLT-Laser-phot-33a-07.jpg',
        title: 'Cocina Internacional',
        description: 'Explora recetas de todo el mundo y cocina como un chef profesional.',
        buttonText: 'Cocinar ahora',
        badge: 'Favorito',
    },
];

// Función para simular la obtención de datos de la API
export const obtenerTarjetas = (): Promise<Tarjeta[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tarjetas);
        }, 1000); // Simula un retraso de 1 segundo para obtener los datos
    });
};
