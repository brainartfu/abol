import React, { useState } from 'react';
import { Text, Image, Button, Card, Divider, ScrollView, Center, View, Input } from 'native-base';
import CurrencySelect from './../components/CurrencySelect';

import BottomTabs from './BottomTabs';
import ethiopianIcon from './../assets/images/ethiopian.png';
import exchangeIconBlack from './../assets/images/exchange_black.png';

import euroIcon from './../assets/images/flag1.png';
import gbpIcon from './../assets/images/flag2.png';
import aedIcon from './../assets/images/flag3.png';
import rsaIcon from './../assets/images/flag4.png';
import cadIcon from './../assets/images/flag5.png';
import ethIcon from './../assets/images/flag6.png';
import usdIcon from './../assets/images/flag7.png';

const styles = {
  root: {
    flex: 1,
    backgroundColor: 'white', 
  }, 
  pageTitle: {
    fontSize: 18,
    marginTop: 20
  },
  cardItem: { 
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 2,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 20,
    color: 'black'
  }
}

const Exchange = ({ navigation }) => {
  const currencies = [
    {id: 'USD', label:'US-Dollar', icon: usdIcon, buy: 35.89, sell: 49.93 },
    {id: 'EURO', label:'Euro Cur', icon: euroIcon, buy: 35.89, sell: 49.93 },
    {id: 'GBP', label:'GBP-Pound', icon: gbpIcon, buy: 35.89, sell: 49.93 },
    {id: 'AED', label:'AED-Dollar', icon: aedIcon, buy: 35.89, sell: 49.93 },
    {id: 'RSA', label:'RSA-sdfsd', icon: rsaIcon, buy: 35.89, sell: 11.9 },
    {id: 'CAD', label:'CAD-Dollar', icon: cadIcon, buy: 2.19, sell: 2.23 },
    {id: 'ETH', label:'ETH-Money', icon: ethIcon, buy: 35.89, sell: 49.93 },
  ]
  const [ind1, setInd1] = useState(0);
  const [ind2, setInd2] = useState(1);
  
  const handleToggleExchange = () => {
    let tempInd = ind2;
    setInd2(ind1);
    setInd1(tempInd);
  }

  return (
    <View style={styles.root}>
      <ScrollView padding="2" style={{marginBottom: 70}}>
        <Center>
          <Text style={styles.pageTitle}>Exchange Rate</Text>
        </Center>
        <View flexDirection="row" marginTop="2" justifyContent="space-around" alignItems="center">
          <View style={styles.cardItem} w="40%">
            <CurrencySelect currencies={currencies} defaultIndex={ind1} onChange={(selected)=>{setInd1(currencies.indexOf(selected))}}/>
          </View>
          <View w="10%" justifyContent="center" alignItems="center">
            <Image source={exchangeIconBlack} onTouchEnd={handleToggleExchange} alt="exchange" resizeMode="contain" style={{width:16}}/>
          </View>
          <View style={styles.cardItem} w="40%">
            <CurrencySelect currencies={currencies} defaultIndex={ind2} onChange={(selected)=>{setInd2(currencies.indexOf(selected))}}/>
          </View>          
        </View>
        <View style={styles.cardItem} marginTop="2" padding="2" paddingBottom="6">
          <Input placeholder="Enter Amount" type="text" variant="unstyled"/>
        </View>
        <Center>
          <Text style={styles.price}>ETB 19,129</Text>
        </Center>
        <Center>
          <Button w="80%" margin="4">Continue</Button>
        </Center>
        <Divider w="100%"/>
        <View flexDirection="row" alignItems="center" marginTop="2">
          <Image source={ethiopianIcon} alt="eth"/>
          <Text style={{color: 'black'}}>Ethiopian Birr Exchange Rates</Text>
        </View>

        <View flexDirection="row" justifyContent="space-around" marginBottom="2">
          <View flexDirection="row" w="33.33%" justifyContent="center">
            <Text style={{color: 'black', fontWeight: 'bold'}}>Currency</Text>
          </View>
          <View flexDirection="row" w="33.33%" justifyContent="center">
            <Text style={{color: 'black', fontWeight: 'bold'}}>Buy</Text>
          </View>
          <View flexDirection="row" w="33.33%" justifyContent="center">
            <Text style={{color: 'black', fontWeight: 'bold'}}>Sell</Text>
          </View>
        </View>

        {currencies.map((currency, index)=>{
          return <View flexDirection="row" justifyContent="space-around" alignItems="center" key={index}>
            <View flexDirection="row" w="33.33%" justifyContent="flex-start" alignItems="center" marginTop="1" marginBottom="1" paddingLeft="1">
              <Image source={currency.icon} marginLeft="2" alt="eth" resizeMode="contain"/>
              <Text style={{color: 'black'}} marginLeft="2">{currency.id}</Text>
            </View>
            <View flexDirection="row" w="33.33%" justifyContent="center">
              <Text style={{color: 'black'}}>{currency.buy}</Text>
            </View>
            <View flexDirection="row" w="33.33%" justifyContent="center">
              <Text style={{color: 'black'}}>{currency.sell}</Text>
            </View>
          </View>
        })}
        <View style={{height:10}}></View>
      </ScrollView>
      <BottomTabs selected='Exchange' />
    </View>
  );
};

export default Exchange;