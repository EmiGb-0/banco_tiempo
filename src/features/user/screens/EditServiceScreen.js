import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, cameraAvailability, cameraDescription } from '../services';
import { colors, styles } from '../styles';

export default function EditServiceScreen({ onOpen }) {
    return (
        <UserLayout contentStyle={{ gap: 9 }}>
            <Text accessibilityRole="header" style={styles.title}>Editar servicio</Text>
            <View style={styles.stack}>
                <Text style={styles.label}>Título del servicio</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{camera.name}</Text>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Descripción</Text>
                <View style={[styles.field, styles.multiline]}>
                    <Text style={[styles.muted, styles.grow]}>{cameraDescription}</Text>
                </View>
            </View>
            <View style={local.columns}>
                <View style={[styles.stack, styles.grow]}>
                    <Text style={styles.label}>Categoría</Text>
                    <View style={styles.field}>
                        <Text style={[styles.muted, styles.grow]}>{camera.category}</Text>
                        <Image source={icons.down} accessible={false} />
                    </View>
                </View>
                <View style={[styles.stack, styles.grow]}>
                    <Text style={styles.label}>Modalidad</Text>
                    <View style={styles.field}>
                        <Text style={[styles.muted, styles.grow]}>Presencial</Text>
                        <Image source={icons.down} accessible={false} />
                    </View>
                </View>
            </View>
            <View style={local.columns}>
                <View style={[styles.stack, styles.grow]}>
                    <Text style={styles.label}>Duración en horas</Text>
                    <View style={styles.field}>
                        <Text style={[styles.muted, styles.grow]}>2 horas</Text>
                    </View>
                </View>
                <View style={[styles.stack, styles.grow]}>
                    <Text style={styles.label}>Recibirás · automático</Text>
                    <View style={[styles.field, local.highlight]}><Text style={styles.accent}>2 créditos</Text></View>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Imagen del servicio</Text>
                <View style={[styles.field, local.upload]}>
                    <Image source={camera.photo} accessible={false} style={local.thumbnail} />
                    <Text style={[styles.accent, local.changePhoto]}>Cambiar imagen</Text>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Disponibilidad</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{cameraAvailability}</Text>
                </View>
            </View>
            <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>Guardar cambios</Text>
            </View>
            <Pressable accessibilityRole="button" onPress={() => onOpen('manageService')} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Cancelar</Text>
            </Pressable>
        </UserLayout>
    );
}

const local = StyleSheet.create({
    columns: { flexDirection: 'row', alignItems: 'flex-start', gap: 12 },
    highlight: { backgroundColor: colors.mint, borderColor: colors.mint },
    upload: { minHeight: 56, paddingHorizontal: 7 },
    thumbnail: { width: 48, height: 40, borderRadius: 8 },
    changePhoto: { flex: 1, textAlign: 'center', marginRight: 48 },
});
