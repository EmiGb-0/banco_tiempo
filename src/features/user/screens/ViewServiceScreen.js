import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, credits, excel, time } from '../services';
import { styles } from '../styles';

export default function ViewServiceScreen({ saved = false, service = excel, from, category, onOpen }) {
    const backTo = from || (saved ? 'favorites' : 'explore');
    const facts = [
        ['Duración', time(service.hours)],
        ['Costo', credits(service.hours)],
        ['Modalidad', service.mode],
    ];

    return (
        <UserLayout contentStyle={{ gap: 10 }}>
            <View style={styles.between}>
                <Pressable accessibilityRole="button" accessibilityLabel="Volver" hitSlop={12}
                    onPress={() => onOpen(backTo, { category })}>
                    <Image source={icons.back} accessible={false} />
                </Pressable>
                <Text accessibilityRole="header" style={styles.label}>{saved ? 'Servicio guardado' : 'Ver servicio'}</Text>
                <Image source={icons.heart} accessible={false} />
            </View>
            <Image source={service.banner || service.photo} accessible={false} style={local.banner} />
            <View style={styles.stack}>
                <View style={styles.between}>
                    <Text style={styles.accent}>{service.category}</Text>
                    {service.rating && (
                        <Text style={styles.small}>
                            ★ {service.rating}{service.ratingCount ? ` · ${service.ratingCount} valoraciones` : ''}
                        </Text>
                    )}
                </View>
                <Text style={styles.heading}>{service.name}</Text>
            </View>
            <View style={styles.row}>
                {service.avatar && <Image source={service.avatar} accessible={false} style={local.avatar} />}
                <View style={styles.grow}>
                    <Text style={styles.label}>{service.person}</Text>
                    <Text style={styles.small}>{service === excel ? 'Comparte su talento desde 2024' : 'Participante de Banco de Tiempo'}</Text>
                </View>
                <Image source={icons.verified} accessible={false} />
            </View>
            <View style={styles.stack}>
                <Text style={styles.body}>Lo que aprenderás</Text>
                <Text style={styles.muted}>{service.description}</Text>
            </View>
            <View style={[styles.panel, styles.row, { padding: 12 }]}>
                {facts.map(([label, value]) => (
                    <View key={label} style={styles.grow}>
                        <Text style={styles.small}>{label}</Text>
                        <Text style={styles.label}>{value}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.row}>
                <Image source={icons.calendar} accessible={false} />
                <View style={styles.grow}>
                    <Text style={styles.label}>Disponibilidad</Text>
                    <Text style={styles.small}>{service.availability}</Text>
                </View>
            </View>
            {service === camera ? (
                <Pressable accessibilityRole="button" style={styles.action} onPress={() => onOpen('manageService')}>
                    <Text style={styles.actionText}>Administrar servicio</Text>
                </Pressable>
            ) : (
                <>
                    <View style={styles.notice}>
                        <Text style={[styles.accent, { textAlign: 'center' }]}>{time(service.hours)} = {credits(service.hours)}</Text>
                        <Text style={styles.small}>Esta solicitud requiere aprobación. Tus créditos se descontarán al confirmar el intercambio.</Text>
                    </View>
                    <Pressable accessibilityRole="button" style={styles.action}
                        onPress={() => onOpen('createRequest', { service, backTo: saved ? 'savedService' : 'viewService', from, category })}>
                        <Image source={icons.arrow} accessible={false} />
                        <Text style={styles.actionText}>Solicitar servicio</Text>
                    </Pressable>
                </>
            )}
            {saved && (
                <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={[styles.action, styles.outline]}>
                    <Text style={[styles.actionText, styles.outlineText]}>Quitar de favoritos</Text>
                </View>
            )}
        </UserLayout>
    );
}

const local = StyleSheet.create({
    banner: { width: '100%', height: 130, borderRadius: 20 },
    avatar: { width: 40, height: 40, borderRadius: 20 },
});
