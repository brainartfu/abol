import React, { useState } from 'react';
import { Text, Image, Button, Checkbox, Stack, ScrollView, Center, Input, View } from 'native-base';
import logoPng from './../assets/images/logo.png';

const styles = {
  label: {
    color: '#ccc'
  },
}

const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView flex="1" padding="4" style={{ backgroundColor: 'white' }}>
      <Center>
        <Image source={logoPng} alt="logo" w="100" h="120" resizeMode="contain" />
      </Center>

      <Stack space={1} w="100%">
        <Text marginTop="2" style={styles.label}>MOBILE NUMBER</Text>
        <Input placeholder="0923930947" w="100%" />

        <Text marginTop="2" style={styles.label}>PASSWORD</Text>
        <Input placeholder="HGAHJKSH" type="password" w="100%" />

        <View display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Checkbox colorScheme="primary" value="one" my={2} mx={1.5} >
            <Text marginLeft="2" marginTop="1px" style={{ color: '#464646' }}>Remember Me</Text>
          </Checkbox>
          <Text>Forgot Password?</Text>
        </View>

        <Button
          marginTop="2"
          colorScheme="primary"
          w="100%"
          onTouchEnd={handleLogin}>
          LOGIN
        </Button>

        <Center>
          <Text marginTop="4">Don't have an account?</Text>
          <Text marginTop="4" style={{ fontWeight: 'bold' }}>Create an Account</Text>
        </Center>
      </Stack>
    </ScrollView >
  );
};

export default Login;