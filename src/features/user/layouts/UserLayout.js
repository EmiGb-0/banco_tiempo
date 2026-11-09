import { ScrollView, StyleSheet } from 'react-native';
import { colors } from '../styles';

export default function UserLayout({ children, contentStyle = null }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={[styles.content, contentStyle]}>
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { backgroundColor: colors.background, flex: 1 },
    content: {
        gap: 14,
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
        alignSelf: 'center',
        width: '100%',
        maxWidth: 600,
    },
});
