import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { credits, english, excel, garden } from '../services';
import { styles } from '../styles';

const favorites = [excel, garden, english];

export default function FavoritesScreen({ onOpen }) {
    return (
        <UserLayout contentStyle={{ gap: 16 }}>
            <View style={styles.between}>
                <Text accessibilityRole="header" style={styles.title}>Tus favoritos</Text>
                <Image source={icons.heart} accessible={false} />
            </View>
            <View style={styles.between}>
                <Text style={styles.label}>{favorites.length} servicios guardados</Text>
                <Text style={styles.small}>Más recientes</Text>
            </View>
            {favorites.map((service) => (
                <Pressable accessibilityRole="button" accessibilityLabel={service.name} onPress={() => onOpen('savedService', { service })} key={service.name} style={[styles.card, styles.photoCard, local.tall]}>
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
                            <Text style={[styles.credit, styles.grow]}>{service.hours} h · {credits(service.hours)}</Text>
                            <Image source={icons.saved} accessible={false} />
                        </View>
                    </View>
                </Pressable>
            ))}
        </UserLayout>
    );
}

const local = StyleSheet.create({ tall: { minHeight: 142 } });
