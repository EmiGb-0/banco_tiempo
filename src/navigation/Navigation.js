import { useState } from 'react';
import { Image, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


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
import EditProfileScreen from '../features/user/screens/EditProfileScreen';
import ParticipantCategoriesScreen from '../features/user/screens/CategoriesScreen';
import SkillsScreen from '../features/user/screens/SkillsScreen';
import SkillFormScreen from '../features/user/screens/SkillFormScreen';
import RequestsScreen from '../features/user/screens/RequestsScreen';
import CreateRequestScreen from '../features/user/screens/CreateRequestScreen';
import RequestDetailScreen from '../features/user/screens/RequestDetailScreen';
import ExchangeDetailScreen from '../features/user/screens/ExchangeDetailScreen';
import ParticipantCreditsScreen from '../features/user/screens/CreditsScreen';
import RateExchangeScreen from '../features/user/screens/RateExchangeScreen';
import ReviewsScreen from '../features/user/screens/ReviewsScreen';
import ActivityScreen from '../features/user/screens/ActivityScreen';
import { icons } from '../features/user/images';
import { colors } from '../features/user/styles';

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
            ['viewService', 'Ver servicio', ViewServiceScreen, { tab: 'explore' }],
            ['createService', 'Crear servicio', CreateServiceScreen],
            ['favorites', 'Favoritos', FavoritesScreen],
            ['profile', 'Perfil', ProfileScreen],
            ['explore', 'Explorar', ExploreScreen],
            ['requestSent', 'Solicitud enviada', RequestSentScreen, { tab: 'explore' }],
            ['myServices', 'Mis servicios', MyServicesScreen, { tab: 'profile' }],
            ['manageService', 'Administrar servicio', ManageServiceScreen, { tab: 'profile' }],
            [
                'receivedRequests',
                'Solicitudes recibidas',
                ReceivedRequestsScreen,
                { tab: 'profile' },
            ],
            ['editService', 'Editar servicio', EditServiceScreen, { tab: 'profile' }],
            ['servicePublished', 'Servicio publicado', ServicePublishedScreen, { tab: 'createService' }],
            ['publishError', 'Error al publicar', PublishErrorScreen, { tab: 'createService' }],
            ['takenServices', 'Servicios tomados', TakenServicesScreen, { tab: 'profile' }],
            ['offeredServices', 'Servicios ofrecidos', OfferedServicesScreen, { tab: 'profile' }],
            ['editProfile', 'Editar perfil', EditProfileScreen, { tab: 'profile' }],
            ['userCategories', 'Categorías', ParticipantCategoriesScreen, { tab: 'explore' }],
            ['categoryDetail', 'Detalle de categoría', ParticipantCategoriesScreen, { tab: 'explore' }],
            ['skills', 'Mis habilidades', SkillsScreen, { tab: 'profile' }],
            ['addSkill', 'Registrar habilidad', SkillFormScreen, { tab: 'profile' }],
            ['editSkill', 'Editar habilidad', SkillFormScreen, { editing: true, tab: 'profile' }],
            ['savedService', 'Servicio guardado', ViewServiceScreen, { saved: true, tab: 'favorites' }],
            ['requests', 'Mis solicitudes', RequestsScreen, { tab: 'profile' }],
            ['createRequest', 'Crear solicitud', CreateRequestScreen, { tab: 'explore' }],
            ['requestPending', 'Solicitud pendiente', RequestDetailScreen, { tab: 'profile' }],
            ['requestAccepted', 'Solicitud aceptada', RequestDetailScreen, { example: 1, tab: 'profile' }],
            ['requestRejected', 'Solicitud rechazada', RequestDetailScreen, { example: 2, tab: 'profile' }],
            ['exchangeDetail', 'Detalle de intercambio', ExchangeDetailScreen, { tab: 'profile' }],
            ['userCredits', 'Mis créditos', ParticipantCreditsScreen, { tab: 'profile' }],
            ['rateExchange', 'Calificar intercambio', RateExchangeScreen],
            ['reviews', 'Mis calificaciones', ReviewsScreen, { tab: 'profile' }],
            ['userActivity', 'Mi actividad', ActivityScreen, { tab: 'profile' }],
            ['userReport', 'Reporte personal', ActivityScreen, { report: true, tab: 'profile' }],
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
        ['userHome', 'Inicio', 'home'],
        ['explore', 'Explorar', 'explore'],
        ['createService', 'Crear', 'create'],
        ['favorites', 'Favoritos', 'favorites'],
        ['profile', 'Perfil', 'profile'],
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
    const [screen, setScreen] = useState({ key: 'login', params: {} });
    const isUser = group === 'user';
    const activeScreen = groups[group].screens.find(([key]) => key === screen.key)
        || groups[group].screens[0];
    const [activeKey, , Screen, screenDefaults] = activeScreen;
    const selectedTab = screenDefaults?.tab || activeKey;
    const hideBar = activeKey === 'rateExchange';

    const mobileMenu = mobileMenus[group];
    
    function openScreen(key, params = {}) {
        setScreen({ key, params });
    }

    function login(role) {
        setGroup(role);
        openScreen(role === 'admin' ? 'adminHome' : 'userHome');
    }

    const screenProps = group === 'auth'
        ? { onLogin: login, onRegister: () => openScreen('register'), onSignIn: () => openScreen('login') }
        : { ...screenDefaults, ...screen.params, onOpen: openScreen };

    return (
        <SafeAreaView style={[styles.container, isUser && styles.userContainer]}>
            <View style={styles.content}>
                <Screen key={activeKey} {...screenProps} />
            </View>
            {mobileMenu && !hideBar && (
                <View style={[styles.bottomBar, isUser && styles.userBar]}>
                    {mobileMenu.map(([key, label, icon]) => {
                        const selected = selectedTab === key;
                        return (
                            <Pressable
                                key={key}
                                onPress={() => openScreen(key)}
                                accessibilityRole={isUser ? 'tab' : undefined}
                                accessibilityState={isUser ? { selected } : undefined}
                                style={[styles.menuButton, isUser && styles.userButton]}
                            >
                                {isUser ? (
                                    <View collapsable={false} style={[styles.indicator, selected && styles.indicatorActive]}>
                                        <Image source={icons[selected ? icon + 'On' : icon]} accessible={false} />
                                    </View>
                                ) : (
                                    <Text style={[styles.menuIcon, selected && styles.menuIconActive]}>{icon}</Text>
                                )}
                                <Text style={[styles.menuText, isUser && styles.userLabel, selected && styles.menuTextActive]}>
                                    {label}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            )}
            {hideBar && <View style={styles.sheetBottom} />}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#f8fafc', flex: 1 },
    content: { flex: 1 },
    userContainer: {
        backgroundColor: colors.background,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    userBar: {
        borderTopColor: colors.border,
        minHeight: 62,
        paddingHorizontal: 8,
        paddingBottom: Platform.OS === 'android' ? 48 : 8,
    },
    userButton: { minHeight: 44 },
    userLabel: { fontSize: 10, color: colors.muted, textAlign: 'center' },
    indicator: { width: 48, height: 29, maxWidth: '100%', borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
    indicatorActive: { backgroundColor: colors.mint },
    sheetBottom: { height: Platform.OS === 'android' ? 48 : 0, backgroundColor: colors.white },
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
