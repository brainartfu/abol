import React from 'react';
import { Image, Center, View } from 'native-base';
import logoPng from './../assets/images/logo.png';

const Splash = ({ navigation }) => {
  setTimeout(function () {
    navigation.navigate('Login');
  }, 1000)

  const handleTouchScreen = () => {
    navigation.navigate('Login');
  }

  return (
    <View flex="1" backgroundColor="white" justifyContent="center" alignItems="center" onTouchEnd={handleTouchScreen}>
      <Center>
        <Image source={logoPng} w="120" resizeMode="contain" alt="logo" />
      </Center>
    </View>
  );
};

export default Splash;