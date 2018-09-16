import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, Text ,Image} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

Expo.Font.loadAsync({
  'Brandon_bld': require('../assets/fonts/Brandon_bld.ttf'),
  'Brandon_reg': require('../assets/fonts/Brandon_reg.ttf'),
});

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/background1.png')}
       resizeMode = 'stretch'
       style={styles.backgroundImage}
      >
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Image source={require("../assets/images/logo.png")} style={styles.welcomeImage}>
          </Image>
          <Text style={styles.text}> HelloLens </Text>
        </View>
        <Text style={styles.text2}>Hello, HackTheNorth</Text>
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
    marginTop: 300,
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
});
