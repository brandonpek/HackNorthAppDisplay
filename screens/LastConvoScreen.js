import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import * as firebase from 'firebase';

Expo.Font.loadAsync({
  'Brandon_bld': require('../assets/fonts/Brandon_bld.ttf'),
  'Brandon_reg': require('../assets/fonts/Brandon_reg.ttf'),
});

export default class LastConvoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
    };
  };

  static navigationOptions = {
    header: null,
  };

  loadConv = () => { 
    var pointer = this;
    firebase.database().ref('conversations/conv0/msg').once('value').then(
      function(snapshot){
        console.log("snapshot val",snapshot.val())
        pointer.setState({text1:snapshot.val()});
      }
    )
  }

  render() {
    let text1 = this.state.text1;
    return (
      <View style={{ flex:1, backgroundColor: 'transparent' }}>
        <ImageBackground source={require('../assets/images/background1.png')}
         style={styles.Image}
        >
          <ScrollView style={{flex:1}} contentContainerStyle={styles.contentContainer}>
              <Text style={styles.header}>Last Conversation</Text>
              <Button
              title="Refresh"
              titleStyle={{ fontWeight: "20" }}
              buttonStyle={styles.button}
              onPress={() => this.loadConv()}
            />
              <Text style={styles.text}>{text1}</Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    fontFamily: 'Brandon_reg',
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 15
  },
  header: {
    fontFamily: 'Brandon_bld',
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'gold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Image: {
    height: 667,
    width: 375,
    position: 'absolute',
    top:0,
    left:0
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  text:{
    fontFamily: 'Brandon_reg',
    marginTop:5,
    fontSize:20,
    textAlign: 'left',
  }
});
