import { StackNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';

const AppRouter = StackNavigator({
  welcomeScreen: { screen: WelcomeScreen}
})

export default AppRouter;