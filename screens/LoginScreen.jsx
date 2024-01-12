/* import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const LoginScreen = ({promptAsync}) => {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In with Google</Text>
      <TouchableOpacity onPress={promptAsync} style={styles.googleButton}>
        <Image
          source={{uri: 'https://cdn.worldvectorlogo.com/logos/google-icon.svg'}}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
 },
 title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
 },
 googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DD4B39',
    borderRadius: 5,
    padding: 10,
 },
 googleIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
 },
 googleText: {
    fontSize: 18,
    color: '#FFFFFF',
 },
});

export default LoginScreen; */