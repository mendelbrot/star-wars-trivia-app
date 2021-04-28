import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

type Props = {
  setSearchQuery: Function,
  initialSearchQuery: string
};

function SearchHeader({ initialSearchQuery, setSearchQuery }: Props) {
  const [input, setInput] = useState(initialSearchQuery);

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder='Search'
      />
      <View style={styles.spacing} />
      <Button
        title='  Q  '
        onPress={() => setSearchQuery(input)}
      />
      <View style={styles.spacing} />
      <Button
        title='  X  '
        onPress={() => {
          setInput('');
          setSearchQuery('')
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 15
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'grey'
  },
  spacing: {
    minWidth: 10
  }
});

export default SearchHeader;