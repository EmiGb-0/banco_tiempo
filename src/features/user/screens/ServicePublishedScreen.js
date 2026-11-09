import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, credits, time } from '../services';
import { styles } from '../styles';

export default function ServicePublishedScreen({ onOpen }) {
    return (
        <UserLayout contentStyle={{ paddingTop: 64 }}>
            <View style={styles.symbol}><Image source={icons.check} accessible={false} /></View>
            <View style={styles.stack}>
                <Text accessibilityRole="header" style={styles.title}>Servicio publicado</Text>
                <Text style={styles.muted}>Tu servicio ya está disponible para la comunidad.</Text>
            </View>
            <View style={[styles.card, styles.photoCard]}>
                <Image source={camera.photo} accessible={false} style={styles.cardPhoto} />
                <View style={styles.cardContent}>
                    <Text style={styles.caption}>{camera.category}</Text>
                    <Text style={styles.body}>{camera.name}</Text>
                    <Text style={styles.credit}>{time(camera.hours)} · {credits(camera.hours)}</Text>
                </View>
            </View>
            <View style={styles.badge}>
                <Image source={icons.eye} accessible={false} />
                <Text style={styles.badgeText}>Publicado</Text>
            </View>
            <Pressable accessibilityRole="button" onPress={() => onOpen('viewService', { service: camera, from: 'servicePublished' })} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>Ver servicio</Text>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={() => onOpen('manageService')} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Administrar servicio</Text>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={() => onOpen('userHome')} style={styles.link}>
                <Text style={[styles.accent, { textAlign: 'center' }]}>Volver al inicio</Text>
            </Pressable>
        </UserLayout>
    );
}
