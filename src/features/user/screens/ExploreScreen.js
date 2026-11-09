import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { credits, services, time } from '../services';
import { styles } from '../styles';

export default function ExploreScreen({ onOpen }) {
    return (
        <UserLayout>
            <View style={styles.between}>
                <Text accessibilityRole="header" style={styles.title}>Explorar</Text>
                <Pressable accessibilityRole="button" onPress={() => onOpen('userCategories')} style={styles.link}>
                    <Text style={styles.accent}>Categorías</Text>
                </Pressable>
            </View>
            <View style={styles.field}><Text style={styles.muted}>Busca un talento o servicio</Text></View>
            <View style={styles.wrap}>
                {['Todos', 'Tecnología', 'Educación', 'Hogar'].map((label) => (
                    <View key={label} style={[styles.chip, label === 'Todos' && styles.selected]}>
                        <Text style={[styles.small, label === 'Todos' && styles.white]}>{label}</Text>
                    </View>
                ))}
            </View>
            <View style={[styles.chip, { alignSelf: 'flex-start' }]}><Text style={styles.small}>Filtros</Text></View>
            <View style={styles.between}>
                <Text style={styles.label}>{services.length} servicios</Text>
                <View style={styles.row}>
                    <Text style={styles.small}>Ordenar por: Relevancia</Text>
                    <Image source={icons.down} accessible={false} />
                </View>
            </View>
            <View style={styles.list}>
                {services.map((service) => (
                    <Pressable accessibilityRole="button" accessibilityLabel={service.name} onPress={() => onOpen('viewService', { service })} key={service.name} style={[styles.card, styles.photoCard]}>
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
                            <View style={styles.between}>
                                <Text style={[styles.credit, styles.grow]}>{time(service.hours)} · {credits(service.hours)}</Text>
                                {service.rating && <Image source={icons.saved} accessible={false} />}
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>
        </UserLayout>
    );
}
