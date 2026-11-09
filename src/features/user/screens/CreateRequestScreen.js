import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { credits, excel, time } from '../services';
import { styles } from '../styles';
import { requests } from './RequestsScreen';

export default function CreateRequestScreen({ service = excel, backTo = 'requests', from, category, onOpen }) {
    const { date, time: schedule } = requests.find((request) => request.service === service) || requests[0];

    return (
        <UserLayout>
            <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen(backTo, { service, from, category })} style={styles.row}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>{backTo === 'requests' ? 'Mis solicitudes' : 'Ver servicio'}</Text>
            </Pressable>
            <Text accessibilityRole="header" style={styles.title}>Solicitar servicio</Text>
            <Text style={styles.muted}>Propón un horario para el intercambio.</Text>
            <View style={[styles.card, styles.photoCard]}>
                <Image source={service.photo} accessible={false} style={styles.cardPhoto} />
                <View style={styles.cardContent}>
                    <Text style={styles.caption}>{service.category}</Text>
                    <Text style={styles.body}>{service.name}</Text>
                    <Text style={styles.small}>{service.person}</Text>
                    <Text style={styles.credit}>{time(service.hours)} · {credits(service.hours)}</Text>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Fecha propuesta</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{date}</Text>
                    <Image source={icons.calendar} accessible={false} />
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Horario</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{schedule}</Text>
                    <Image source={icons.clock} accessible={false} />
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Mensaje para {service.person.split(' ')[0]} · opcional</Text>
                <View style={[styles.field, styles.multiline]}>
                    <Text style={[styles.muted, styles.grow]}>Cuéntale qué te gustaría aprender…</Text>
                </View>
            </View>
            <View style={styles.notice}>
                <Text style={styles.accent}>{time(service.hours)} = {credits(service.hours)}</Text>
                <Text style={styles.small}>Tus créditos se descontarán al confirmar el intercambio.</Text>
            </View>
            <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>Enviar solicitud</Text>
            </View>
            <Pressable accessibilityRole="button" onPress={() => onOpen(backTo, { service, from, category })} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Cancelar</Text>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={() => onOpen('requestSent', { service })} style={styles.link}>
                <Text style={styles.accent}>Ver ejemplo de solicitud enviada</Text>
            </Pressable>
        </UserLayout>
    );
}
