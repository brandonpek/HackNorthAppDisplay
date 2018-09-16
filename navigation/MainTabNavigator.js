import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LastConvoScreen from '../screens/LastConvoScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ChatScreen from '../screens/ChatScreen';

const MainDrawerNavigator = createDrawerNavigator(
	{
	  Welcome: {
	    screen: WelcomeScreen,
	  },
	  Chat: {
	    screen: ChatScreen,
	  },
	  LastConvo: {
	    screen: LastConvoScreen,
	  },
	},
	{
		drawerBackgroundColor: 'rgba(76,76,76,1)'
	}
);

export default MainDrawerNavigator;


