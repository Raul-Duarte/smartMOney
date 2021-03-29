import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySumary from '../../components/EntrySumary';

import { Picker } from '@react-native-picker/picker';

// import { Container } from './styles';

const Report = () => {

    const currentBalance = "2.065,35"
    
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
        <View>
            <BalanceLabel currentBalance={currentBalance} />
            <View>
                <Picker>
                    <Picker.Item label="Todas as Categorias" />
                </Picker>
                <Picker>
                    <Picker.Item label="últimos 7 dias" />
                </Picker>
            </View>
            <EntrySumary entriesGrouped={entriesGrouped} />
            <EntryList entries={entries} />
            <View>
                <Button title="Salvar" />
                <Button title="Fechar" />
            </View>
        </View>
    )
}

export default Report;

const styles = StyleSheet.create({

})