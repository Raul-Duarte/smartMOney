import React from 'react';
import { View, StyleSheet } from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';
import EntryList from '../../components/EntryList';
import EntrySumary from '../../components/EntrySumary';

// import { Container } from './styles';

const Report = () => {
    return (
        <View>
            <BalanceLabel />
            <View>
                
            </View>
            <EntrySumary />
            <EntryList />
        </View>
    )
}

export default Report;

const styles = StyleSheet.create({
    
})