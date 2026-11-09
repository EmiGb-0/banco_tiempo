import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { styles } from '../styles';

export const skills = [
    { name: 'Fotografía móvil', category: 'Creatividad', level: 'Intermedio', description: 'Composición y retratos con luz natural.' },
    { name: 'Edición de imágenes', category: 'Creatividad', level: 'Intermedio', description: 'Ajustes de color y retoque con Photoshop.' },
    { name: 'Reparación de computadoras', category: 'Tecnología', level: 'Básico', description: 'Mantenimiento preventivo y diagnóstico inicial.' },
];

export default function SkillsScreen({ onOpen }) {
    return (
        <UserLayout>
            <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen('profile')} style={styles.row}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>Mi perfil</Text>
            </Pressable>
            <Text accessibilityRole="header" style={styles.title}>Mis habilidades</Text>
            <Text style={styles.muted}>Talentos que puedes compartir en tus servicios.</Text>
            {skills.map((skill) => (
                <View key={skill.name} style={[styles.card, styles.padded]}>
                    <Text style={styles.caption}>{skill.category}</Text>
                    <Text style={styles.label}>{skill.name}</Text>
                    <Text style={styles.small}>{skill.description}</Text>
                    <View style={styles.wrap}>
                        <View style={styles.badge}><Text style={styles.badgeText}>{skill.level}</Text></View>
                        <Pressable accessibilityRole="button" onPress={() => onOpen('editSkill', { skill })} style={styles.link}>
                            <Text style={styles.accent}>Editar</Text>
                        </Pressable>
                        <Image source={icons.trash} accessible={false} />
                        <Text style={styles.small}>Eliminar</Text>
                    </View>
                </View>
            ))}
            <Pressable accessibilityRole="button" onPress={() => onOpen('addSkill')} style={styles.action}>
                <Image source={icons.plus} accessible={false} />
                <Text style={styles.actionText}>Registrar habilidad</Text>
            </Pressable>
        </UserLayout>
    );
}
