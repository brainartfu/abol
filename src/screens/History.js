import React, { useState } from 'react';
import { Text, Image, Button, ScrollView, Center, View } from 'native-base';
import BottomTabs from './BottomTabs';
import avatar6Png from './../assets/images/avatar6.png';
import avatar7Png from './../assets/images/avatar7.png';
import avatar8Png from './../assets/images/avatar8.png';

const styles = {
  pageTitle: {
    color: 'white',
    fontSize: 18,
  },
  tabText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  tab: {
    width: '33.33%',
    height: 30,
  },
  tabActived: {
    width: '33.33%',
    borderBottomWidth: 2,
    borderBottomColor: 'white'
  },
  dateTxt: {
    color: 'white',
    fontSize: 16
  },
  nameTxt: {
    color: 'white',
    fontSize: 14
  },
  timeTxt: {
    color: 'white',
    fontSize: 14
  },
  priceTxt: {
    textAlign: 'right',
    color: 'white',
    fontSize: 18,
    lineHeight: 30
  }
}

const History = ({ navigation }) => {
  const [tab, setTab] = useState(1);
  const items = {
    1: [{
      dateTxt: 'Today',
      transactions: [
        { id: 1, avatar: avatar6Png, name: 'Meseret Tesfaye', timeTxt: '10:40am', price: '$100.00' },
        { id: 2, avatar: avatar7Png, name: 'Melat Hiruy', timeTxt: '11:20am', price: '$120.00' },
        { id: 3, avatar: avatar8Png, name: 'Fikir Nigusse', timeTxt: '12:45am', price: '$1000.00' },
        { id: 3, avatar: avatar8Png, name: 'Fikir Nigusse', timeTxt: '12:45am', price: '$1000.00' },
      ]
    }, {
      dateTxt: 'Sep 12, 2021',
      transactions: [
        { id: 1, avatar: avatar6Png, name: 'Meseret Tesfaye', timeTxt: '10:40am', price: '$100.00' },
        { id: 2, avatar: avatar7Png, name: 'Melat Hiruy', timeTxt: '11:20am', price: '$120.00' },
        { id: 3, avatar: avatar8Png, name: 'Fikir Nigusse', timeTxt: '12:45am', price: '$1000.00' },
        { id: 2, avatar: avatar7Png, name: 'Melat Hiruy', timeTxt: '11:20am', price: '$120.00' },
        { id: 3, avatar: avatar8Png, name: 'Fikir Nigusse', timeTxt: '12:45am', price: '$1000.00' },
      ]
    }],

    2: [{
      dateTxt: 'Today',
      transactions: [
        { id: 1, avatar: avatar6Png, name: 'Meseret Tesfaye', timeTxt: '10:40am', price: '$100.00' },
        { id: 3, avatar: avatar8Png, name: 'Fikir Nigusse', timeTxt: '12:45am', price: '$1000.00' },
      ]
    }, {
      dateTxt: 'Sep 12, 2021',
      transactions: [
        { id: 1, avatar: avatar6Png, name: 'Meseret Tesfaye', timeTxt: '10:40am', price: '$100.00' },
        { id: 2, avatar: avatar7Png, name: 'Melat Hiruy', timeTxt: '11:20am', price: '$120.00' },
        { id: 3, avatar: avatar8Png, name: 'Fikir Nigusse', timeTxt: '12:45am', price: '$1000.00' },
      ]
    }],

    3: [{
      dateTxt: 'Today',
      transactions: [
        { id: 1, avatar: avatar6Png, name: 'Meseret Tesfaye', timeTxt: '10:40am', price: '$100.00' },
        { id: 2, avatar: avatar7Png, name: 'Melat Hiruy', timeTxt: '11:20am', price: '$120.00' },
        { id: 3, avatar: avatar8Png, name: 'Fikir Nigusse', timeTxt: '12:45am', price: '$1000.00' },
      ]
    }, {
      dateTxt: 'Sep 12, 2021',
      transactions: [
        { id: 1, avatar: avatar6Png, name: 'Meseret Tesfaye', timeTxt: '10:40am', price: '$100.00' },
        { id: 3, avatar: avatar8Png, name: 'Fikir Nigusse', timeTxt: '12:45am', price: '$1000.00' },
      ]
    }]
  };


  return (
    <View backgroundColor="#354C4B" flex="1">
      <Center>
        <Text style={styles.pageTitle} marginTop="4" marginBottom="4">Transaction History</Text>
      </Center>

      <View display="flex" flexDirection="row" justifyContent="space-around" style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 2 }}>
        <View style={tab === 1 ? styles.tabActived : styles.tab} onTouchEnd={() => setTab(1)}><Text style={styles.tabText}>All</Text></View>
        <View style={tab === 2 ? styles.tabActived : styles.tab} onTouchEnd={() => setTab(2)}><Text style={styles.tabText}>Sent</Text></View>
        <View style={tab === 3 ? styles.tabActived : styles.tab} onTouchEnd={() => setTab(3)}><Text style={styles.tabText}>Received</Text></View>
      </View>

      <ScrollView padding="4" py="2" marginBottom="70px">
        {items[tab].map((item, index) => {
          return <View key={index}>
            <Text style={styles.dateTxt} paddingTop="2">{item.dateTxt}</Text>
            <View>
              {item.transactions.map((transaction, ind) => {
                return <View key={ind} flexDirection="row" alignItems="center" justifyContent="space-between" my="2">
                  <View marginRight="2">
                    <Image source={transaction.avatar} alt="avatar" />
                  </View>
                  <View w="100%" flexShrink="1">
                    <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                      <Text style={styles.nameTxt}>{transaction.name}</Text>
                      <Text style={styles.priceTxt}>{transaction.price}</Text>
                    </View>
                    <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                      <Text style={styles.timeTxt}>{transaction.timeTxt}</Text>
                      <Button colorScheme="default" size="xs">Transaction Detail ></Button>
                    </View>
                  </View>
                </View>
              })}
            </View>
          </View>
        })}
      </ScrollView>
      <BottomTabs selected='History' />
    </View>
  );
};

export default History;