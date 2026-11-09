import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons, photos } from '../images';
import { credits, excel, garden } from '../services';
import { styles } from '../styles';

export default function UserHomeScreen({ onOpen }) {
    return (
        <UserLayout>
            <View style={styles.row}>
                <Image source={photos.alexHome} accessible={false} style={local.avatar} />
                <View style={styles.grow}>
                    <Text accessibilityRole="header" style={styles.heading}>Hola, Alex</Text>
                    <Text style={styles.small}>¿Qué te gustaría aprender hoy?</Text>
                </View>
                <Image source={icons.bell} accessible={false} />
            </View>
            <Pressable accessibilityRole="button" accessibilityLabel={'Mis créditos'} onPress={() => onOpen('userCredits')} style={styles.balance}>
                <View style={styles.between}>
                    <Text style={[styles.body, styles.white, styles.grow]}>Tus créditos disponibles</Text>
                    <Image source={icons.clockWhite} accessible={false} />
                </View>
                <Text style={styles.amount}>8 <Text style={[styles.body, styles.white]}>créditos de tiempo</Text></Text>
            </Pressable>
            <View style={styles.field}>
                <Image source={icons.search} accessible={false} />
                <Text style={styles.muted}>Busca un talento o servicio</Text>
            </View>
            <View style={styles.wrap}>
                {['Todos', 'Tecnología', 'Educación', 'Hogar'].map((label) => (
                    <View key={label} style={[styles.chip, label === 'Todos' && styles.selected]}>
                        <Text style={[styles.small, label === 'Todos' && styles.white]}>{label}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.between}>
                <Text style={styles.section}>Recomendados</Text>
                <Pressable accessibilityRole="button" onPress={() => onOpen('explore')} style={styles.link}>
                    <Text style={styles.accent}>Ver todos</Text>
                </Pressable>
            </View>
            {[excel, garden].map((service) => (
                <Pressable accessibilityRole="button" accessibilityLabel={service.name} onPress={() => onOpen('viewService', { service, from: 'userHome' })} key={service.name} style={[styles.card, styles.photoCard, local.tall]}>
                    <Image source={service.photo} accessible={false} style={styles.cardPhoto} />
                    <View style={styles.cardContent}>
                        <View style={styles.between}>
                            <Text style={styles.caption}>{service.category}</Text>
                            {service.rating && (
                                <View style={[styles.row, { gap: 3 }]}>
                                    <Image source={icons.rating} accessible={false} />
                                    <Text style={styles.small}>{service.rating}</Text>
                                </View>
                            )}
                        </View>
                        <Text style={styles.body}>{service.name}</Text>
                        <Text style={styles.small}>{service.person}</Text>
                        <Text style={styles.credit}>{service.hours} h · {credits(service.hours)}</Text>
                    </View>
                </Pressable>
            ))}
        </UserLayout>
    );
}

const local = StyleSheet.create({
    avatar: { width: 44, height: 44, borderRadius: 22 },
    tall: { minHeight: 142 },
});
