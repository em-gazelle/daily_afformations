import { StackNavigator } from 'react-navigation'
import Signup from '../Containers/Signup'
import Login from '../Containers/Login'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Signup: { screen: Signup },
  Login: { screen: Login }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Signup',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
