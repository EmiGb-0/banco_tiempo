import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { colors, styles } from '../styles';

export default function CreateServiceScreen({ onOpen }) {
    return (
        <UserLayout contentStyle={{ gap: 12 }}>
            <Text accessibilityRole="header" style={styles.title}>Crear servicio</Text>
            <View style={styles.stack}>
                <Text style={styles.label}>Título del servicio</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>Ej. Fotografía con tu móvil</Text>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Descripción</Text>
                <View style={[styles.field, styles.multiline]}>
                    <Text style={[styles.muted, styles.grow]}>Describe el servicio que vas a ofrecer</Text>
                </View>
            </View>
            <View style={local.columns}>
                <View style={[styles.stack, styles.grow]}>
                    <Text style={styles.label}>Categoría</Text>
                    <View style={styles.field}>
                        <Text style={[styles.muted, styles.grow]}>Selecciona una categoría</Text>
                        <Image source={icons.down} accessible={false} />
                    </View>
                </View>
                <View style={[styles.stack, styles.grow]}>
                    <Text style={styles.label}>Modalidad</Text>
                    <View style={styles.field}>
                        <Text style={[styles.muted, styles.grow]}>Selecciona una modalidad</Text>
                        <Image source={icons.down} accessible={false} />
                    </View>
                </View>
            </View>
            <View style={local.columns}>
                <View style={[styles.stack, styles.grow]}>
                    <Text style={styles.label}>Duración en horas</Text>
                    <View style={styles.field}>
                        <Text style={[styles.muted, styles.grow]}>Selecciona la duración</Text>
                        <Image source={icons.clock} accessible={false} />
                    </View>
                </View>
                <View style={[styles.stack, styles.grow]}>
                    <Text style={styles.label}>Recibirás</Text>
                    <View style={[styles.field, local.highlight]}>
                        <Text style={[styles.credit, styles.grow]}>Se calcularán automáticamente</Text>
                    </View>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Imagen del servicio</Text>
                <View style={[styles.field, local.upload]}>
                    <Image source={icons.image} accessible={false} />
                    <View style={styles.grow}>
                        <Text style={styles.accent}>Añadir imagen · opcional</Text>
                        <Text style={styles.small}>JPG o PNG, hasta 5 MB</Text>
                    </View>
                </View>
            </View>
            <View style={local.tip}>
                <Text style={styles.credit}>1 hora = 1 crédito</Text>
                <Text style={styles.small}>Recibirás los créditos al completar el servicio.</Text>
            </View>
            <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                <Image source={icons.plus} accessible={false} />
                <Text style={styles.actionText}>Publicar servicio</Text>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Ejemplos de publicación</Text>
                <Pressable accessibilityRole="button" onPress={() => onOpen('servicePublished')} style={styles.link}>
                    <Text style={styles.accent}>Servicio publicado</Text>
                </Pressable>
                <Pressable accessibilityRole="button" onPress={() => onOpen('publishError')} style={styles.link}>
                    <Text style={styles.accent}>Error al publicar</Text>
                </Pressable>
            </View>
        </UserLayout>
    );
}

const local = StyleSheet.create({
    columns: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
    highlight: { backgroundColor: colors.mint, borderColor: colors.mint },
    upload: { minHeight: 54, borderStyle: 'dashed' },
    tip: { padding: 14, gap: 4, marginVertical: 4 },
});
