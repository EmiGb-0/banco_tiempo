import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { credits, time } from '../services';
import { styles } from '../styles';
import { requests } from './RequestsScreen';

const backLabels = {
    takenServices: 'Servicios tomados',
    receivedRequests: 'Solicitudes recibidas',
    requests: 'Mis solicitudes',
};

export default function RequestDetailScreen({ example = 0, from = 'requests', onOpen }) {
    const request = requests[example];
    const { service } = request;

    return (
        <UserLayout>
            <Pressable accessibilityRole="button" accessibilityLabel="Volver" onPress={() => onOpen(from)} style={[styles.row, styles.link]}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>{backLabels[from]}</Text>
            </Pressable>
            <Text accessibilityRole="header" style={styles.title}>Detalle de solicitud</Text>
            <Text style={styles.muted}>Solicitud {request.id} · {example === 1 ? 'Recibida' : 'Enviada'}</Text>
            <View style={[styles.badge, { backgroundColor: request.color }]}>
                <Image source={request.icon} accessible={false} />
                <Text style={styles.badgeText}>{request.status}</Text>
            </View>
            <View style={[styles.card, styles.photoCard]}>
                {service.photo && <Image source={service.photo} accessible={false} style={styles.cardPhoto} />}
                <View style={styles.cardContent}>
                    <Text style={styles.caption}>{service.category}</Text>
                    <Text style={styles.body}>{service.name}</Text>
                    <Text style={styles.credit}>{time(service.hours)} · {credits(service.hours)}</Text>
                </View>
            </View>
            <View style={[styles.panel, styles.padded]}>
                <Text style={styles.label}>Participante</Text>
                <Text style={styles.body}>{request.person}</Text>
                <Text style={styles.label}>Fecha y horario</Text>
                <Text style={styles.body}>{request.date} · {request.time}</Text>
            </View>
            <View style={[styles.card, styles.padded]}>
                <Text style={styles.label}>Mensaje de la solicitud</Text>
                <Text style={styles.muted}>{request.message}</Text>
            </View>
            <View style={styles.notice}><Text style={styles.credit}>{request.note}</Text></View>
            {request.status === 'Pendiente de aprobación' && (
                <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={[styles.action, styles.outline]}>
                    <Text style={[styles.actionText, styles.outlineText]}>Cancelar solicitud</Text>
                </View>
            )}
            {example === 1 && (
                <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                    <Image source={icons.arrow} accessible={false} />
                    <Text style={styles.actionText}>Marcar realizado</Text>
                </View>
            )}
        </UserLayout>
    );
}
