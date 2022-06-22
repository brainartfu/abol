import React from 'react';
import { Text, Select, Center, ScrollView, View, Button, Input, Image, CheckIcon } from 'native-base';
import backPng from './../assets/images/back.png';
import contactPng from './../assets/images/contact.png';

const styles = {
  root: {
    flex: 1,
    backgroundColor: '#354C4B',
  },
  pageTitle: {
    color: 'white',
    fontSize: 18,
    lineHeight: 30,
    marginTop: -20,
    marginBottom: -10
  },
  input: {
    color: 'white',
    fontSize: 16
  },
  backBtn: {
    width: 30,
    resizeMode: "contain"
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
}

const ContactList = ({ navigation }) => {
  let [service, setService] = React.useState("")

  const handleBack = () => {
    navigation.navigate('SendMoney');
  }

  const handleOpenContacts = () => {
    navigation.navigate('Order');
  }

  return (
    <ScrollView style={styles.root} padding="4">
      <Image source={backPng} onTouchEnd={handleBack} style={styles.backBtn} alt="back" />
      <Center>
        <Text style={styles.pageTitle}>Choose Recipient</Text>
      </Center>
      <Text style={styles.label}>Enter Recipient Fullname</Text>
      <Input placeholder="" style={styles.input}/>

      <View display="flex" alignItems="flex-end">
        <Button colorScheme="default" w="65%" marginTop="2" size="xs" h="25px" onTouchEnd={handleOpenContacts}>
          <View flexDirection="row">
            <Text mx="1" style={{ fontSize: 12, color: '#354C4B' }}>Choose From Contact</Text>
            <Image mx="1" source={contactPng} alt="contact" />
          </View>
        </Button>
      </View>

      <Text style={styles.label}>Enter Recipient  Phone</Text>
      <Input placeholder="+251" style={styles.input} />

      <Text style={styles.label}>Choose Security Question</Text>
      <Select style={styles.input}
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="Question 1" value="1" />
        <Select.Item label="Question 2" value="2" />
        <Select.Item label="Question 3" value="3" />
        <Select.Item label="Question 4" value="4" />
        <Select.Item label="Question 5" value="5" />
      </Select>

      <Text style={styles.label}>Your Security Answer</Text>
      <Input placeholder="" style={styles.input} />

      <View flexDirection="row" justifyContent="center">
        <Button colorScheme="default" marginTop="4" w="70%" onTouchEnd={handleOpenContacts}>Proceed to Payment >></Button>
      </View>
    </ScrollView>
  );
};

export default ContactList;