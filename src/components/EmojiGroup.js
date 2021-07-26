import React from 'react';
import {View, FlatList} from 'react-native';
import EmojiCell from './EmojiCell';

const EmojiGroup = React.memo(({item, onTouch}) => {
  const renderItem2 = ({item, index}) => {
    return <EmojiCell item={item} onTouch={onTouch} />;
  };

  const getItemLayout = (data, index) => ({
    length: 20,
    offset: 20 * index,
    index,
  });
  const keyExtractor = item => item.emoji;
  return (
    <View>
      <FlatList
        data={item.list}
        renderItem={renderItem2}
        numColumns={10}
        maxToRenderPerBatch={200}
        updateCellsBatchingPeriod={50}
        getItemLayout={getItemLayout}
        initialNumToRender={50}
        windowSize={20}
        removeClippedSubviews={true}
        keyExtractor={keyExtractor}></FlatList>
    </View>
  );
});

export default EmojiGroup;
