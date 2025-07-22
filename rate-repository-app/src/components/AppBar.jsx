import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

import { Link } from 'react-router-native';

import Text from './Text';
import { ScrollView } from 'react-native-web';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24292e',
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 15,
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    tab: {
        marginRight: 20,
    },
    tabText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.tabContainer} showsHorizontalScrollIndicator={false}>
                <Link to="/" component={Pressable} style={styles.tab}>
                    <Text style={styles.tabText}>Repositories</Text>
                </Link>
                <Link to="/signin" component={Pressable} style={styles.tab}>
                    <Text style={styles.tabText}>Sign in</Text>
                </Link>
            </ScrollView>
        </View>
    );
};

export default AppBar;