// Imports Geral
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Imports pages
import Registration from '../pages/registration';
import StackShifts from './stackShifts';
import About from '../pages/about';
// Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../pages/home';


// Cria a Tab
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    // NavBar Footer
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'orange',
      tabBarStyle: {
        backgroundColor: '#e2e2e2'
      } 
    }}>

        <Tab.Screen name='HOME' component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            // Retorna como Icons
            return <AntDesign name="contacts" size={size} color={color} />
            }
        }}
        ></Tab.Screen>

        <Tab.Screen name='REGISTRATION' component={Registration} 
        options={{
          tabBarIcon: ({color, size}) => {
            // Retorna como Icons
            return <AntDesign name="team" size={size} color={color} />
            }
        }}
        ></Tab.Screen>

        <Tab.Screen name='ABOUT' component={About} 
        options={{
          tabBarIcon: ({color, size}) => {
            // Retorna como Icons
            return <FontAwesome name="book" size={size} color={color} />
          }
        }}
        ></Tab.Screen>

      </Tab.Navigator>
    // /NavBar Footer
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
