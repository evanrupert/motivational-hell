import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import styles from '../styles/style';

export default class Bet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={localStyles.title}>{this.props.title}</Text>
        <Text style={localStyles.words}>{this.props.description}</Text>
        <Text style={localStyles.words}>${this.props.amount}</Text>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: "#f27d52",
  },
  words: {
    fontSize: 18,
    color: "#f2a87d",
  },
});
