// Imports Geral
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Imports pages
import About from '../pages/about';
import Contact from '../pages/contact';
import StackShifts from './stackShifts';
// Icons
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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

        <Tab.Screen name='StackShifts' component={StackShifts}
        options={{
          tabBarIcon: ({color, size}) => {
            // Retorna como Icons
            return <Entypo name="home" size={size} color={color} />
            }
        }}
        ></Tab.Screen>

        <Tab.Screen name='CONTACT' component={Contact} 
        options={{
          tabBarIcon: ({color, size}) => {
            // Retorna como Icons
            return <AntDesign name="contacts" size={size} color={color} />
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
