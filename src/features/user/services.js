import { photos } from './images';

export const excel = {
    name: 'Aprende Excel desde cero', category: 'Tecnología', person: 'Lucía Torres',
    hours: 2, rating: '4,9', photo: photos.excel,
    banner: photos.excelBanner, avatar: photos.lucia, ratingCount: 18,
    mode: 'En línea', availability: 'Mar y jue · 17:00–20:00 · A convenir',
    description: 'Organiza tus datos, crea fórmulas sencillas y arma tu primera tabla. Una sesión práctica a tu ritmo; no necesitas experiencia previa.',
};
export const garden = {
    name: 'Un huerto en tu balcón', category: 'Hogar', person: 'Diego Ruiz',
    hours: 1, rating: '4,8', photo: photos.garden,
    mode: 'Presencial', availability: 'A convenir',
    description: 'Aprende a preparar macetas y elegir plantas adecuadas para tu balcón.',
};
export const english = {
    name: 'Inglés para conversar', category: 'Educación', person: 'Sofía Vega',
    hours: 1, rating: '4,9', photo: photos.english,
    mode: 'En línea', availability: 'A convenir',
    description: 'Practica conversaciones cotidianas en inglés con ejemplos y ejercicios sencillos.',
};
export const cameraDescription = 'Aprende a encuadrar y aprovechar la luz para hacer mejores fotos con tu móvil.';
export const cameraAvailability = 'Sábados · 10:00–14:00 · A convenir';
export const camera = {
    name: 'Fotografía con tu móvil', category: 'Creatividad', person: 'Alex Martín',
    hours: 2, photo: photos.camera, avatar: photos.alex,
    mode: 'Presencial', availability: cameraAvailability, description: cameraDescription,
};

export const services = [excel, english, garden, camera];
export const photoshop = { name: 'Introducción a Photoshop', category: 'Creatividad', hours: 3 };
export const repair = { name: 'Reparación básica de computadora', category: 'Tecnología', hours: 1 };

export function time(hours) {
    return hours === 1 ? '1 hora' : `${hours} horas`;
}

export function credits(hours) {
    return hours === 1 ? '1 crédito' : `${hours} créditos`;
}
