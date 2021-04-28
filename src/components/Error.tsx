import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Error() {

  return (
    <View style={styles.view}>
      <Text style={styles.text} >{'Error'}</Text>
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

export default Error;