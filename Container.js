import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import LoginPage from './Screens/LoginPage';
import User from './Screens/User';
import Genre from './Screens/Genre';
import Itinerary from './Screens/Itinerary';
import NewProfile from './Screens/NewProfile';
import Verify from './Screens/Verify';
import ItineraryDay1 from './Screens/ItineraryDay1';
import ItineraryEvent1 from './Screens/ItineraryEvent1';
import ItineraryEvent2 from './Screens/ItineraryEvent2';
import Maps from './Screens/Maps';
import Test from './Screens/Test';

import {
    createStackNavigator,
    createAppContainer,
  } from 'react-navigation';

  const AppNavigator = createStackNavigator({
    Home: {
      screen: LoginPage,
    },
    loginScreen: {
      screen: LoginScreen,
    },
    user: {
      screen: User,
    },
    genre: {
      screen: Genre,
    },
    itinerary: {
      screen: Itinerary,
    },
    newProfile: {
      screen: NewProfile,
    },
    verify : {
      screen: Verify,
    },
    itineraryDay1 : {
      screen: ItineraryDay1,
    },
    itineraryEvent1 : {
      screen: ItineraryEvent1,
    },
    itineraryEvent2 : {
      screen: ItineraryEvent2,
    },
    maps : {
      screen: Maps,
    },
    test : {
      screen: Test,
    },
    },
    )

    const Container = createAppContainer(AppNavigator);

    export default Container; 