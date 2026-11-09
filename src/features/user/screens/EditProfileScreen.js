import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons, photos } from '../images';
import { camera } from '../services';
import { styles } from '../styles';
import { email } from './ProfileScreen';

export default function EditProfileScreen({ onOpen }) {
    return (
        <UserLayout>
            <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen('profile')} style={styles.row}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>Mi perfil</Text>
            </Pressable>
            <Text accessibilityRole="header" style={styles.title}>Editar perfil</Text>
            <View style={styles.row}>
                <Image source={photos.alex} accessible={false} style={local.avatar} />
                <Text style={styles.accent}>Cambiar foto</Text>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Nombre completo</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{camera.person}</Text>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Correo electrónico</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{email}</Text>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Sobre mí</Text>
                <View style={[styles.field, styles.multiline]}>
                    <Text style={[styles.muted, styles.grow]}>Me gusta compartir lo que sé de fotografía y aprender de mi comunidad.</Text>
                </View>
            </View>
            <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>Guardar cambios</Text>
            </View>
            <Pressable accessibilityRole="button" onPress={() => onOpen('profile')} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Cancelar</Text>
            </Pressable>
        </UserLayout>
    );
}

const local = StyleSheet.create({ avatar: { width: 72, height: 72, borderRadius: 36 } });
