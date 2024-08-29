// slides.ts

export interface Slide {
    id: number;
    image: string;
    category: string;
    title: string;
    subtitle: string;
    location: string;
  }
  
  export const slides: Slide[] = [
    {
      id: 1,
      image: 'https://starwalk.space/gallery/images/milky-way-faq/1140x641.jpg',
      category: 'DOMESTIC',
      title: 'Enjoy the exotic of sunny Hawaii',
      subtitle: 'Experience paradise on Earth',
      location: 'Maui, Hawaii'
    },
    {
      id: 2,
      image: 'https://imagenes.muyinteresante.com/files/image_414_276/uploads/2024/07/03/66853cff8bff0.jpeg',
      category: 'SUBTROPICAL',
      title: 'The Island of Eternal Spring',
      subtitle: 'Discover natural wonders',
      location: 'Lanzarote, Spain'
    },
    {
      id: 3,
      image: 'https://services.meteored.com/img/article/aparentemente-a-via-lactea-nao-e-um-disco-totalmente-plano-e-a-materia-escura-pode-ser-a-justificacao-astronomia-1695222386131_1280.jpg',
      category: 'HISTORY',
      title: 'Awesome Eiffel Tower',
      subtitle: 'Explore the City of Light',
      location: 'Paris, France'
    },
    {
      id: 4,
      image: 'https://www.astrobitacora.com/wp-content/uploads/2017/05/Solar_sys.jpg',
      category: 'MAYANS',
      title: 'One of the safest states in Mexico',
      subtitle: 'Dive into ancient culture',
      location: 'The Yucatan, Mexico'
    },
    {
      id: 5,
      image: 'https://content.nationalgeographic.com.es/medio/2022/07/07/representacion-del-sistema-solar_05b5a6b3_1200x630.png',
      category: 'NATIVE',
      title: 'The most popular yachting destination',
      subtitle: 'Sail through paradise',
      location: 'Whitsunday Islands, Australia'
    }
  ];
  