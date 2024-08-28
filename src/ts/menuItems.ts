import { ref } from 'vue';

export interface MenuItem {
    id: number;
    label: string;
    route?: string;
    isOpen?: boolean;
    children?: MenuItem[];
}

export function useNavbar() {
    const menuItems = ref<MenuItem[]>([
        { id: 1, label: "Inicio", route: "/" },
        { id: 2, label: "Acerca", route: "/about" },
        {
            id: 3,
            label: "Servicios",
            isOpen: false,
            children: [
                { id: 31, label: "Servicio 1", route: "#" },
                { id: 32, label: "Servicio 2", route: "#" },
                { id: 33, label: "Servicio 3", route: "#" },
            ],
        },
        { id: 4, label: "Contacto", route: "#" },
    ]);

    const isMenuOpen = ref(false);
    const isMobile = ref(window.innerWidth < 768);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
        isMenuOpen.value = false;
    };

    const handleClickOutside = (event: MouseEvent) => {
        const navbar = document.querySelector('.navbar');
        if (navbar && !navbar.contains(event.target as Node)) {
            closeMenu();
        }
    };

    const handleResize = () => {
        isMobile.value = window.innerWidth < 768;
        if (!isMobile.value) {
            closeMenu();
        }
    };

    return {
        menuItems,
        isMenuOpen,
        isMobile,
        toggleMenu,
        closeMenu,
        handleClickOutside,
        handleResize,
    };
}