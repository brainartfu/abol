import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Image,
  HStack,
  Center,
  Pressable,
} from 'native-base';

import homePng from './../assets/images/home.png';
import historyPng from './../assets/images/history.png';
import exchangePng from './../assets/images/exchange.png';
import profilePng from './../assets/images/user.png';

const styles = {
  root: {
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#707070',
    backgroundColor: '#354C4B'
  }
}

export default function BottomTabs({ selected }) {
  const navigation = useNavigation();
  const tabs = [
    { id: 'Home', icon: homePng },
    { id: 'History', icon: historyPng },
    { id: 'Exchange', icon: exchangePng },
    { id: 'Profile', icon: profilePng },
  ];

  const handleOpen = tabId => {
    navigation.navigate(tabId);
  }

  return (
    <HStack style={styles.root} alignItems="center" safeAreaBottom>
      {tabs.map((tab, index) => {
        return <Pressable
          key={index}
          cursor="pointer"
          opacity={selected === tab.id ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => handleOpen(tab.id)}>
          <Center>
            <Image source={tab.icon} alt="tab" />
            <Text color="white" fontSize="12">{tab.id}</Text>
          </Center>
        </Pressable>
      })}
    </HStack>
  );
}

