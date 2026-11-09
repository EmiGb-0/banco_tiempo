import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { credits, excel, time } from '../services';
import { colors, styles } from '../styles';

export default function RequestSentScreen({ service = excel, onOpen }) {
    return (
        <UserLayout contentStyle={{ paddingTop: 24 }}>
            <View style={styles.symbol}><Image source={icons.check} accessible={false} /></View>
            <View style={styles.stack}>
                <Text accessibilityRole="header" style={styles.title}>Solicitud enviada</Text>
                <Text style={styles.muted}>{service.person.split(' ')[0]} revisará tu solicitud</Text>
            </View>
            <View style={[styles.card, styles.photoCard]}>
                <Image source={service.photo} accessible={false} style={styles.cardPhoto} />
                <View style={styles.cardContent}>
                    <Text style={styles.caption}>{service.category}</Text>
                    <Text style={styles.body}>{service.name}</Text>
                    <Text style={styles.small}>{service.person}</Text>
                    <Text style={styles.credit}>{time(service.hours)} · {credits(service.hours)}</Text>
                </View>
            </View>
            <View style={[styles.badge, { backgroundColor: colors.sand }]}>
                <Image source={icons.clockSmall} accessible={false} />
                <Text style={styles.badgeText}>Pendiente de aprobación</Text>
            </View>
            <Text style={styles.credit}>Tus créditos aún no han sido descontados.</Text>
            <Text style={styles.small}>Se descontarán al confirmar el intercambio.</Text>
            <Pressable accessibilityRole="button" onPress={() => onOpen('requests')} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>Ver mis solicitudes</Text>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={() => onOpen('userHome')} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Volver al inicio</Text>
            </Pressable>
        </UserLayout>
    );
}
