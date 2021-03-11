import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BalancePenel from '../../components/BalancePenel';
import EntryList from '../../components/EntryList';
import EntrySumary from '../../components/EntrySumary'


// import { Container } from './styles';

const Main = () => {
    return (
        <View style={styles.container}>
            <BalancePenel />
            <EntrySumary />
            <EntryList/>
        </View>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },
    label: {
        fontSize: 20,
    }
})