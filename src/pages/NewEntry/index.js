import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

// import { Container } from './styles';

const NewEntry = () => {
    return (
        <View style={styles.container}>
            <BalanceLabel />
            <View>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <Button title="gps"/>
                <Button title="camera"/>
            </View>
            <View>
            <Button title="Adicionar"/>
            <Button title="Cancelar"/>
            </View>

        </View>
    )
}

export default NewEntry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
    },
})