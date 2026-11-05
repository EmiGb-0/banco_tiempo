import UserLayout from '../layouts/UserLayout';
import { Text } from 'react-native';

export default function PublishErrorScreen() {
    return (
        <UserLayout>
            <Text>Error al publicar</Text>
            <Text>No se pudo publicar el servicio. Inténtalo de nuevo.</Text>
        </UserLayout>
    );
}
