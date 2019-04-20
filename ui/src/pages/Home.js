import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import styles from '../styles/style';
import Bet from '../components/Bet';

export default class HelloReactNative extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={localStyles.container}>
        <View style={localStyles.titleContainer}>
          <Text style={localStyles.title}>Home</Text>
        </View>

        <ScrollView style={localStyles.scrollContainer}>
          <Bet
            title="Bet 1"
            description="take out trash"
            amount="200"
          />
          <Bet
            title="Bet 2"
            description="mow lawn"
            amount="400"
          />
        </ScrollView>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#1a1a1a"
  },
  scrollContainer: {
    flex:1,
    marginVertical: 20,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    backgroundColor: "#2a2a2a",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
  },
});
