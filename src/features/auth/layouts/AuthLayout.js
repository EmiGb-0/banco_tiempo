import { StyleSheet, View } from 'react-native';

export default function AuthLayout({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#eff6ff',
        flex: 1,
        justifyContent: 'center',
        padding: 24,
    },
});
