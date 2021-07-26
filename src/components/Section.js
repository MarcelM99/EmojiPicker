import React from 'react';
import {View, Text} from 'react-native';

const SectionComp = React.memo(({section}) => {
  return (
    <View style={{backgroundColor: 'grey'}}>
      <Text>{section.name}</Text>
    </View>
  );
});

export default SectionComp;
