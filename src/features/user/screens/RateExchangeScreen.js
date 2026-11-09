import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { icons, photos } from '../images';
import { excel } from '../services';
import { colors, styles } from '../styles';
import TakenServicesScreen from './TakenServicesScreen';

export default function RateExchangeScreen({ onOpen, from = 'takenServices' }) {
    return (
        <View style={styles.grow}>
            <View style={styles.grow} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
                <TakenServicesScreen onOpen={onOpen} />
            </View>
            <View style={local.overlay}>
                <View style={local.sheet}>
                    <ScrollView contentContainerStyle={local.content}>
                        <View style={local.handle} />
                        <Text accessibilityRole="header" style={styles.title}>Ya puedes calificar este servicio</Text>
                        <View style={styles.row}>
                            <Image source={photos.lucia} accessible={false} style={local.avatar} />
                            <View style={styles.grow}>
                                <Text style={styles.label}>{excel.name}</Text>
                                <Text style={styles.small}>{excel.person}</Text>
                            </View>
                        </View>
                        <Text style={styles.label}>¿Cómo fue tu experiencia?</Text>
                        <View accessible accessibilityLabel="Cinco estrellas sin seleccionar" style={local.stars}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Image key={star} source={icons.star} accessible={false} />
                            ))}
                        </View>
                        <View style={styles.stack}>
                            <Text style={styles.label}>Comentario · opcional</Text>
                            <View style={styles.field}>
                                <Text style={[styles.muted, styles.grow]}>Cuéntanos un poco más…</Text>
                            </View>
                        </View>
                        <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                            <Image source={icons.arrow} accessible={false} />
                            <Text style={styles.actionText}>Enviar valoración</Text>
                        </View>
                        <Pressable accessibilityRole="button" onPress={() => onOpen(from)} style={styles.link}>
                            <Text style={[styles.accent, local.cancel]}>Ahora no</Text>
                        </Pressable>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const local = StyleSheet.create({
    overlay: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(32,59,48,0.4)', justifyContent: 'flex-end' },
    sheet: { width: '100%', maxWidth: 600, maxHeight: '95%', alignSelf: 'center', borderTopLeftRadius: 28, borderTopRightRadius: 28, backgroundColor: colors.white, overflow: 'hidden' },
    content: { gap: 14, padding: 24 },
    handle: { width: 40, height: 4, alignSelf: 'center', backgroundColor: colors.border, borderRadius: 2 },
    avatar: { width: 40, height: 40, borderRadius: 20 },
    stars: { flexDirection: 'row', justifyContent: 'space-evenly' },
    cancel: { textAlign: 'center', paddingVertical: 8 },
});
