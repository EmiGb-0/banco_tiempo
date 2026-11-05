import UserLayout from '../layouts/UserLayout';
import { Text } from 'react-native';

export default function RequestSentScreen() {
    return (
        <UserLayout>
            <Text>Solicitud enviada</Text>
            <Text>Tu solicitud fue enviada correctamente.</Text>
        </UserLayout>
    );
}
