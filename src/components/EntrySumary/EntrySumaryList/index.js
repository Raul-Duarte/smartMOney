import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// import { Container } from './styles';

const EntrySumaryList = ({ entriesGrouped }) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({ item }) => (
          <Text>- {item.description}: ${item.amount}</Text>
        )}
      />
    </View>

  )
}

export default EntrySumaryList;

const styles = StyleSheet.create({
  constainer: {
    // flex:1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,

  }
})