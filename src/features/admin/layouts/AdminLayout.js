import { StyleSheet, View } from 'react-native';

export default function AdminLayout({ children }) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f5f9',
        flex: 1,
        padding: 24,
    },
});
