import React, { useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from "react-redux";

import { getCardList } from '@state';
import { texts } from '@utils';
import { CARD_DETAIL_SCREEN } from '@navigation';

import styles from './cardlist.style';

function CardListScreen({ customerData, getCardListDispatched, cards, navigation }) {

    useEffect(() => {
        getCardListDispatched(customerData._id)
    }, [])

    function handleCardItemPress(card) {
        navigation.navigate(CARD_DETAIL_SCREEN, { card })
    }

    return (
        <View style={styles.container}>
            {
                cards.length > 0 ?
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
                    :
                    <Text style={styles.noCardsText}>{texts["card_list:no_cards"]}</Text>
            }
        </View>
    )
}

function CardItem({ card, onPress }) {
    return (
        <TouchableOpacity style={styles.cardItemContainer} onPress={onPress}>
            <Image source={require('@images/card-icon.png')} style={styles.cardItemIcon} />
            <View>
                <Text style={styles.cardItemText}>{card.companyData.name}</Text>
                <Text>{card.points}/{card.companyData.nCardPoints} {texts["points"]}</Text>
            </View>
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