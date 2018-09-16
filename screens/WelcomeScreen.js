import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Text ,Image} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ChatScreen from './ChatScreen';
import {createDrawerNavigator} from 'react-navigation';
import Steps from '../constants/Steps';
import data from './data';
import { Button } from 'react-native-elements';

Expo.Font.loadAsync({
  'Brandon_bld': require('../assets/fonts/Brandon_bld.ttf'),
  'Brandon_reg': require('../assets/fonts/Brandon_reg.ttf'),
});

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  updateAndMove = () => {
    let text1 = data.lastConvo;
    let text2 = data.twoHours;
    let text3 = data.yesterday;

    console.log("text1", text1);
    console.log("text2", text2);
    console.log("text3", text3);

    Steps.steppy = [
            {
              id: '0',
              message: 'Hi! Which conversation do you want to pull up?',
              trigger: 'start',
            },
            {
              id: 'start',
              options: [
                { value: 'lastConvo', label: 'Last Conversation', trigger: '1' },
                { value: 'twoHours', label: '2 hours ago', trigger: '2' },
                { value: 'yesterday', label: '24 hours ago', trigger: '3' },
              ],
            },
            {
              id: '1',
              message: text1,
              trigger: '4',
            },
            {
              id: '2',
              message: text2,
              trigger: '4',
            },
            {
              id: '3',
              message: text3,
              trigger: '4',
            },
            {
              id: '4',
              message: 'Is there any other conversation you\'d like to find out more about?',
              trigger: '5',
            },
            {
              id: '5',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'start' },
                { value: 'no', label: 'No', trigger: 'end' }
              ],
            },
            {
              id: 'end',
              message: 'Thanks for taking the time to meet HelloLens',
              end: true
            }
        ];
    this.props.navigation.navigate('ChatScreen');
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/background1.png')}
       resizeMode = 'stretch'
       style={styles.backgroundImage}
      >
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Image source={require("../assets/images/logo.png")} style={styles.welcomeImage}>
          </Image>
        </View>
        <Text style={styles.text2}>HelloLens @ HackTheNorth</Text>
        <Button
          title='Start Chat'
          icon = {{ buttonStyle : styles.button }}
          onPress={() => this.updateAndMove()}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  welcomeImage: {
    alignItems: "center",
    marginTop:30,
    height: 100,
    width: 100,
  },
  text: {
    fontFamily: 'Brandon_bld',
    fontSize: 50,
    textAlign:'center',
    color: 'rgba(248,235,158,1)',
  },
  text2: {
    fontFamily: 'Brandon_reg',
    marginTop: 150,
    marginBottom: 50,
    marginLeft: 20,
    fontSize: 40,
    textAlign: 'left',
    color: 'rgba(181,234,208,1)'
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  button: {
    fontFamily: 'brandon_reg',
    fontSize: 20,
    color: "rgba(248,235,158, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: 'rgba(248,235,158, 1)'
  },
});
