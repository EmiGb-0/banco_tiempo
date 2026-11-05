import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import LoginScreen from '../features/auth/screens/LoginScreen';
import RegisterScreen from '../features/auth/screens/RegisterScreen';
import AdminHomeScreen from '../features/admin/screens/AdminHomeScreen';
import ReportsScreen from '../features/admin/screens/ReportsScreen';
import GenerateReportScreen from '../features/admin/screens/GenerateReportScreen';
import DashboardScreen from '../features/admin/screens/DashboardScreen';
import CreditsScreen from '../features/admin/screens/CreditsScreen';
import CategoriesScreen from '../features/admin/screens/CategoriesScreen';
import CreateCategoryScreen from '../features/admin/screens/CreateCategoryScreen';
import UserHomeScreen from '../features/user/screens/UserHomeScreen';
import ViewServiceScreen from '../features/user/screens/ViewServiceScreen';
import CreateServiceScreen from '../features/user/screens/CreateServiceScreen';
import FavoritesScreen from '../features/user/screens/FavoritesScreen';
import ProfileScreen from '../features/user/screens/ProfileScreen';
import ExploreScreen from '../features/user/screens/ExploreScreen';
import RequestSentScreen from '../features/user/screens/RequestSentScreen';
import MyServicesScreen from '../features/user/screens/MyServicesScreen';
import ManageServiceScreen from '../features/user/screens/ManageServiceScreen';
import ReceivedRequestsScreen from '../features/user/screens/ReceivedRequestsScreen';
import EditServiceScreen from '../features/user/screens/EditServiceScreen';
import ServicePublishedScreen from '../features/user/screens/ServicePublishedScreen';
import PublishErrorScreen from '../features/user/screens/PublishErrorScreen';
import TakenServicesScreen from '../features/user/screens/TakenServicesScreen';
import OfferedServicesScreen from '../features/user/screens/OfferedServicesScreen';

const groups = {
    auth: {
        label: 'Acceso',
        screens: [
            ['login', 'Login', LoginScreen],
            ['register', 'Registro', RegisterScreen],
        ],
    },
    user: {
        label: 'Participante',
        screens: [
            ['userHome', 'Inicio', UserHomeScreen],
            ['viewService', 'Ver servicio', ViewServiceScreen],
            ['createService', 'Crear servicio', CreateServiceScreen],
            ['favorites', 'Favoritos', FavoritesScreen],
            ['profile', 'Perfil', ProfileScreen],
            ['explore', 'Explorar', ExploreScreen],
            ['requestSent', 'Solicitud enviada', RequestSentScreen],
            ['myServices', 'Mis servicios', MyServicesScreen],
            ['manageService', 'Administrar servicio', ManageServiceScreen],
            [
                'receivedRequests',
                'Solicitudes recibidas',
                ReceivedRequestsScreen,
            ],
            ['editService', 'Editar servicio', EditServiceScreen],
            ['servicePublished', 'Servicio publicado', ServicePublishedScreen],
            ['publishError', 'Error al publicar', PublishErrorScreen],
            ['takenServices', 'Servicios tomados', TakenServicesScreen],
            ['offeredServices', 'Servicios ofrecidos', OfferedServicesScreen],
        ],
    },
    admin: {
        label: 'Administrador',
        screens: [
            ['adminHome', 'Inicio', AdminHomeScreen],
            ['reports', 'Reportes', ReportsScreen],
            ['generateReport', 'Generar reporte', GenerateReportScreen],
            ['dashboard', 'Dashboard', DashboardScreen],
            ['credits', 'Créditos', CreditsScreen],
            ['categories', 'Categorías', CategoriesScreen],
            ['createCategory', 'Crear categoría', CreateCategoryScreen],
        ],
    },
};

export default function Navigation() {
    const [group, setGroup] = useState('auth');
    const [screenKey, setScreenKey] = useState('login');
    const currentGroup = groups[group];
    const activeScreen =
        currentGroup.screens.find(([key]) => key === screenKey) ||
        currentGroup.screens[0];
    const Screen = activeScreen[2];

    const changeGroup = (nextGroup) => {
        setGroup(nextGroup);
        setScreenKey(groups[nextGroup].screens[0][0]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.appName}>Banco de Tiempo</Text>
                <Text style={styles.subtitle}>{currentGroup.label}</Text>
            </View>
            <View style={styles.switch}>
                {Object.entries(groups).map(([key, value]) => (
                    <Pressable
                        key={key}
                        onPress={() => changeGroup(key)}
                        style={[
                            styles.switchButton,
                            group === key && styles.switchButtonActive,
                        ]}
                    >
                        <Text
                            style={[
                                styles.switchText,
                                group === key && styles.switchTextActive,
                            ]}
                        >
                            {value.label}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <View style={styles.content}>
                <Screen />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.menu}
            >
                {currentGroup.screens.map(([key, label]) => (
                    <Pressable
                        key={key}
                        onPress={() => setScreenKey(key)}
                        style={[
                            styles.menuButton,
                            screenKey === key && styles.menuButtonActive,
                        ]}
                    >
                        <Text
                            style={[
                                styles.menuText,
                                screenKey === key && styles.menuTextActive,
                            ]}
                        >
                            {label}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#f1f5f9', flex: 1 },
    header: {
        backgroundColor: '#16213e',
        paddingBottom: 16,
        paddingHorizontal: 20,
        paddingTop: 56,
    },
    appName: { color: '#fff', fontSize: 22, fontWeight: '700' },
    subtitle: { color: '#cbd5e1', fontSize: 14, marginTop: 4 },
    switch: { backgroundColor: '#fff', flexDirection: 'row', padding: 8 },
    switchButton: { borderRadius: 8, flex: 1, padding: 10 },
    switchButtonActive: { backgroundColor: '#dbeafe' },
    switchText: { color: '#64748b', fontSize: 13, textAlign: 'center' },
    switchTextActive: { color: '#1d4ed8', fontWeight: '700' },
    content: { flex: 1 },
    menu: { gap: 8, padding: 12 },
    menuButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    menuButtonActive: { backgroundColor: '#2563eb' },
    menuText: { color: '#334155', fontSize: 12 },
    menuTextActive: { color: '#fff', fontWeight: '700' },
});
