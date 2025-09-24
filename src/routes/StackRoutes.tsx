import {Home} from '../screens/Home';
import {Gallery} from '../screens/Gallery';
import { createStackNavigator } from '@react-navigation/stack';
const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
   <Navigator screenOptions={{headerShown:false}}>
    <Screen name='home' component={Home}></Screen>
    <Screen name='gallery' component={Gallery}></Screen>
   </Navigator>
  );
}


// import {Home} from '../screens/Home'; 
// import {Gallery} from '../screens/Gallery'; 
// import { createStackNavigator } from '@react-navigation/stack'; 

// const {Navigator, Screen} = createStackNavigator();
// export function StackRoutes() { return ( ); }