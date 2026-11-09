import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons, photos } from '../images';
import { camera } from '../services';
import { colors, styles } from '../styles';

export const email = 'alex.martin@correo.com';

const links = [
    ['briefcase', 'Mis servicios', 'myServices'],
    ['history', 'Historial de intercambios', 'takenServices'],
    ['edit', 'Editar perfil', 'editProfile'],
    ['book', 'Mis habilidades', 'skills'],
    ['briefcase', 'Mis solicitudes', 'requests'],
    ['rating', 'Mis calificaciones', 'reviews'],
    ['history', 'Mi actividad', 'userActivity'],
];

export default function ProfileScreen({ onOpen }) {
    return (
        <UserLayout contentStyle={{ gap: 18 }}>
            <Text accessibilityRole="header" style={styles.title}>Mi perfil</Text>
            <View style={[styles.row, { gap: 16 }]}>
                <Image source={photos.alex} accessible={false} style={local.avatar} />
                <View style={[styles.grow, styles.stack]}>
                    <Text style={styles.heading}>{camera.person}</Text>
                    <Text style={styles.small}>{email}</Text>
                    <Text style={styles.caption}>Parte de la comunidad desde 2025</Text>
                </View>
            </View>
            <Pressable accessibilityRole="button" accessibilityLabel={'Mis créditos'} onPress={() => onOpen('userCredits')} style={styles.balance}>
                <View style={styles.between}>
                    <Text style={[styles.body, styles.white, styles.grow]}>Tus créditos disponibles</Text>
                    <Image source={icons.clockWhite} accessible={false} />
                </View>
                <Text style={styles.amount}>8 <Text style={[styles.body, styles.white]}>créditos de tiempo</Text></Text>
            </Pressable>
            <View style={local.metrics}>
                <View style={local.stat}>
                    <View style={styles.between}>
                        <Text style={styles.heading}>3</Text>
                        <Image source={icons.handshake} accessible={false} />
                    </View>
                    <Text style={styles.small}>Servicios ofrecidos</Text>
                </View>
                <View style={local.stat}>
                    <View style={styles.between}>
                        <Text style={styles.heading}>6</Text>
                        <Image source={icons.book} accessible={false} />
                    </View>
                    <Text style={styles.small}>Intercambios tomados</Text>
                </View>
            </View>
            <View style={styles.card}>
                {links.map(([icon, label, screen], index) => (
                    <Pressable key={label} accessibilityRole="button" onPress={() => onOpen(screen)}
                        style={[styles.row, local.option, index > 0 && local.divider]}>
                        <Image source={icons[icon]} accessible={false} />
                        <Text style={[styles.body, styles.grow]}>{label}</Text>
                        <Image source={icons.right} accessible={false} />
                    </Pressable>
                ))}
                <View style={[styles.row, local.option, local.divider]}>
                    <Image source={icons.logout} accessible={false} />
                    <Text style={[styles.body, styles.grow]}>Cerrar sesión</Text>
                    <Image source={icons.right} accessible={false} />
                </View>
            </View>
        </UserLayout>
    );
}

const local = StyleSheet.create({
    avatar: { width: 72, height: 72, borderRadius: 36 },
    metrics: { flexDirection: 'row', gap: 12 },
    stat: { flex: 1, backgroundColor: colors.sand, borderRadius: 12, padding: 14, gap: 6 },
    option: { minHeight: 51, paddingHorizontal: 15, paddingVertical: 10 },
    divider: { borderTopWidth: 1, borderTopColor: colors.border },
});
