import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const EmojiCell = React.memo(({item, onTouch}) => {
  return (
    <TouchableOpacity style={styles.emoji} onPress={() => onTouch(item)}>
      <Text>{item.emoji}</Text>
    </TouchableOpacity>
  );
});
const styles = StyleSheet.create({
  emoji: {marginHorizontal: 4, width: 30, alignItems: 'center'},
});
export default EmojiCell;
