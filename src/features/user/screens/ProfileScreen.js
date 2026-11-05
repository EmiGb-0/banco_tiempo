import UserLayout from '../layouts/UserLayout';
import { Text } from 'react-native';

export default function ProfileScreen() {
    return (
        <UserLayout>
            <Text>Perfil</Text>
            <Text>Consulta y actualiza tus datos personales.</Text>
        </UserLayout>
    );
}
