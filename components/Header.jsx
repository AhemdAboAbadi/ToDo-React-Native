import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My toDo </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:22
  }
});

export default Header;
