import { Image, Pressable, Text, TextInput, View } from 'react-native';
import AuthLayout from '../layouts/AuthLayout';
import { colors, styles } from '../styles';

const arrow = require('../../../../assets/participant/arrow.png');
const termsCheck = require('../../../../assets/auth/terms-check.png');

const fields = [
    { label: 'Nombre completo', placeholder: 'Ingresa tu nombre completo', capitalize: true },
    { label: 'Correo electrónico', placeholder: 'Ingresa tu correo', email: true },
    { label: 'Contraseña', placeholder: 'Crea una contraseña', password: true },
    { label: 'Confirmar contraseña', placeholder: 'Repite tu contraseña', password: true },
];

export default function RegisterScreen({ onSignIn }) {
    return (
        <AuthLayout compact>
            <View style={styles.heading}>
                <Text accessibilityRole="header" style={styles.title}>Crea tu cuenta</Text>
                <Text style={styles.description}>Registra tus datos para empezar a intercambiar.</Text>
            </View>
            <View style={styles.registerForm}>
                {fields.map(({ label, placeholder, capitalize, email, password }) => (
                    <View key={label} style={styles.field}>
                        <Text style={styles.label}>{label}</Text>
                        <TextInput
                            accessibilityLabel={label}
                            autoCapitalize={capitalize ? 'words' : 'none'}
                            autoCorrect={false}
                            keyboardType={email ? 'email-address' : 'default'}
                            placeholder={placeholder}
                            placeholderTextColor={colors.muted}
                            secureTextEntry={password}
                            style={styles.input}
                        />
                    </View>
                ))}
                <Text style={styles.hint}>Usa al menos 8 caracteres, una letra y un número.</Text>
            </View>
            <View style={styles.terms}>
                <Image source={termsCheck} accessible={false} />
                <Text style={styles.termsText}>
                    Acepto los <Text style={styles.termsLink}>términos de uso</Text> y el compromiso de respeto de la comunidad.
                </Text>
            </View>
            <View accessible accessibilityRole="button" aria-disabled style={styles.button}>
                <Image source={arrow} accessible={false} />
                <Text style={styles.buttonText}>Crear cuenta</Text>
            </View>
            <Pressable accessibilityRole="link" accessibilityLabel="Iniciar sesión" hitSlop={12}
                onPress={onSignIn} style={styles.accountLink}>
                <Text style={styles.footer}>¿Ya tienes cuenta? <Text style={styles.link}>Iniciar sesión</Text></Text>
            </Pressable>
        </AuthLayout>
    );
}
