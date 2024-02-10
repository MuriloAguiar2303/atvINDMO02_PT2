import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackRoutes from './StackRoutes';

import Home from '../pages/Home'
import Contato from '../pages/Contato'



const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
     <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveBackgroundColor:'#A9A9A9',
      }}>
        <Tab.Screen name='Home' component={Home} options={{title:'Inicio', headerShown: false, tabBarIcon:({color,size})=>{
            return <FontAwesome5 name='home' color={color} size={size}></FontAwesome5>
        } }}>
        
        </Tab.Screen>
        <Tab.Screen name='Contato' component={Contato} options={{title:'Contato',tabBarIcon:({color,size})=>{
            return <FontAwesome5 name='phone' color={color} size={size}></FontAwesome5>
        } }}>

        </Tab.Screen>
        <Tab.Screen name='Cursos' component={StackRoutes} options={{title:'Cursos',tabBarIcon:({color,size})=>{
            return <FontAwesome5 name='book' color={color} selectionColor={'red'} size={size}></FontAwesome5>
        } }}>

        </Tab.Screen>
     </Tab.Navigator>
    );
  }