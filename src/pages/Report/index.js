import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySumary from '../../components/EntrySumary';

import { Picker } from '@react-native-picker/picker';

// import { Container } from './styles';

const Report = () => {
    return (
        <View>
            <BalanceLabel />
            <View>
                <Picker>
                    <Picker.Item label="Todas as Categorias" />
                </Picker>
                <Picker>
                    <Picker.Item label="últimos 7 dias" />
                </Picker>
            </View>
            <EntrySumary />
            <EntryList />
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