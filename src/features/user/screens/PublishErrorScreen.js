import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { colors, styles } from '../styles';

export default function PublishErrorScreen({ onOpen }) {
    return (
        <UserLayout contentStyle={{ paddingTop: 84 }}>
            <View style={[styles.symbol, { backgroundColor: colors.sand }]}><Image source={icons.error} accessible={false} /></View>
            <View style={styles.stack}>
                <Text accessibilityRole="header" style={styles.title}>No pudimos publicar tu servicio</Text>
                <Text style={styles.muted}>Ocurrió un problema al guardar la información.</Text>
            </View>
            <Text style={styles.credit}>Tus datos no se han perdido.</Text>
            <View accessible accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.action}>
                <Image source={icons.arrow} accessible={false} />
                <Text style={styles.actionText}>Intentar nuevamente</Text>
            </View>
            <Pressable accessibilityRole="button" onPress={() => onOpen('createService')} style={[styles.action, styles.outline]}>
                <Text style={[styles.actionText, styles.outlineText]}>Volver a editar</Text>
            </Pressable>
        </UserLayout>
    );
}
