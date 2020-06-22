import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import { getCardList } from '@state';

import styles from './cardlist.style';

function CardListScreen({ customerData, getCardListDispatched, cards, navigation }) {

    useEffect(() => {
        getCardListDispatched(customerData._id)
    }, [])

    function handleCardItemPress(card) {
        navigation.navigate("CardDetail", { card })
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={cards}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <CardItem
                        card={item}
                        onPress={() => handleCardItemPress(item)}
                    />
                )}
            />
        </View>
    )
}

function CardItem({ card, onPress }) {
    return (
        <TouchableOpacity style={styles.cardItemContainer} onPress={onPress}>
            <Text>{card.companyData.name}</Text>
            <Text>{card.points}/{card.companyData.nCardPoints} pontos</Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state) => ({
    customerData: state.customerData,
    cards: state.cards
});

const mapDispatchToProps = {
    getCardListDispatched: getCardList
}

  
export default connect(mapStateToProps, mapDispatchToProps)(CardListScreen);
