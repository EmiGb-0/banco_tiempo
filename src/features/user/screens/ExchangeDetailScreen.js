import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { credits, excel, time } from '../services';
import { colors, styles } from '../styles';

export default function ExchangeDetailScreen({ onOpen }) {
    return (
        <UserLayout>
            <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen('takenServices')} style={styles.row}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>Historial de intercambios</Text>
            </Pressable>
            <Text accessibilityRole="header" style={styles.title}>Detalle del intercambio</Text>
            <Text style={styles.muted}>Intercambio I-018</Text>
            <View style={[styles.badge, { backgroundColor: colors.dark }]}>
                <Image source={icons.done} accessible={false} />
                <Text style={[styles.badgeText, styles.white]}>Completado</Text>
            </View>
            <View style={[styles.card, styles.photoCard]}>
                <Image source={excel.photo} accessible={false} style={styles.cardPhoto} />
                <View style={styles.cardContent}>
                    <Text style={styles.caption}>{excel.category}</Text>
                    <Text style={styles.body}>{excel.name}</Text>
                    <Text style={styles.small}>{excel.person}</Text>
                    <Text style={styles.credit}>{time(excel.hours)} · {credits(excel.hours)}</Text>
                </View>
            </View>
            <View style={[styles.panel, styles.padded]}>
                <Text style={styles.label}>Fecha y horario</Text>
                <Text style={styles.body}>30 sep 2026 · 17:00–19:00</Text>
                <Text style={styles.label}>Modalidad</Text>
                <Text style={styles.body}>En línea</Text>
            </View>
            <View style={styles.notice}>
                <Text style={styles.label}>Movimiento de créditos</Text>
                <Text style={styles.credit}>−2 créditos · Servicio tomado</Text>
                <Text style={styles.small}>Saldo después del intercambio: 8 créditos</Text>
            </View>
            <Pressable accessibilityRole="button" onPress={() => onOpen('rateExchange', { from: 'exchangeDetail' })} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Calificar intercambio</Text>
            </Pressable>
        </UserLayout>
    );
}
