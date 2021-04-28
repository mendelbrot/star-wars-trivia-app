import React, { useState } from 'react';
import { TextInput, Button, View } from 'react-native';

type Props = {
  search: Function,
};

function SearchHeader({ search }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View>
      <TextInput
        onChangeText={setSearchQuery}
        value={searchQuery}
        placeholder='Search'
      />
      <Button
        title='Q'
        onPress={() => search(searchQuery)}
      />
      <Button
        title='X'
        onPress={() => {
          setSearchQuery('');
          search('')
        }}
      />
    </View>
  );
};

export default SearchHeader;