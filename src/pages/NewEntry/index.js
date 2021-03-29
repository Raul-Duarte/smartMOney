import React from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

// import { Container } from './styles';

const NewEntry = ({navigation}) => {
    const currentBalance = "2.065,35"
    return (
        <View style={styles.container}>
            <BalanceLabel currentBalance={currentBalance}/>
            <View>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <Button title="gps" />
                <Button title="camera" />
            </View>
            <View>
                <Button title="Adicionar" />
                <Button title="Cancelar" onPress={()=>navigation.goBack()} />
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