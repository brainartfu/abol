import React, { useState } from 'react';
import  WebView from 'react-native-webview';
import { Text, Image, Button, Divider, ScrollView, Center, View } from 'native-base';
import BottomTabs from './BottomTabs';
import avatar9Png from './../assets/images/avatar9.png';

const styles = {
  root: {
    flex: 1,
    backgroundColor: 'white',
  }
}

const Order = ({ navigation }) => {
 
  return (
    <View style={styles.root}>
      <WebView source={{uri: 'https://www.wordpress.com/'}}/>
      <BottomTabs selected='Order' />
    </View>
  );
};

export default Order;