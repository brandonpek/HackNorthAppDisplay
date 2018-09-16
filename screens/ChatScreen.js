import React from 'react';
import { Image, StyleSheet, View , ImageBackground, Text } from 'react-native';

import ChatBot from 'react-native-chatbot';
import Steps from '../constants/Steps';

Expo.Font.loadAsync({
  'Brandon_bld': require('../assets/fonts/Brandon_bld.ttf'),
  'Brandon_reg': require('../assets/fonts/Brandon_reg.ttf'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
  screen: {
    backgroundColor: '#3D6DCC', 
  },
  text: {
    fontFamily: 'Brandon_bld',
    fontSize: 30,
    marginTop:20,
    textAlign:'center',
    color: 'rgba(248,235,158,1)',
  },
});

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/background1.png')}
       resizeMode = 'stretch'
       style={styles.backgroundImage}
      >
        <Text style={styles.text}> HelloLens ChatBot</Text>
        <ChatBot
          style = {{ backgroundColor: '#EEE', paddingTop: 50}}
          botAvatar = '../assets/images/logo2.png'
          botBubbleColor='rgba(248,235,158,1)'
          botFontColor='black'
          contentStyle={{backgroundColor: 'rgba(76,76,76,1)'}}
          style={{backgroundColor: 'rgba(76,76,76,1)'}}
          footerStyle={{backgroundColor:"white"}}
          steps={Steps}
        />
      </ImageBackground>
    );
  }
}
