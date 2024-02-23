import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminScreen from './Screens/AdminScreen';
import LoginScreen from './Screens/LoginScreen';
import LoadingScreen from './Screens/LoadingScreen';
import NotificationDetailScreen from './Screens/BottomNav/NotificationDetailScreen';
import HistoryDetailScreen from './Screens/BottomNav/HistoryDetailScreen'
import BookingScreen from './Screens/BottomNav/BookingScreen';
import BookingDetailScreen from './Screens/BottomNav/BookingDetailScreen';
import TrackScreen from './Screens/BottomNav/TrackScreen';
import ReportScreen from './Screens/BottomNav/ReportScreen';

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
        <Stack.Screen name="Bookings" component={BookingScreen} />
        <Stack.Screen name="BookingDetail" component={BookingDetailScreen} />
        <Stack.Screen name="TrackScreen" component={TrackScreen} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
