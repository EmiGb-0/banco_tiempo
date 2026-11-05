import AuthLayout from '../layouts/AuthLayout';
import { Text } from 'react-native';

export default function RegisterScreen() {
    return (
        <AuthLayout>
            <Text>Crear cuenta</Text>
            <Text>Regístrate para participar en Banco de Tiempo.</Text>
        </AuthLayout>
    );
}
