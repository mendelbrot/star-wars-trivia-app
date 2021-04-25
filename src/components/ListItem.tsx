import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
};

function ListItem({ title }: Props) {
  // const navigation = useNavigation();

  return (
    <View>
      <Button
        title={title}
        onPress={() => null
          // navigation.navigate('MovieDetailsScreen', { name: title })
        }
      />
    </View>
  );
};

export default ListItem;