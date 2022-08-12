// Imports Geral
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Imports SRC/Components
import Home from './src/pages/home';
import About from './src/pages/about';
import Contact from './src/pages/contact';
// Icons
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// Cria a Tab
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    // NavBar Footer
    <NavigationContainer>

      {/* Retirar Header no TOP da Pagina */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarStyle: {
            backgroundColor: '#e2e2e2'
          } 
        }}
      >
      {/* /Retirar Header no TOP da Pagina */}

        <Tab.Screen name='HOME' 
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => {
            // Retorna como Icons
            return <Entypo name="home" size={size} color={color} />
            }
        }}
        ></Tab.Screen>

        <Tab.Screen name='CONTACT' 
        component={Contact} 
        options={{
          tabBarIcon: ({color, size}) => {
            // Retorna como Icons
            return <AntDesign name="contacts" size={size} color={color} />
            }
        }}
        ></Tab.Screen>

        <Tab.Screen name='ABOUT' 
        component={About} 
        options={{
          tabBarIcon: ({color, size}) => {
            // Retorna como Icons
            return <FontAwesome name="book" size={size} color={color} />
          }
        }}
        ></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
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
