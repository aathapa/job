import { StackNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';

const AppRouter = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  AuthScreen: {
    screen: AuthScreen
  }
},
{
  headerMode: 'none'    
}  

)

export default AppRouter;