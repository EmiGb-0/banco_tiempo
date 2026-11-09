import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, credits, photoshop, repair, time } from '../services';
import { colors, styles } from '../styles';

const offered = [
    { service: camera, date: '26 sep 2026', person: 'Carlos Hernández' },
    { service: photoshop, date: '19 sep 2026', person: 'Mariana López' },
    { service: repair, date: '12 sep 2026', person: 'Diego Ruiz' },
];

export default function OfferedServicesScreen({ onOpen }) {
    return (
        <UserLayout>
            <Text accessibilityRole="header" style={styles.title}>Servicios ofrecidos</Text>
            <View style={styles.wrap}>
                {['Tomados', 'Ofrecidos'].map((label) => (
                    <Pressable accessibilityRole="button" onPress={() => onOpen(label === 'Ofrecidos' ? 'offeredServices' : 'takenServices')} key={label} style={[styles.chip, label === 'Ofrecidos' && styles.selected]}>
                        <Text style={[styles.small, label === 'Ofrecidos' && styles.white]}>{label}</Text>
                    </Pressable>
                ))}
            </View>
            {offered.map(({ service, date, person }) => (
                <View key={service.name} style={styles.list}>
                    <View style={[styles.card, styles.padded]}>
                        <Text style={styles.caption}>{date}</Text>
                        <Text style={styles.body}>{service.name}</Text>
                        <Text style={styles.small}>Participante: {person}</Text>
                        <Text style={styles.credit}>{time(service.hours)} · +{credits(service.hours)}</Text>
                    </View>
                    <View style={[styles.badge, { backgroundColor: colors.dark }]}>
                        <Image source={icons.done} accessible={false} />
                        <Text style={[styles.badgeText, styles.white]}>Completado</Text>
                    </View>
                </View>
            ))}
        </UserLayout>
    );
}
