import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import styles from '../styles/style';
import Form from '../components/Form';
import KeyboardShift from '../components/KeyboardShift';

export default class Signup extends Component {
  static navigationOptions = {
    header: null,
  }

  signup = () => {
    alert("Signing up");
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <KeyboardShift>
        {() => (
          <View style={styles.container}>

            <View style={localStyles.titleContainer}>
              <Text style={localStyles.title}>Motivational Hell</Text>
              <Image style={{ width: 350, height: 225, marginVertical: 20 }} source={require('../images/HELL.gif')} />
            </View>

            <Form
              type="Signup"
              callback={this.signup}
            />

            <View style={localStyles.signupContainer}>
              <Text style={{ color: "#f2a87d", fontWeight: "600" }}>Already have an account?</Text>
              <TouchableOpacity
                style={{ marginLeft:5 }}
                onPress={() => navigate('Login')}
              >
                <Text style={{ color: "#f27d52" }}>Login</Text>
              </TouchableOpacity>
            </View>

          </View>
        )}
      </KeyboardShift>
    );
  }
}

const localStyles = StyleSheet.create({
  titleContainer:{
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: '#f22637',
    fontSize: 36,
  },
  signupContainer: {
    flexDirection: "row",
    marginBottom: 40,
  }
});
