import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, excel } from '../services';
import { colors, styles } from '../styles';

const hours = [
    { label: 'Horas ofrecidas', count: 6, width: '75%' },
    { label: 'Horas recibidas', count: 2, width: '25%' },
];

export default function ActivityScreen({ report = false, onOpen }) {
    return (
        <UserLayout>
            {report && (
                <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen('userActivity')} style={styles.row}>
                    <Image source={icons.back} accessible={false} />
                    <Text style={styles.muted}>Mi actividad</Text>
                </Pressable>
            )}
            <Text accessibilityRole="header" style={styles.title}>{report ? 'Reporte personal' : 'Mi actividad'}</Text>
            <Text style={styles.muted}>Septiembre de 2026</Text>
            {report ? (
                <View style={[styles.panel, styles.row, styles.padded]}>
                    <View style={styles.grow}><Text style={styles.small}>Créditos ganados</Text><Text style={styles.heading}>+6</Text></View>
                    <View style={styles.grow}><Text style={styles.small}>Créditos usados</Text><Text style={styles.heading}>−2</Text></View>
                </View>
            ) : (
                <>
                    <Pressable accessibilityRole="button" accessibilityLabel={'Mis créditos'} onPress={() => onOpen('userCredits')} style={styles.balance}>
                        <View style={styles.between}>
                            <Text style={[styles.body, styles.white, styles.grow]}>Tus créditos disponibles</Text>
                            <Image source={icons.clockWhite} accessible={false} />
                        </View>
                        <Text style={styles.amount}>8 <Text style={[styles.body, styles.white]}>créditos de tiempo</Text></Text>
                    </Pressable>
                    <View style={local.summary}>
                        <View style={local.stat}>
                            <View style={styles.between}>
                                <Text style={styles.heading}>3</Text>
                                <Image source={icons.handshake} accessible={false} />
                            </View>
                            <Text style={styles.small}>Servicios ofrecidos</Text>
                        </View>
                        <View style={local.stat}>
                            <View style={styles.between}>
                                <Text style={styles.heading}>1</Text>
                                <Image source={icons.book} accessible={false} />
                            </View>
                            <Text style={styles.small}>Servicios solicitados y completados</Text>
                        </View>
                    </View>
                </>
            )}
            <View style={[styles.card, local.chart]}>
                <View style={styles.between}>
                    <Text style={[styles.label, styles.grow]}>Horas intercambiadas</Text>
                    <Text style={styles.heading}>8 h</Text>
                </View>
                {hours.map(({ label, count, width }) => (
                    <View key={label} style={styles.stack}>
                        <View style={styles.between}>
                            <Text style={styles.small}>{label}</Text>
                            <Text style={styles.credit}>{count} h</Text>
                        </View>
                        <View style={local.track}><View style={[local.bar, { width }]} /></View>
                    </View>
                ))}
            </View>
            {report ? (
                <>
                    <Text style={styles.section}>Actividad reciente</Text>
                    <View style={[styles.card, styles.padded]}>
                        <Text style={styles.label}>{excel.name}</Text>
                        <Text style={styles.small}>30 sep 2026 · Servicio tomado</Text>
                        <Text style={styles.credit}>−2 créditos</Text>
                    </View>
                    <View style={[styles.card, styles.padded]}>
                        <Text style={styles.label}>{camera.name}</Text>
                        <Text style={styles.small}>26 sep 2026 · Servicio ofrecido</Text>
                        <Text style={styles.credit}>+2 créditos</Text>
                    </View>
                </>
            ) : (
                <Pressable accessibilityRole="button" onPress={() => onOpen('userReport')} style={[styles.action, styles.outline]}>
                    <Text style={[styles.actionText, styles.outlineText]}>Ver reporte personal</Text>
                </Pressable>
            )}
        </UserLayout>
    );
}

const local = StyleSheet.create({
    summary: { flexDirection: 'row', gap: 12 },
    stat: { flex: 1, backgroundColor: colors.sand, borderRadius: 12, padding: 14, gap: 6 },
    chart: { padding: 14, gap: 12 },
    track: { height: 8, borderRadius: 4, backgroundColor: colors.mint },
    bar: { height: '100%', borderRadius: 4, backgroundColor: colors.green },
});
