import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

import styles from '../styles/style';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passRetype: "",
    };
  }

  handleSubmit = () => {
    var {type} = this.props;
    var {password, passRetype} = this.state;

    if(type.localeCompare("Signup") == 0 && password.localeCompare(passRetype) != 0)
      alert("Password does not match");

    this.props.callback(this.state);
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder="Username"
          />

          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            placeholder="Password"
            secureTextEntry={true}
          />

          {(() => {
            if(this.props.type.localeCompare("Signup") == 0){
              return(
                <TextInput
                  style={styles.input}
                  value={this.state.passRetype}
                  onChangeText={(text) => this.setState({passRetype: text})}
                  placeholder="Re-type Password"
                  secureTextEntry={true}
                />
              );
            }
          })()}

          <TouchableOpacity
            style={styles.button}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>{this.props.type}</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const localStyles = StyleSheet.create({

});
