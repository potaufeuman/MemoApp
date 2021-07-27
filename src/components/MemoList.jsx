import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MemoList = ()=> {
  const navigation = useNavigation();
  return(
    <View>
      <TouchableOpacity style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年7月19日</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}>
          <View>
            <Feather name="x" size={16} color="#B0B0B0" />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年7月19日</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}>
          <View>
            <Feather name="x" size={16} color="#B0B0B0" />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2021年7月19日</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}>
          <View>
            <Feather name="x" size={16} color="#B0B0B0" />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

export default MemoList;

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  }
});
