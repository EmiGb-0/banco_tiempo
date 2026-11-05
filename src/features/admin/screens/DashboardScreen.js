import AdminLayout from '../layouts/AdminLayout';
import { Text } from 'react-native';

export default function DashboardScreen() {
    return (
        <AdminLayout>
            <Text>Dashboard</Text>
            <Text>Visualiza las métricas y la actividad reciente.</Text>
        </AdminLayout>
    );
}
