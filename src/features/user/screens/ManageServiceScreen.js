import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, cameraAvailability, cameraDescription } from '../services';
import { styles } from '../styles';

export default function ManageServiceScreen({ onOpen }) {
    return (
        <UserLayout contentStyle={styles.list}>
            <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen('myServices')} style={styles.row}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>Mis servicios</Text>
            </Pressable>
            <Text accessibilityRole="header" style={styles.title}>Administrar servicio</Text>
            <Image source={camera.photo} accessible={false} style={local.banner} />
            <View style={styles.badge}>
                <Image source={icons.eye} accessible={false} />
                <Text style={styles.badgeText}>Publicado</Text>
            </View>
            <View style={styles.stack}>
                <Text style={styles.heading}>{camera.name}</Text>
                <Text style={styles.small}>{camera.category} · Presencial</Text>
            </View>
            <View style={[styles.panel, styles.row, { padding: 12 }]}>
                <View style={[styles.grow, styles.stack]}>
                    <Text style={styles.small}>Duración</Text>
                    <Text style={styles.label}>2 horas</Text>
                </View>
                <View style={[styles.grow, styles.stack]}>
                    <Text style={styles.small}>Ganancia al realizarlo</Text>
                    <Text style={styles.label}>2 créditos</Text>
                </View>
            </View>
            <Text style={styles.muted}>{cameraDescription}</Text>
            <View style={styles.stack}>
                <Text style={styles.label}>Disponibilidad</Text>
                <Text style={styles.small}>{cameraAvailability}</Text>
            </View>
            <Text style={styles.label}>3 solicitudes pendientes</Text>
            <Pressable accessibilityRole="button" onPress={() => onOpen('editService')} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>Editar servicio</Text>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={() => onOpen('receivedRequests')} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Ver solicitudes</Text>
            </Pressable>
            <Text style={[styles.accent, local.link]}>Pausar publicación</Text>
            <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }}
                style={[styles.row, { justifyContent: 'center' }]}>
                <Image source={icons.trash} accessible={false} />
                <Text style={[styles.small, local.delete]}>Eliminar servicio</Text>
            </View>
        </UserLayout>
    );
}

const local = StyleSheet.create({
    banner: { width: '100%', height: 96, borderRadius: 20 },
    link: { textAlign: 'center', paddingVertical: 8 },
    delete: { textDecorationLine: 'underline', paddingVertical: 8 },
});
