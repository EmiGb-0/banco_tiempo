import { Image, Pressable, Text, View } from 'react-native';
import UserLayout from '../layouts/UserLayout';
import { icons } from '../images';
import { camera, excel, photoshop, repair } from '../services';
import { styles } from '../styles';

const movements = [
    { service: excel.name, date: '30 sep 2026', amount: '−2', balance: 8, type: 'Servicio tomado' },
    { service: camera.name, date: '26 sep 2026', amount: '+2', balance: 10, type: 'Servicio ofrecido' },
    { service: photoshop.name, date: '19 sep 2026', amount: '+3', balance: 8, type: 'Servicio ofrecido' },
    { service: repair.name, date: '12 sep 2026', amount: '+1', balance: 5, type: 'Servicio ofrecido' },
];

export default function CreditsScreen({ onOpen }) {
    return (
        <UserLayout>
            <Pressable accessibilityRole="button" onPress={() => onOpen('profile')} style={[styles.row, styles.link]}>
                <Image source={icons.back} accessible={false} />
                <Text style={styles.muted}>Mi perfil</Text>
            </Pressable>
            <Text accessibilityRole="header" style={styles.title}>Mis créditos</Text>
            <Text style={styles.muted}>Cada hora de intercambio equivale a un crédito.</Text>
            <View style={styles.balance}>
                <View style={styles.between}>
                    <Text style={[styles.body, styles.white, styles.grow]}>Tus créditos disponibles</Text>
                    <Image source={icons.clockWhite} accessible={false} />
                </View>
                <Text style={styles.amount}>8 <Text style={[styles.body, styles.white]}>créditos de tiempo</Text></Text>
            </View>
            <Text style={styles.section}>Historial de movimientos</Text>
            {movements.map(({ service, date, amount, balance, type }) => (
                <View key={service} style={[styles.card, styles.padded]}>
                    <View style={styles.between}>
                        <Text style={[styles.label, styles.grow]}>{service}</Text>
                        <Text style={styles.accent}>{amount} cr</Text>
                    </View>
                    <Text style={styles.small}>{date} · {type}</Text>
                    <Text style={styles.credit}>Saldo: {balance} créditos</Text>
                </View>
            ))}
            <Text style={styles.small}>Saldo al inicio de septiembre: 4 créditos.</Text>
        </UserLayout>
    );
}
