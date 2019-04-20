import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

/*
Color Pallete:
Light Red: #f22637
Beige: #f2a87d
Dark Grey: #1a1a1a
Pale Orange: #f27d52
Burghandi: #3f0303
Dark Red: #d82222
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 45,
    fontSize: 16,
    paddingHorizontal: 20,
    backgroundColor: "#f2a87d",
    borderRadius: 45,
    marginVertical: 10,
  },
  button: {
    width: 300,
    height: 45,
    backgroundColor: "#f27d52",
    borderRadius: 45,
    marginVertical: 10,
    paddingVertical: 11.25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textAlign: "center",
  }
});

export default styles;
