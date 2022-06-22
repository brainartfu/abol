import React, { useState } from 'react';
import { Divider, Text, Center, View, Button, Image } from 'native-base';
import backPng from './../assets/images/back.png';

const styles = {
  root: {
    flex: 1,
    backgroundColor: '#354C4B',
    padding: 20,
  },
  pageTitle: {
    fontSize: 18,
    color: 'white',
    marginTop: -20
  },
  amount: {
    color: 'white',
    fontSize: 24,
    lineHeight: 60
  },
  etb: {
    color: 'white',
    fontSize: 20,
    lineHeight: 25
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  backBtn: {
    width: 30,
    resizeMode: "contain"
  },
  twoBtn: {
    width: 130,
    height: 100,
    backgroundColor: '#283A3A',
    marginTop: 40,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  twoBtnActived: {
    borderWidth: 1,
    borderColor: 'white',
    width: 130,
    height: 100,
    backgroundColor: '#2E4343',
    marginTop: 40,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  continueBtn: {
    marginTop: 10,
    height: 60
  }
}

const SendMoney = ({ navigation }) => {
  const [bankId, setBankId] = useState(1);
  const banks = [
    { id: 1, method: 'Branch' },
    { id: 2, method: 'Direct Account' }
  ];
  const handleBack = () => {
    navigation.navigate('Home');
  }
  const handleContinue = () => {
    navigation.navigate('ContactList');
  }

  return (
    <View style={styles.root}>
      <View>
        <Image source={backPng} onTouchEnd={handleBack} style={styles.backBtn} alt="back" />
      </View>
      <Center>
        <Text style={styles.pageTitle}>Amount</Text>
        <Text style={styles.amount}>$10,000.00</Text>
        <Text style={styles.etb}>ETB460,000.00</Text>
        <Divider style={styles.divider} w="100%" />
        <Text style={{ color: 'white', fontSize: 18 }}>Choose Payment Option</Text>
        <View display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
          {banks.map((bank, index) => {
            return <View key={index} margin="2" style={bank.id === bankId ? styles.twoBtnActived : styles.twoBtn} onTouchEnd={() => setBankId(bank.id)}>
              <Text style={{ color: 'white' }}>Bunna Bank</Text>
              <Text style={{ color: 'white' }}>{bank.method}</Text>
            </View>
          })}
        </View>
        <Button
          style={styles.continueBtn}
          colorScheme="default"
          onTouchEnd={handleContinue}>
            Continue >>
        </Button>
      </Center >
    </View >
  );
};

export default SendMoney;