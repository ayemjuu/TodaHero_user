import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminScreen from './Screens/AdminScreen';
import LoginScreen from './Screens/LoginScreen';
import LoadingScreen from './Screens/LoadingScreen';
import NotificationDetailScreen from './Screens/BottomNav/NotificationDetailScreen';
import HistoryDetailScreen from './Screens/BottomNav/HistoryDetailScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
      {/* <Stack.Navigator initialRouteName="Admin" screenOptions={{ headerShown: false }}> */}
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />



        <Stack.Screen name="NotificationDetail" component={NotificationDetailScreen} />
        <Stack.Screen name="HistoryDetail" component={HistoryDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
