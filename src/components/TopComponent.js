import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const TopComponent = ({
  emoji,
  index,
  refx,
  isActive,
  name,
  setS,
  setIsActive,
}) => {
  return (
    <TouchableOpacity
      style={isActive === name ? styles.selected : styles.normal}
      onPress={() => {
        setS(''), refx(index), setIsActive(name);
      }}>
      <Text>{emoji}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  selected: {
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'blue',
  },
  normal: {
    flex: 1,
    alignItems: 'center',
  },
});
export default TopComponent;
