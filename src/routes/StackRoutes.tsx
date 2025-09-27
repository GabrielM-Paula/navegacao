import {Home} from '../screens/Home';
import {Sonic} from '../screens/Sonic';
import {Tails} from '../screens/Tails';
import {Knuckles} from '../screens/Knuckles';
import {Amy} from '../screens/Amy';
import { createStackNavigator } from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
   <Navigator screenOptions={{headerShown:false}}>
    <Screen name='home' component={Home}></Screen>
    <Screen name='sonic' component={Sonic}></Screen>
    <Screen name='tails' component={Tails}></Screen>
    <Screen name='knuckles' component={Knuckles}></Screen>
    <Screen name='amy' component={Amy}></Screen>
   </Navigator>
  );
}


// import {Home} from '../screens/Home'; 
// import {Gallery} from '../screens/Gallery'; 
// import { createStackNavigator } from '@react-navigation/stack'; 

// const {Navigator, Screen} = createStackNavigator();
// export function StackRoutes() { return ( ); }