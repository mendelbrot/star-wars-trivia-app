import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Loading() {

  return (
    <View style={styles.view}>
      <Text style={styles.text} >{'Loading...'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
  }
});

export default Loading;