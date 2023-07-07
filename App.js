import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import RegistrarseScreen from './screens/RegistrarseScreen';
import HomeScreen from './screens/HomeScreen';
import CategoriasScreen from './screens/CategoriasScreen';
import CarritoScreen from './screens/CarritoScreen';

const Stack = createStackNavigator()

export default function App() {

  const headerOptions = {
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: 'black',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Registrarse" component={RegistrarseScreen} options={headerOptions}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen
          name="Carta"
          component={CategoriasScreen}
          options={headerOptions}
        />
        <Stack.Screen name="Mi Carrito" component={CarritoScreen} options={headerOptions}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


