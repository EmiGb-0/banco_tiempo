import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { styles } from '../styles';
import { skills } from './SkillsScreen';

export default function SkillFormScreen({ editing = false, skill = skills[0], onOpen }) {
    return (
        <UserLayout>
            <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen('skills')} style={styles.row}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>Mis habilidades</Text>
            </Pressable>
            <Text accessibilityRole="header" style={styles.title}>{editing ? 'Editar habilidad' : 'Registrar habilidad'}</Text>
            <View style={styles.stack}>
                <Text style={styles.label}>Nombre de la habilidad</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{editing ? skill.name : 'Ej. Fotografía móvil'}</Text>
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Categoría</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{editing ? skill.category : 'Selecciona una categoría'}</Text>
                    <Image source={icons.down} accessible={false} />
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Nivel</Text>
                <View style={styles.field}>
                    <Text style={[styles.muted, styles.grow]}>{editing ? skill.level : 'Selecciona tu nivel'}</Text>
                    <Image source={icons.down} accessible={false} />
                </View>
            </View>
            <View style={styles.stack}>
                <Text style={styles.label}>Descripción</Text>
                <View style={[styles.field, styles.multiline]}>
                    <Text style={[styles.muted, styles.grow]}>{editing ? skill.description : 'Describe qué puedes compartir'}</Text>
                </View>
            </View>
            <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>{editing ? 'Guardar cambios' : 'Registrar habilidad'}</Text>
            </View>
            <Pressable accessibilityRole="button" onPress={() => onOpen('skills')} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Cancelar</Text>
            </Pressable>
        </UserLayout>
    );
}
