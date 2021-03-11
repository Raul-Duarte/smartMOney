import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// import { Container } from './styles';

const EntryListItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Entry List Item</Text>
            <FlatList

                data={[
                    { key: 'Padaria Asa Branca: $10' },
                    { key: 'Supermecado Isadora: $190 ' },
                    { key: 'Posto Ipiranga: $190' },
                ]}

                renderItem={({ item }) => (
                    <Text>{item.key}</Text>
                )}
            />
        </View>
    )
}

export default EntryListItem;

const styles = StyleSheet.create({
    container:{
        // flex:1,
    },

    title:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
    }
})