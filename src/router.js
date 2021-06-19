import React from 'react';

import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

//= ================= screen components=============================
import HomeScreen from '@screens/HomeScreen';
import FirstScreen from '@screens/FirstScreen';
import SecondScreen from '@screens/SecondScreen';

//= ================= screen components end=============================
const Stack = createStackNavigator();
const NativeStack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="First" component={FirstScreen} />
        </Stack.Navigator>
    );
};
const RootStack = () => {
    return (
        <NativeStack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false, screenOrientation: 'portrait' }}>
            <NativeStack.Screen name="Main" component={MainStack} />
        </NativeStack.Navigator>
    );
};
export default React.memo(RootStack);
