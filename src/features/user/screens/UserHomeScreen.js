import UserLayout from '../layouts/UserLayout';
import { Text } from 'react-native';

export default function UserHomeScreen() {
    return (
        <UserLayout>
            <Text>Inicio</Text>
            <Text>Encuentra recomendaciones y consulta tu saldo.</Text>
        </UserLayout>
    );
}
