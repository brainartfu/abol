import React, { useState } from 'react';
import { Text, Image, Button, Divider, ScrollView, Center, View } from 'native-base';
import QRCode from 'react-native-qrcode-svg';
import BottomTabs from './BottomTabs';
import avatar9Png from './../assets/images/avatar9.png';
import pencilPng from './../assets/images/pencil.png';
import mobilePng from './../assets/images/mobile.png';
import bankPng from './../assets/images/bank.png';
import cameraPng from './../assets/images/camera.png';

const styles = {
  root: {
    flex: 1,
    backgroundColor: '#354C4B',
  },
  pageTitle: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  nameTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  emailTxt: {
    color: 'white',
    fontSize: 12,
    marginBottom: 10
  },
  idTxt: {
    color: 'white'
  },
  footerTxt: {
    color: 'white'
  },
  divider: {
    width: '100%',
    backgroundColor: '#707070',
    marginTop: 10,
    marginBottom: 10
  },
  imageCol: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#707070',
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  cameraBtn: {
    position: 'absolute',
    right: 0,
    bottom: 0
  }
}

const Profile = ({ navigation }) => {
  const data = {
    id: '@mwsi',
    name: 'Meseret Tesfaye',
    email: 'mesi1992@gmail.com',
    avatar: avatar9Png,
  }

  return (

    <View style={styles.root}>
      <ScrollView paddingLeft="4" paddingRight="4" >
        <Center>
          <Text style={styles.pageTitle}>Profile</Text>
        </Center>
        <View flexDirection="row" alignItems="center" justifyContent="space-between" marginBottom="4">
          <View marginRight="2">
            <Image w="80px" resizeMode="contain" source={data.avatar} alt="avatar" />
            <Image style={styles.cameraBtn} source={cameraPng} alt="camera" />
          </View>
          <View w="100%" flexDirection="row" justifyContent="space-between" flexShrink="1">
            <View>
              <Text style={styles.nameTxt}>{data.name}</Text>
              <Text style={styles.emailTxt}>{data.email}</Text>
              <Text style={styles.idTxt}>{data.id}</Text>
            </View>
            <Button>
              <Image source={pencilPng} alt="edit" />
            </Button>
          </View>
        </View>

        <Divider style={styles.divider} />
        <View flexDirection="row" alignItems="center" justifyContent="space-between" marginTop="4">
          <View style={styles.imageCol}>
            <Image source={mobilePng} alt="mobile" />
          </View>
          <View w="100%" flexDirection="row" justifyContent="space-between" flexShrink="1">
            <View marginTop="4">
              <Text style={styles.nameTxt}>Mobile Number</Text>
              <Text style={styles.emailTxt}>+251-933-03-0116</Text>
            </View>
            <Button>
              <Image source={pencilPng} alt="edit" />
            </Button>
          </View>
        </View>
        <View flexDirection="row" alignItems="center" justifyContent="space-between" marginTop="4" marginBottom="4">
          <View style={styles.imageCol}>
            <Image source={bankPng} alt="bank" />
          </View>
          <View w="100%" flexDirection="row" justifyContent="space-between" flexShrink="1">
            <View marginTop="4">
              <Text style={styles.nameTxt}>Bank Account</Text>
              <Text style={styles.emailTxt}>1001627******</Text>
            </View>
            <Button>
              <Image source={pencilPng} alt="edit" />
            </Button>
          </View>
        </View>
        <Divider style={styles.divider} />

        <View marginBottom="80px" paddingTop="2">
          <Center>
            <QRCode value="qr code testing" />
            <Text style={styles.footerTxt} marginTop="4">Bunna International Bank</Text>
            <Text style={styles.footerTxt}>© Copyright 2021</Text>
            <Text style={styles.footerTxt}>V1.0</Text>
          </Center>
        </View>
      </ScrollView>
        <BottomTabs selected='Profile' />
    </View>
  );
};

export default Profile;