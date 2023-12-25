import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Colors from '../Utils/Colors';

export default function LoginScreen() {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text>LoginScreen</Text>
        <View
          style={{
            height: 400,
            width: '100%',
            backgroundColor: Colors.PRIMARY,
            marginTop: -50,
          }}
        >
          {/* Content of your login screen */}
        </View>
      </View>
    </ScrollView>
  );
}
