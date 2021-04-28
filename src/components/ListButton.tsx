import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';

type Props = {
  title: string,
  onPress: Function
};

function ListButton({ title, onPress }: Props) {
  return (
    <View style={styles.view}>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => onPress()}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: 5,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: 'black'
  },
  touchable: {
    padding: 10,
  },
  text: {
    fontSize: 20,
  }
});

export default ListButton;