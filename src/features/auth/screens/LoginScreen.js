import AuthLayout from '../layouts/AuthLayout';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen({ onLogin }) {
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
            <View style={styles.card}>
                <Text style={styles.title}>Iniciar sesión</Text>
                <Text style={styles.description}>
                    Accede a tu cuenta de Banco de Tiempo.
                </Text>
                <TextInput
                    autoCapitalize="none"
                    onChangeText={setUsername}
                    placeholder="Usuario"
                    style={styles.input}
                    value={username}
                />
                <TextInput
                    onChangeText={setPassword}
                    placeholder="Contraseña"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                />
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <Pressable onPress={handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </Pressable>
                <Text style={styles.hint}>
                    Credenciales de prueba: usuario / usuario o admin / admin
                </Text>
            </View>
        </AuthLayout>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        maxWidth: 420,
        padding: 24,
        width: '100%',
    },
    title: {
        color: '#16213e',
        fontSize: 26,
        fontWeight: '700',
    },
    description: {
        color: '#64748b',
        fontSize: 15,
        marginTop: 8,
    },
    input: {
        borderColor: '#cbd5e1',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 16,
        padding: 14,
    },
    error: {
        color: '#dc2626',
        fontSize: 13,
        marginTop: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2563eb',
        borderRadius: 10,
        marginTop: 20,
        padding: 14,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: '700',
    },
    hint: {
        color: '#64748b',
        fontSize: 12,
        marginTop: 16,
        textAlign: 'center',
    },
});
