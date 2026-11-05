import AuthLayout from '../layouts/AuthLayout';
import { Text } from 'react-native';

export default function LoginScreen() {
    return (
        <AuthLayout>
            <Text>Iniciar sesión</Text>
            <Text>Accede a tu cuenta de Banco de Tiempo.</Text>
        </AuthLayout>
    );
}
