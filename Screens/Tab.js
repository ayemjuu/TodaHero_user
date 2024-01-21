import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './BottomNav/HomeScreen';
import HistoryScreen from './BottomNav/HistoryScreen';
import NotificationScreen from './BottomNav/NotificationScreen';
import TricycleScreen from './BottomNav/TricycleScreen';
import UserScreen from './BottomNav/UserScreen';

const Tab = createMaterialBottomTabNavigator();



function MyTabs() {
    
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Tricycle" component={TricycleScreen} />
      <Tab.Screen name="User" component={UserScreen} />
      
    </Tab.Navigator>
  );
}
export default MyTabs;