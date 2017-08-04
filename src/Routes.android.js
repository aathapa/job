import { StackNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';

const AppRouter = StackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  AuthScreen: {
    screen: AuthScreen
  },
  MapScreen: {
    screen: MapScreen
  }
},
{
  headerMode: 'none',
}  

)

export default AppRouter;