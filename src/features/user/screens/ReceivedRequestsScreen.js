import UserLayout from '../layouts/UserLayout';
import { Text } from 'react-native';

export default function ReceivedRequestsScreen() {
    return (
        <UserLayout>
            <Text>Solicitudes recibidas</Text>
            <Text>Gestiona las solicitudes de tus servicios.</Text>
        </UserLayout>
    );
}
