import { Platform, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';

import { Route, Routes } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        fontFamily: Platform.select({
            android: "roboto",
            ios: "arial", 
            default: "sans-serif",
        }), 
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<SignIn />} />
            </Routes>
        </View>
    );
};

export default Main;