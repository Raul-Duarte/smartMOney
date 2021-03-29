import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import BalancePenel from '../../components/BalancePenel';
import EntryList from '../../components/EntryList';
import EntrySumary from '../../components/EntrySumary'


// import { Container } from './styles';

const Main = ({ navigation }) => {

    const currentBalance = "2.064,35"

    const entriesGrouped = [
        { key: '1', description: 'Alimentação', amount: 201 },
        { key: '2', description: 'Combustivl', amount: 12 },
        { key: '3', description: 'Aluguel', amount: 120 },
        { key: '4', description: 'Lazer', amount: 250 },
        { key: '5', description: 'Outros', amount: 1200 },
    ]

    const entries = [
        { key: '1', description: 'Padaria Asa Branca', amount: 10 },
        { key: '2', description: 'Supermecado Isadora', amount: 190 },
        { key: '3', description: 'Posto Ipiranga', amount: 190 },
    ]

    return (
        <View style={styles.container}>
            <BalancePenel currentBalance={currentBalance} />
            <Button title="Adicionar" onPress={() => navigation.navigate("NewEntry")} />
            <EntrySumary entriesGrouped={entriesGrouped} />
            <EntryList entries={entries} />
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