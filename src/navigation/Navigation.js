import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

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

const mobileMenus = {
    user: [
        ['userHome', 'Inicio', '⌂'],
        ['explore', 'Explorar', '◇'],
        ['createService', 'Crear', '+'],
        ['favorites', 'Favoritos', '♡'],
        ['profile', 'Perfil', '○'],
    ],
    admin: [
        ['adminHome', 'Inicio', '⌂'],
        ['reports', 'Reportes', '▥'],
        ['dashboard', 'Dashboard', '▣'],
        ['credits', 'Créditos', '◷'],
        ['categories', 'Categorías', '□'],
    ],
};

export default function Navigation() {
    const [group, setGroup] = useState('auth');
    const [screenKey, setScreenKey] = useState('login');
    const activeScreen =
        groups[group].screens.find(([key]) => key === screenKey) ||
        groups[group].screens[0];
    const Screen = activeScreen[2];

    const mobileMenu = mobileMenus[group];
    const screenProps =
        group === 'auth'
            ? {
                  onLogin: (role) => {
                      setGroup(role);
                      setScreenKey(role === 'admin' ? 'adminHome' : 'userHome');
                  },
              }
            : {};

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Screen {...screenProps} />
            </View>
            {mobileMenu && (
                <View style={styles.bottomBar}>
                    {mobileMenu.map(([key, label, icon]) => (
                        <Pressable
                            key={key}
                            onPress={() => setScreenKey(key)}
                            style={styles.menuButton}
                        >
                            <Text
                                style={[
                                    styles.menuIcon,
                                    screenKey === key && styles.menuIconActive,
                                ]}
                            >
                                {icon}
                            </Text>
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
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#f8fafc', flex: 1 },
    content: { flex: 1 },
    bottomBar: {
        alignItems: 'flex-end',
        backgroundColor: '#ffffff',
        borderTopColor: '#e2e8f0',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        minHeight: 82,
        paddingBottom: 10,
        paddingTop: 8,
    },
    menuButton: {
        alignItems: 'center',
        flex: 1,
        gap: 4,
        justifyContent: 'center',
        minHeight: 58,
    },
    menuIcon: { color: '#64748b', fontSize: 26, lineHeight: 28 },
    menuIconActive: { color: '#16805f' },
    menuText: { color: '#64748b', fontSize: 12 },
    menuTextActive: { color: '#16805f', fontWeight: '700' },
});
