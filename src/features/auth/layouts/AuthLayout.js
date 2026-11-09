import { Image, Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles';

const handshake = require('../../../../assets/auth/handshake-login.png');
const compactHandshake = require('../../../../assets/auth/handshake-register.png');

export default function AuthLayout({ children, compact = false }) {
    const Frame = Platform.OS === 'ios' ? SafeAreaView : View;

    return (
        <Frame style={styles.screen}>
            <ScrollView automaticallyAdjustKeyboardInsets keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
                <View style={styles.brand}>
                    <View style={[styles.brandIcon, compact && styles.compactIcon]}>
                        <Image source={compact ? compactHandshake : handshake} accessible={false} />
                    </View>
                    <View style={styles.brandText}>
                        <Text style={[styles.brandName, compact && styles.compactName]}>Banco de Tiempo</Text>
                        <Text style={[styles.brandSuffix, compact && styles.compactSuffix]}>y Talento</Text>
                    </View>
                </View>
                {children}
            </ScrollView>
        </Frame>
    );
}
