import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const BalancePenelLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>R$ 2.102,45</Text>
    </View>
  )
}

export default BalancePenelLabel;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',


  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 22,
  }
})