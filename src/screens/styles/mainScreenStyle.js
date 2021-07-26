import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    openButton: {
      backgroundColor: '#AEBD38',
      marginHorizontal: 20,
      marginTop: 100,
      alignItems: 'center',
      borderRadius: 20,
    },
    openButtonText: {
      marginVertical: 10,
      fontSize: 20,
      fontWeight: '700',
      color: '#68829E',
    },
    modalView: {height: '65%', backgroundColor: 'grey', borderRadius: 20},
    categoryView: {flexDirection: 'row', marginHorizontal: 10, marginTop: 5},
    sectionListContainer: {alignSelf: 'center'},
    itemDisplayedView: {
      alignItems: 'flex-start',
      marginLeft: 40,
      marginVertical: 20,
    },
    textInput: {height: 40, marginLeft: 10},
    exitButton: {
      backgroundColor: '#AEBD38',
      marginHorizontal: 50,
      alignItems: 'center',
      borderRadius: 20,
      marginTop: 5,
      marginBottom: 10,
    },
    exitText: {
      marginVertical: 10,
      fontSize: 20,
      fontWeight: '700',
      color: '#68829E',
    },
  });

  export default styles;