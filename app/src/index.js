/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const index = () => {
  <View style={styles.container}>
    <Text style={styles.text}>Hello World!</Text>
  </View>
};

// style settings
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'blue'
  }
});


export default index;
