import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { credits, services, time } from '../services';
import { styles } from '../styles';

const categories = [
    { name: 'Tecnología', description: 'Herramientas digitales, ofimática y reparación de equipos.' },
    { name: 'Educación', description: 'Idiomas y acompañamiento para aprender.' },
    { name: 'Hogar', description: 'Jardinería y habilidades prácticas para el hogar.' },
    { name: 'Creatividad', description: 'Fotografía, diseño y otras formas de expresión.' },
];

export default function CategoriesScreen({ category = null, onOpen }) {
    if (category) {
        const matching = services.filter((service) => service.category === category.name);
        return (
            <UserLayout>
                <Pressable accessibilityRole="button" accessibilityLabel={'Volver'} onPress={() => onOpen('userCategories')} style={styles.row}>
                    <Image source={icons.back} accessible={false} />
                    <Text style={styles.muted}>Categorías</Text>
                </Pressable>
                <Text accessibilityRole="header" style={styles.title}>{category.name}</Text>
                <Text style={styles.muted}>{category.description}</Text>
                <Text style={styles.section}>Servicios disponibles</Text>
                {matching.map((service) => (
                    <Pressable key={service.name} accessibilityRole="button" accessibilityLabel={service.name}
                        onPress={() => onOpen('viewService', { service, from: 'categoryDetail', category })}
                        style={[styles.card, styles.photoCard]}>
                        <Image source={service.photo} accessible={false} style={styles.cardPhoto} />
                        <View style={styles.cardContent}>
                            <Text style={styles.caption}>{service.category}</Text>
                            <Text style={styles.body}>{service.name}</Text>
                            <Text style={styles.small}>{service.person}</Text>
                            <Text style={styles.credit}>{time(service.hours)} · {credits(service.hours)}</Text>
                        </View>
                    </Pressable>
                ))}
            </UserLayout>
        );
    }

    return (
        <UserLayout>
            <Text accessibilityRole="header" style={styles.title}>Categorías</Text>
            <Text style={styles.muted}>Explora los talentos de la comunidad.</Text>
            {categories.map((category) => (
                <Pressable accessibilityRole="button" accessibilityLabel={category.name} onPress={() => onOpen('categoryDetail', { category })} key={category.name} style={[styles.card, styles.padded, styles.row]}>
                    <Image source={icons.book} accessible={false} />
                    <View style={[styles.grow, styles.stack]}>
                        <Text style={styles.label}>{category.name}</Text>
                        <Text style={styles.small}>{category.description}</Text>
                    </View>
                    <Image source={icons.right} accessible={false} />
                </Pressable>
            ))}
        </UserLayout>
    );
}
