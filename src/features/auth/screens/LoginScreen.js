import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import AuthLayout from '../layouts/AuthLayout';
import { colors, styles } from '../styles';

const arrow = require('../../../../assets/participant/arrow.png');

export default function LoginScreen({ onLogin, onRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        const credentials = {
            usuario: { password: 'usuario', role: 'user' },
            admin: { password: 'admin', role: 'admin' },
        };
        const account = credentials[username.trim().toLowerCase()];

        if (!account || account.password !== password) {
            setError('Usuario o contraseña incorrectos.');
            return;
        }

        setError('');
        onLogin(account.role);
    };

    return (
        <AuthLayout>
            <View style={styles.heading}>
                <Text accessibilityRole="header" style={styles.title}>Bienvenido</Text>
                <Text style={styles.description}>Ingresa para continuar.</Text>
            </View>
            <View style={styles.loginForm}>
                <View style={styles.field}>
                    <Text style={styles.label}>Correo electrónico</Text>
                    <TextInput
                        accessibilityLabel="Correo electrónico"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={setUsername}
                        placeholder="Ingresa tu correo"
                        placeholderTextColor={colors.muted}
                        style={styles.input}
                        value={username}
                    />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput
                        accessibilityLabel="Contraseña"
                        onChangeText={setPassword}
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor={colors.muted}
                        secureTextEntry
                        style={styles.input}
                        value={password}
                    />
                </View>
                <Text style={styles.recovery}>¿Olvidaste tu contraseña?</Text>
                {error ? (
                    <View style={styles.field}>
                        <Text accessibilityRole="alert" style={styles.error}>{error}</Text>
                        <Text style={styles.hint}>Credenciales de prueba: usuario / usuario o admin / admin</Text>
                    </View>
                ) : null}
                <Pressable accessibilityRole="button" onPress={handleLogin} style={styles.button}>
                    <Image source={arrow} accessible={false} />
                    <Text style={styles.buttonText}>Iniciar sesión</Text>
                </Pressable>
            </View>
            <Pressable accessibilityRole="link" accessibilityLabel="Crear cuenta" hitSlop={12}
                onPress={onRegister} style={styles.accountLink}>
                <Text style={styles.footer}>¿Aún no eres parte? <Text style={styles.link}>Crear cuenta</Text></Text>
            </Pressable>
            <Text style={styles.credit}>1 hora = 1 crédito</Text>
        </AuthLayout>
    );
}
