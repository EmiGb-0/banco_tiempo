import { Image, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, excel, photoshop } from '../services';
import { styles } from '../styles';

const reviews = [
    {
        section: 'Recibidas',
        items: [
            { service: camera.name, person: 'Carlos Hernández', date: '26 sep 2026', comment: 'Explicó muy bien cómo aprovechar la luz natural.' },
            { service: photoshop.name, person: 'Mariana López', date: '19 sep 2026', comment: 'Pude seguir los pasos y resolver mis dudas.' },
        ],
    },
    {
        section: 'Realizadas',
        items: [
            { service: excel.name, person: excel.person, date: '30 sep 2026', comment: 'Me ayudó a organizar mis datos con ejemplos prácticos.' },
        ],
    },
];

export default function ReviewsScreen() {
    return (
        <UserLayout>
            <Text accessibilityRole="header" style={styles.title}>Mis calificaciones</Text>
            <Text style={styles.muted}>Valoraciones de intercambios completados.</Text>
            {reviews.map(({ section, items }) => (
                <View key={section} style={styles.list}>
                    <Text style={styles.section}>{section}</Text>
                    {items.map(({ service, person, date, comment }) => (
                        <View key={service} style={[styles.card, styles.padded]}>
                            <View style={styles.between}>
                                <Text style={[styles.label, styles.grow]}>{service}</Text>
                                <View style={styles.row}>
                                    <Image source={icons.rating} accessible={false} />
                                    <Text style={styles.label}>5/5</Text>
                                </View>
                            </View>
                            <Text style={styles.small}>{person} · {date}</Text>
                            <Text style={styles.body}>{comment}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </UserLayout>
    );
}
