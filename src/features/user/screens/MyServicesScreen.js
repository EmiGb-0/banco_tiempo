import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, credits, photoshop, repair, time } from '../services';
import { colors, styles } from '../styles';

const publications = [
    { service: camera, status: 'Publicado', pending: '3 solicitudes pendientes' },
    { service: photoshop, status: 'Pausado' },
    { service: repair, status: 'Publicado', pending: '1 solicitud pendiente' },
];

export default function MyServicesScreen({ onOpen }) {
    return (
        <UserLayout>
            <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen('profile')} style={styles.row}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>Mi perfil</Text>
            </Pressable>
            <View style={styles.stack}>
                <Text accessibilityRole="header" style={styles.title}>Mis servicios</Text>
                <Text style={styles.muted}>Gestiona tus servicios y solicitudes.</Text>
            </View>
            <View style={styles.wrap}>
                {['Todos', 'Publicados', 'Pausados'].map((label) => (
                    <View key={label} style={[styles.chip, label === 'Todos' && styles.selected]}>
                        <Text style={[styles.small, label === 'Todos' && styles.white]}>{label}</Text>
                    </View>
                ))}
            </View>
            {publications.map(({ service, status, pending }) => (
                <View key={service.name} style={styles.list}>
                    <View style={[styles.card, styles.photoCard]}>
                        {service.photo && <Image source={service.photo} accessible={false} style={styles.cardPhoto} />}
                        <View style={styles.cardContent}>
                            <Text style={styles.caption}>{service.category}</Text>
                            <Text style={styles.body}>{service.name}</Text>
                            <Text style={styles.credit}>{time(service.hours)} · {credits(service.hours)}</Text>
                        </View>
                    </View>
                    <View style={styles.between}>
                        <View style={[styles.badge, status === 'Pausado' && { backgroundColor: colors.background }]}>
                            <Image source={status === 'Pausado' ? icons.pause : icons.eye} accessible={false} />
                            <Text style={styles.badgeText}>{status}</Text>
                        </View>
                        {service === camera && (
                            <Pressable accessibilityRole="button" onPress={() => onOpen('manageService')} style={styles.link}>
                                <Text style={styles.accent}>Administrar →</Text>
                            </Pressable>
                        )}
                    </View>
                    {pending && <Text style={styles.small}>{pending}</Text>}
                </View>
            ))}
            <Pressable accessibilityRole="button" onPress={() => onOpen('createService')} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>Crear nuevo servicio</Text>
            </Pressable>
        </UserLayout>
    );
}
