/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Container from './Container';
import Firebase from './database/Firebase';

//import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';





export default class App extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        authStatusReported: false,
        isUserAuthenticated: false,
  
      }
    }
    componentDidMount() {
      Firebase.init();
      Firebase.auth.onAuthStateChanged(user => {
         this.setState({
          authStatusReported: true,
          isUserAuthenticated: !!user,
        })
      });
    }
  
    render() {
  
      return (
    
        <Container/>
      );
  
    }
  }


/*
const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginPage,
  },
  login : {
    login: LoginScreen,
  },
  Inside: {
    screen: createMaterialBottomTabNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
              <View>
                <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
              </View>),
          }
        },
        /*
        EnterData: {
          screen: EnterData,
          navigationOptions: {
            tabBarLabel: 'Enter Data',
            tabBarIcon: ({ tintColor }) => (
              <View>
                <Icon style={[{ color: tintColor }]} size={25} name={'ios-add'} />
              </View>),
            activeColor: '#f60c0d',
            inactiveColor: '#f65a22',
            barStyle: { backgroundColor: '#f69b31' },
          }
        },
        Notifications: {
          screen: NotificationScreen,
          navigationOptions: {
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ tintColor }) => (
              <View>
                <Icon style={[{ color: tintColor }]} size={25} name={'ios-heart'} />
              </View>),
            activeColor: '#615af6',
            inactiveColor: '#46f6d7',
            barStyle: { backgroundColor: '#67baf6' },
          }
        },
        Profile: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
              <View>
                <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
              </View>),
          }
          
        },

      },

      {
        initialRouteName: "Home",
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#3BAD87' },
      },
    ),
  }
  }, {
    defaultNavigationOptions: {
      header: null
    },
  }
);
*/

//export default createAppContainer(AppNavigator);
