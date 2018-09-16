import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import data from './screens/data';

import * as firebase from 'firebase';



export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDh9vBPL3_i-qiyoGQCF1dzMQg_6sdhXoM",
      authDomain: "hellolens.firebaseapp.com",
      databaseURL: "https://hellolens-5fbd4.firebaseio.com/",
      projectId: "hellolens",
      storageBucket: "hellolens-5fbd4.appspot.com",
      messagingSenderId: "523608666117"
      //expo guide doesnt have databaseURL, projectId, messagingSenderID
    };

    if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    
  }

  
  updateData = () => {
    if (data.called == false){
      data.called = true;
        firebase.database().ref('conversations/conv2/msg').once('value').then(
        function(snapshot){
          console.log("snapshot val",snapshot.val())
          data.lastConvo = snapshot.val();
        })

        firebase.database().ref('conversations/conv1/msg').once('value').then(
        function(snapshot){
          console.log("snapshot val",snapshot.val())
          data.twoHours = snapshot.val();
        })

        firebase.database().ref('conversations/conv0/msg').once('value').then(
        function(snapshot){
          console.log("snapshot val",snapshot.val())
          data.yesterday = snapshot.val();
        })
    }
};

  render() {
    this.updateData();

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
