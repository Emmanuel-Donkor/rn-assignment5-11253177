import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDarkMode } from './DarkModeContext';

export default function Home() {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.firstSection}>
          <Image style={styles.profile} source={require('./assets/profile.png')} />
          <View style={styles.textSection}>
            <Text style={styles.welcomeBack}>Welcome back,</Text>
            <Text style={styles.name}>Emmanuel Donkor</Text>
          </View>
          <Ionicons style={styles.search} name="search" size={30} color={isDarkMode ? 'white' : 'grey'} />
        </View>

        <Image style={styles.card} source={require('./assets/Card.png')} />

        <View style={styles.actionIcons}>
          <ActionItem iconName="arrow-up-outline" label="Sent" />
          <ActionItem iconName="arrow-down-outline" label="Receive" />
          <ActionItem iconName="cash-outline" label="Loan" />
          <ActionItem iconName="cloud-upload-outline" label="Topup" />
        </View>

        <View style={styles.secondSection}>
          <Text style={styles.transaction}>Transaction</Text>
          <Text style={styles.sell}>See All</Text>
        </View>

        <TransactionItem iconSource={require('./assets/apple.png')} name="Apple Store" category="Entertainment" amount="-$12.00" />
        <TransactionItem iconSource={require('./assets/sportify.png')} name="Spotify" category="music" amount="-$15.00" />
        <TransactionItem iconSource={require('./assets/grocery.png')} name="Grocery" category="Purchase" amount="-$88.00" />
        <TransactionItem iconSource={require('./assets/moneyTransfer.png')} name="Money Transfer" category="Transaction" amount="$300.00" />
      </ScrollView>
    </View>
  );
}

function ActionItem({ iconName, label }) {
  const { isDarkMode } = useDarkMode();
  const color = isDarkMode ? 'white' : 'grey';

  return (
    <View style={{ alignItems: 'center' }}>
      <Ionicons name={iconName} size={30} color={color} />
      <Text style={{ color }}>{label}</Text>
    </View>
  );
}

function TransactionItem({ iconSource, name, category, amount }) {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.trans}>
      <View style={styles.iconSect}>
        <Image source={iconSource} style={styles.customIcon} />
        <View style={styles.textSection}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.welcomeBack}>{category}</Text>
        </View>
      </View>
      <Text style={styles.value}>{amount}</Text>
    </View>
  );
}

const getStyles = (darkMode) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode ? '#161622' : '#fff',
  },
  firstSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    marginTop: 50,
  },
  textSection: {
    marginLeft: 20,
  },
  welcomeBack: {
    fontSize: 12,
    color: darkMode ? '#bbb' : 'grey',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#1e1e2d',
  },
  search: {
    marginLeft: 'auto',
    width: 40,
    height: 40,
  },
  profile: {
    width: 60,
    height: 60,
  },
  card: {
    marginLeft: 40,
    marginTop: 10,
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginVertical: 25,
  },
  secondSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginVertical: 25,
  },
  transaction: {
    fontSize: 25,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#1e1e2d',
  },
  sell: {
    fontSize: 17,
    color: '#0066ff',
    fontWeight: 'bold',
  },
  trans: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    marginTop: 1,
    justifyContent: 'space-between',
    backgroundColor: darkMode ? '#000' : '#fff',
    
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#1e1e2d',
  },
  iconSect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customIcon: {
    width: 35,
    height: 30,
  },
});
