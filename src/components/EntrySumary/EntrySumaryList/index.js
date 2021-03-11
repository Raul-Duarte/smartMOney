import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// import { Container } from './styles';

const EntrySumaryList = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList

        data={[
          { key: 'Alimentação: $201' },
          { key: 'Combustivl: $12 ' },
          { key: 'Aluguel: $120' },
          { key: 'Lazer $250' },
          { key: 'Outros $1200' },
        ]}

        renderItem={({ item }) => (
          <Text>{item.key}</Text>
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