import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

const MemoListScreen = (props)=> {
  const { navigation } = props;
  return(
    <View style={styles.container}>
      {/* AppBar /> */}
      <MemoList />
      <CircleButton name="plus"
       onPress={() => { navigation.navigate('MemoCreate'); }}/>
    </View>
  );
}

export default MemoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
});
