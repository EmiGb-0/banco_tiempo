import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { credits, english, excel, time } from '../services';
import { colors, styles } from '../styles';

const taken = [
    {
        service: excel, date: '30 sep 2026', status: 'Completado', icon: icons.done, color: colors.dark,
        detail: 'exchangeDetail',
    },
    {
        service: english, date: 'Solicitud · 5 oct 2026', status: 'Pendiente de aprobación', icon: icons.clockSmall, color: colors.sand,
        detail: 'requestPending', example: 3,
    },
    {
        service: { name: 'Jardinería para principiantes', person: 'Ana Torres', hours: 2 },
        date: 'Solicitud · 28 sep 2026', status: 'Rechazado', icon: icons.rejected, color: colors.background,
        detail: 'requestRejected', example: 2,
    },
];

export default function TakenServicesScreen({ onOpen }) {
    return (
        <UserLayout>
            <Text accessibilityRole="header" style={styles.title}>Servicios tomados</Text>
            <View style={styles.wrap}>
                {['Tomados', 'Ofrecidos'].map((label) => (
                    <Pressable accessibilityRole="button" onPress={() => onOpen(label === 'Tomados' ? 'takenServices' : 'offeredServices')} key={label} style={[styles.chip, label === 'Tomados' && styles.selected]}>
                        <Text style={[styles.small, label === 'Tomados' && styles.white]}>{label}</Text>
                    </Pressable>
                ))}
            </View>
            {taken.map(({ service, date, status, icon, color, detail, example }) => (
                <View key={service.name} style={styles.list}>
                    <Pressable accessibilityRole="button" accessibilityLabel={service.name}
                        onPress={() => onOpen(detail, { from: 'takenServices', example })}
                        style={[styles.card, styles.padded]}>
                        <Text style={styles.caption}>{date}</Text>
                        <Text style={styles.body}>{service.name}</Text>
                        <Text style={styles.small}>{service.person}</Text>
                        <Text style={styles.credit}>{time(service.hours)} · {credits(service.hours)}</Text>
                    </Pressable>
                    <View style={[styles.badge, { backgroundColor: color }]}>
                        <Image source={icon} accessible={false} />
                        <Text style={[styles.badgeText, status === 'Completado' && styles.white]}>{status}</Text>
                    </View>
                    {status === 'Completado' && (
                        <>
                            <Text style={styles.small}>Disponible para calificar</Text>
                            <Pressable accessibilityRole="button" onPress={() => onOpen('rateExchange')} style={[styles.action, styles.outline]}>
                                <Text style={[styles.actionText, styles.outlineText]}>Calificar</Text>
                            </Pressable>
                        </>
                    )}
                </View>
            ))}
        </UserLayout>
    );
}
