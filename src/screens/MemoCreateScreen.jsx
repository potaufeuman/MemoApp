import React from 'react';
import {
  View, Text, TextInput, StyleSheet, 
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

const MemoCreateScreen = (props)=> {
  const { navigation } = props;
  return(
    <KeyboardSafeView style={styles.container}>
      {/* AppBar /> */}
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check"
       onPress={() => { navigation.goBack(); }}/>
    </KeyboardSafeView>
  );
}

export default MemoCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  }
});