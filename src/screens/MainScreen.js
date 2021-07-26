import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SectionList,
  TextInput,
  Modal,
  TouchableOpacity,
} from 'react-native';
import emoji from '../theme/emoji.json';
import TopComponent from '../components/TopComponent';
import EmojiGroup from '../components/EmojiGroup';
import SectionComp from '../components/Section';
import categories from '../theme/categories';
import styles from './styles/mainScreenStyle';
const MainScreen = () => {
  const [smileys, setSmileys] = useState([]);
  const [people, setPeople] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [food, setFood] = useState([]);
  const [travel, setTravel] = useState([]);
  const [activities, setActivities] = useState([]);
  const [objects, setObjects] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const [flags, setFlags] = useState([]);
  const [used, setUsed] = useState([]);
  const [itemDisplayed, setItemDisplayed] = useState(null);
  const [selected, setSelected] = useState('Smileys & Emotion');
  const [searchItem, setSearchItem] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  let ref2 = useRef(null);
  useEffect(() => {
    let tempArr1 = [];
    let tempArr2 = [];
    let tempArr3 = [];
    let tempArr4 = [];
    let tempArr5 = [];
    let tempArr6 = [];
    let tempArr7 = [];
    let tempArr8 = [];
    let tempArr9 = [];
    emoji.map(el => {
      el.category === 'Smileys & Emotion'
        ? tempArr1.push(el)
        : el.category === 'People & Body'
        ? tempArr2.push(el)
        : el.category === 'Animals & Nature'
        ? tempArr3.push(el)
        : el.category === 'Food & Drink'
        ? tempArr4.push(el)
        : el.category === 'Travel & Places'
        ? tempArr5.push(el)
        : el.category === 'Activities'
        ? tempArr6.push(el)
        : el.category === 'Objects'
        ? tempArr7.push(el)
        : el.category === 'Symbols'
        ? tempArr8.push(el)
        : el.category === 'Flags'
        ? tempArr9.push(el)
        : null;
    });
    setSmileys(tempArr1);
    setPeople(tempArr2);
    setAnimals(tempArr3);
    setFood(tempArr4);
    setTravel(tempArr5);
    setActivities(tempArr6);
    setObjects(tempArr7);
    setSymbols(tempArr8);
    setFlags(tempArr9);
  }, []);
  useEffect(() => {
    if (itemDisplayed !== null) {
      if (used.length > 9) setUsed(used.splice(0, 1));
      let valid = false;
      used.map((x, index) =>
        x.emoji === itemDisplayed.emoji ? (valid = true) : null,
      );
      valid ? null : setUsed([...used, itemDisplayed]);
    }
  }, [itemDisplayed]);

  const carItems = [
    {name: 'Frequently used', index: 0, data: [{list: used}]},
    {name: 'Smileys & Emotion', index: 1, data: [{list: smileys}]},
    {name: 'People & Body', index: 2, data: [{list: people}]},
    {name: 'Animals & Nature', index: 3, data: [{list: animals}]},
    {name: 'Food & Drink', index: 4, data: [{list: food}]},
    {name: 'Travel & Places', index: 5, data: [{list: travel}]},
    {name: 'Activities', index: 6, data: [{list: activities}]},
    {name: 'Objects', index: 7, data: [{list: objects}]},
    {name: 'Symbols', index: 8, data: [{list: symbols}]},
    {name: 'Flags', index: 9, data: [{list: flags}]},
  ];
  let datas = emoji.filter(item => item.description.includes(searchItem));
  const searchResults = [
    {name: 'Search Result', index: 0, data: [{list: datas}]},
  ];
  const ref = ref => (ref2 = ref);
  const keyExtractor2 = (item, index) => item + index;
  const renderItem = ({item, index}) => {
    return <EmojiGroup item={item} onTouch={setItemDisplayed}></EmojiGroup>;
  };
  const scrollTo = index => {
    ref2.scrollToLocation({
      animated: false,
      itemIndex: 0,
      sectionIndex: index,
      viewPosition: 0,
    });
  };
  const renderSection = ({section}) => {
    return <SectionComp section={section}></SectionComp>;
  };

  const onCheckViewableItems = ({viewableItems}) => {
    viewableItems[0]?.section.name
      ? setSelected(viewableItems[0].section.name)
      : null;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.openButton}>
        <Text style={styles.openButtonText}> Open emoji picker</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.categoryView}>
            {categories.map((x, index) => (
              <TopComponent
                key={index}
                emoji={x.symbol}
                index={x.index}
                refx={scrollTo}
                isActive={selected}
                name={x.name}
                setS={setSearchItem}
                setIsActive={setSelected}></TopComponent>
            ))}
          </View>
          <SectionList
            contentContainerStyle={styles.sectionListContainer}
            onViewableItemsChanged={onCheckViewableItems}
            sections={searchItem === '' ? carItems : searchResults}
            renderItem={renderItem}
            renderSectionHeader={renderSection}
            initialScrollIndex={0}
            onScrollToIndexFailed={info => {
              const wait = new Promise(resolve => setTimeout(resolve, 500));
              wait.then(() => {
                ref2.current?.scrollToIndex({
                  index: info.index,
                  animated: false,
                });
              });
            }}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 20,
            }}
            stickySectionHeadersEnabled={true}
            ref={ref}
            keyExtractor={keyExtractor2}></SectionList>
          <View style={styles.itemDisplayedView}>
            <Text style={{fontSize: 23}}>
              {itemDisplayed !== null ? itemDisplayed.emoji : null}
            </Text>
          </View>

          <View style={{borderWidth: 1, borderRadius: 20}}>
            <TextInput
              style={styles.textInput}
              placeholder="Type the name of an emoji"
              onChangeText={text => setSearchItem(text)}></TextInput>
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.exitButton}>
            <Text style={styles.exitText}> Close emoji picker</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default MainScreen;
