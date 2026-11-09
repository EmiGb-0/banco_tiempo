import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, english, excel } from '../services';
import { colors, styles } from '../styles';

export const requests = [
    {
        id: 'S-025', service: excel, person: excel.person, date: '8 oct 2026', time: '17:00–19:00',
        status: 'Pendiente de aprobación', icon: icons.clockSmall, color: colors.sand,
        message: 'Quiero aprender a organizar mis gastos en una hoja de cálculo.',
        note: 'Lucía revisará tu propuesta. Tus créditos aún no se han descontado.',
    },
    {
        id: 'S-024', service: camera, person: 'Ana Torres', date: '17 oct 2026', time: '12:00–14:00',
        status: 'Aceptado', icon: icons.accepted, color: colors.mint,
        message: 'Me interesa practicar retratos con luz natural.',
        note: 'El intercambio está programado para el horario indicado.',
    },
    {
        id: 'S-019', service: { name: 'Jardinería para principiantes', category: 'Hogar', hours: 2 },
        person: 'Ana Torres', date: '28 sep 2026', time: '16:00–18:00',
        status: 'Rechazado', icon: icons.rejected, color: colors.background,
        message: 'Quiero empezar con plantas que necesiten poco sol.',
        note: 'La solicitud fue rechazada. Tu saldo de créditos se mantiene.',
    },
    {
        id: 'S-020', service: english, person: english.person, date: '5 oct 2026', time: '18:00–19:00',
        status: 'Pendiente de aprobación', icon: icons.clockSmall, color: colors.sand,
        message: 'Quiero practicar una conversación cotidiana en inglés.',
        note: 'Sofía revisará tu propuesta. Tus créditos aún no se han descontado.',
    },
];

const detailScreens = {
    'Pendiente de aprobación': 'requestPending',
    Aceptado: 'requestAccepted',
    Rechazado: 'requestRejected',
};

export default function RequestsScreen({ onOpen }) {
    return (
        <UserLayout>
            <Text accessibilityRole="header" style={styles.title}>Mis solicitudes</Text>
            <Text style={styles.muted}>Solicitudes enviadas y recibidas para intercambiar servicios.</Text>
            {requests.map(({ id, service, person, date, status, icon, color }, index) => (
                <Pressable accessibilityRole="button" accessibilityLabel={id + ' · ' + service.name} onPress={() => onOpen(detailScreens[status], { example: index })} key={id} style={[styles.card, styles.padded]}>
                    <Text style={styles.caption}>{id} · {service.category}</Text>
                    <Text style={styles.body}>{service.name}</Text>
                    <Text style={styles.small}>{person} · {date}</Text>
                    <View style={[styles.badge, { backgroundColor: color }]}>
                        <Image source={icon} accessible={false} />
                        <Text style={styles.badgeText}>{status}</Text>
                    </View>
                </Pressable>
            ))}
            <Pressable accessibilityRole="button" onPress={() => onOpen('createRequest')} style={styles.action}>
                <Image source={icons.plus} accessible={false} />
                <Text style={styles.actionText}>Crear solicitud</Text>
            </Pressable>
        </UserLayout>
    );
}
