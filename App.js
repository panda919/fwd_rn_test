import React, { Suspense, useEffect, useRef } from 'react';
import {
    StyleSheet,
    View,
    UIManager,
    Platform,
    AppState,
    ActivityIndicator,
    Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store, persister } from '@store/store';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { navigationRef, isReadyRef } from '@src/RootNavigation';
import RootStack from './src/router';

enableScreens();
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
const App = () => {
    useEffect(() => {
        return () => {
            isReadyRef.current = false;
        };
    }, []);

    return (
        <SafeAreaProvider>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => {
                    isReadyRef.current = true;
                }}>
                <Provider store={store}>
                    <PersistGate
                        loading={
                            <View style={styles.container}>
                                <ActivityIndicator color="#219653" />
                            </View>
                        }
                        persistor={persister}>
                        <RootStack />
                    </PersistGate>
                </Provider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    droidSafeArea: {
        flex: 1,
    },
});
export default React.memo(App);
