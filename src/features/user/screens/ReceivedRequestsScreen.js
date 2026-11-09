import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera } from '../services';
import { colors, styles } from '../styles';

const requests = [
    { name: 'Carlos Hernández', schedule: '10 oct 2026 · 10:00–12:00' },
    { name: 'Mariana López', schedule: '10 oct 2026 · 12:00–14:00' },
    { name: 'Diego Ruiz', schedule: '17 oct 2026 · 10:00–12:00' },
    { name: 'Ana Torres', schedule: '17 oct 2026 · 12:00–14:00', accepted: true },
];

export default function ReceivedRequestsScreen({ onOpen }) {
    return (
        <UserLayout contentStyle={styles.list}>
            <Pressable accessibilityRole="button" onPress={() => onOpen('manageService')} style={[styles.row, styles.link]}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>Administrar servicio</Text>
            </Pressable>
            <View style={styles.stack}>
                <Text accessibilityRole="header" style={styles.title}>Solicitudes recibidas</Text>
                <Text style={styles.muted}>{camera.name} · 2 horas</Text>
            </View>
            {requests.map(({ name, schedule, accepted }) => (
                <View key={name} style={[styles.card, { padding: 9, gap: 6 }]}>
                    <View style={styles.between}>
                        {accepted ? (
                            <Pressable accessibilityRole="button" onPress={() => onOpen('requestAccepted', { from: 'receivedRequests' })} style={styles.grow}>
                                <Text style={styles.label}>{name}</Text>
                            </Pressable>
                        ) : (
                            <Text style={[styles.label, styles.grow]}>{name}</Text>
                        )}
                        <View style={[styles.badge, !accepted && { backgroundColor: colors.sand }]}>
                            <Image source={accepted ? icons.accepted : icons.clockSmall} accessible={false} />
                            <Text style={styles.badgeText}>{accepted ? 'Aceptado' : 'Pendiente de aprobación'}</Text>
                        </View>
                    </View>
                    <Text style={styles.small}>{schedule}</Text>
                    {accepted ? (
                        <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                            <Image source={icons.arrow} accessible={false} />
                            <Text style={styles.actionText}>Marcar realizado</Text>
                        </View>
                    ) : (
                        <View style={styles.row}>
                            <View style={styles.grow}>
                                <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                                    <Image source={icons.arrow} accessible={false} />
                                    <Text style={styles.actionText}>Aceptar</Text>
                                </View>
                            </View>
                            <View style={styles.grow}>
                                <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={[styles.action, styles.outline]}>
                                    <Text style={[styles.actionText, styles.outlineText]}>Rechazar</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            ))}
        </UserLayout>
    );
}
