import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

export default function LinhaHorizontal(){
  return <View style={styles.linha}>
  </View>
  ;
}

const styles = StyleSheet.create({
  linha: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

