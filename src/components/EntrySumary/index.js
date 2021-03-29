import React from 'react';
import { View, StyleSheet } from 'react-native';

import EntrySumaryChart from './EntrySumaryChart'
import EntrySumaryList from './EntrySumaryList'

const EntrySumary = ({entriesGrouped}) => {
    return (
        <View style={styles.container}>
            <EntrySumaryChart />
            <EntrySumaryList entriesGrouped={entriesGrouped} />
        </View>
    )
}

export default EntrySumary;

const styles = StyleSheet.create({
    container:{
        // flex:1,
    }
})