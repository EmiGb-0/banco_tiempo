import UserLayout from '../layouts/UserLayout';
import { Text } from 'react-native';

export default function ManageServiceScreen() {
    return (
        <UserLayout>
            <Text>Administrar servicio</Text>
            <Text>Edita, pausa o elimina tus servicios.</Text>
        </UserLayout>
    );
}
