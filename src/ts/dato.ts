// dato.ts

// Interfaz para definir la estructura de los datos de usuario
export interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    edad: number;
    direccion: {
        calle: string;
        ciudad: string;
        pais: string;
    };
    imagen: string; // Nueva propiedad para la URL de la imagen
}

// Datos ficticios para simular una respuesta de una API
export const usuarios: Usuario[] = [
    {
        id: 1,
        nombre: 'Juan Pérez',
        correo: 'juan.perez@example.com',
        edad: 28,
        direccion: {
            calle: 'Calle Falsa 123',
            ciudad: 'Ciudad de México',
            pais: 'México',
        },
        imagen: 'https://randomuser.me/api/portraits/men/1.jpg', // URL de imagen ficticia
    },
    {
        id: 2,
        nombre: 'María Gómez',
        correo: 'maria.gomez@example.com',
        edad: 34,
        direccion: {
            calle: 'Avenida Siempre Viva 742',
            ciudad: 'Buenos Aires',
            pais: 'Argentina',
        },
        imagen: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        id: 3,
        nombre: 'Carlos Sánchez',
        correo: 'carlos.sanchez@example.com',
        edad: 41,
        direccion: {
            calle: 'Rua Inventada 567',
            ciudad: 'São Paulo',
            pais: 'Brasil',
        },
        imagen: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
        id: 4,
        nombre: 'Ana Martínez',
        correo: 'ana.martinez@example.com',
        edad: 22,
        direccion: {
            calle: 'Via Imaginaria 910',
            ciudad: 'Roma',
            pais: 'Italia',
        },
        imagen: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        id: 5,
        nombre: 'Pedro López',
        correo: 'pedro.lopez@example.com',
        edad: 36,
        direccion: {
            calle: 'Champs-Élysées 55',
            ciudad: 'París',
            pais: 'Francia',
        },
        imagen: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
];

// Función para simular la obtención de datos de la API
export const obtenerUsuarios = (): Promise<Usuario[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(usuarios);
        }, 1000); // Simula un retraso de 1 segundo para obtener los datos
    });
};
