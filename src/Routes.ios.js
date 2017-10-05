import { StackNavigator, TabNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';

const Tabs = TabNavigator({
  Map: { screen: MapScreen },
  Deck: { screen: DeckScreen }
})

const AppRouter = StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Tabs: { screen: Tabs}
},
  {
  headerMode: 'none'
}  
)

export default AppRouter;