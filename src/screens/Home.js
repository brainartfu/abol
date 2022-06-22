import React, { useState } from 'react';
import { Text, Image, Button, Checkbox, Stack, ScrollView, Center, Input, View } from 'native-base';
import BottomTabs from './BottomTabs';
import bellPng from './../assets/images/bell.png';
import avatar1Png from './../assets/images/avatar1.png';
import avatar2Png from './../assets/images/avatar2.png';
import avatar3Png from './../assets/images/avatar3.png';
import avatar4Png from './../assets/images/avatar4.png';
import avatar5Png from './../assets/images/avatar5.png';
import backspacePng from './../assets/images/backspace.png';
import dotPng from './../assets/images/dot.png';

const styles = {
  pageTitle: {
    fontSize: 18,
    color: 'white',
  },
  inp: {
    color: 'white',
    fontSize: 20,
    lineHeight: 40
  },
  key: {
    width: '100%',
    height: '100%',
    borderRadius: 0
  },
  keyLabel: {
    color: 'white',
    fontSize: 24,
    lineHeight: 28,
  },
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
  },
  col: {
    borderRightWidth: 1,
    borderRightColor: '#707070',
  }
}

const Home = ({ navigation }) => {
  const [price, setPrice] = useState('0.00');
  const handleInputPrice = val => {
    let value = price;
    if (val === 'back') {
      value = price.substr(0, price.length - 1);
    } else if (val === 'dot') {
      if (price.indexOf('.') < 0) {
        value += '.';
      }
    } else {
      value += val;
    }
    setPrice(value);
  }

  const users = [
    { id: 1, name: 'Abel', avatar: avatar1Png },
    { id: 2, name: 'Mesi', avatar: avatar2Png },
    { id: 3, name: 'Abeba', avatar: avatar3Png },
    { id: 4, name: 'Kirubel', avatar: avatar4Png },
    { id: 5, name: 'Melat', avatar: avatar5Png },
  ];
  const handleSend = () => {
    navigation.navigate("SendMoney");
  };

  return (

    <View flex="1" backgroundColor="#354C4B">
      <ScrollView flexShrink="1">
        <View padding="4" style={{ borderBottomColor: '#707070', borderBottomWidth: 1 }}>
          <View flexDirection="row" display="flex" alignItems="center">
            <Text style={styles.pageTitle} w="100%" textAlign="center" flexShrink="1">Send Money</Text>
            <Image source={bellPng} alt="logo" />
          </View>

          <View marginTop="2" flexDirection="row" justifyContent="space-around">
            {users.map((user, index) => {
              return <View key={index}>
                <Image source={user.avatar} alt="user" />
                <Text style={{ color: 'white', textAlign: 'center' }}>{user.name}</Text>
              </View>
            })}
          </View>
          <Center>
            <Text style={{ color: 'white' }} marginTop="4">To : Yoni ( +251-923-930947 )</Text>
          </Center>

          <Text marginTop="2" style={{ color: 'white' }}>Enter amount to send.</Text>
          <View flexDirection="row" justifyContent="flex-end" alignItems="center">
            <Input style={{ paddingTop: 10, fontSize: 16, color: 'white' }} w="100%" flexShrink="1" editable={false} value={price} placeholder="$ 10,000.00" />
            <Button colorScheme="default" w="100" h="47" marginLeft="-1" onTouchEnd={handleSend}>SEND >></Button>
          </View>
        </View>

        <View h="100%" flexShrink="1" paddingTop="2" paddingLeft="4" paddingRight="4" justifyContent="center" alignItems="center">
          <View flexDirection="row" justifyContent="space-around" w="100%" h="25%" style={styles.row}>
            <View w="33.33%" style={styles.col}><Button style={styles.key} onTouchEnd={() => handleInputPrice('1')}><Text style={styles.keyLabel}>1</Text></Button></View>
            <View w="33.33%" style={styles.col}><Button style={styles.key} onTouchEnd={() => handleInputPrice('2')}><Text style={styles.keyLabel}>2</Text></Button></View>
            <View w="33.33%"><Button style={styles.key} onTouchEnd={() => handleInputPrice('3')}><Text style={styles.keyLabel}>3</Text></Button></View>
          </View>
          <View flexDirection="row" justifyContent="space-around" w="100%" h="25%" style={styles.row}>
            <View w="33.33%" style={styles.col}><Button style={styles.key} onTouchEnd={() => handleInputPrice('4')}><Text style={styles.keyLabel}>4</Text></Button></View>
            <View w="33.33%" style={styles.col}><Button style={styles.key} onTouchEnd={() => handleInputPrice('5')}><Text style={styles.keyLabel}>5</Text></Button></View>
            <View w="33.33%"><Button style={styles.key} onTouchEnd={() => handleInputPrice('6')}><Text style={styles.keyLabel}>6</Text></Button></View>
          </View>
          <View flexDirection="row" justifyContent="space-around" w="100%" h="25%" style={styles.row}>
            <View w="33.33%" style={styles.col}><Button style={styles.key} onTouchEnd={() => handleInputPrice('7')}><Text style={styles.keyLabel}>7</Text></Button></View>
            <View w="33.33%" style={styles.col}><Button style={styles.key} onTouchEnd={() => handleInputPrice('8')}><Text style={styles.keyLabel}>8</Text></Button></View>
            <View w="33.33%"><Button style={styles.key} onTouchEnd={() => handleInputPrice('9')}><Text style={styles.keyLabel}>9</Text></Button></View>
          </View>
          <View flexDirection="row" justifyContent="space-around" w="100%" h="25%">
            <View w="33.33%" style={styles.col}><Button style={styles.key} onTouchEnd={() => handleInputPrice('back')}><Image source={backspacePng} alt="backspace" /></Button></View>
            <View w="33.33%" style={styles.col}><Button style={styles.key} onTouchEnd={() => handleInputPrice('0')}><Text style={styles.keyLabel}>0</Text></Button></View>
            <View w="33.33%"><Button style={styles.key} onTouchEnd={() => handleInputPrice('dot')}><Image source={dotPng} alt="dot" /></Button></View>
          </View>
        </View>
      </ScrollView>
      <BottomTabs selected='Home' />
    </View>
  );
};

export default Home;