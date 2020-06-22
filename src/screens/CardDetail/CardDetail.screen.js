import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";

function CardDetailScreen({ customerData, route }) {

    const { card } = route.params

    return (
        <View>
            <Text>{card.points}/{card.companyData.nCardPoints}</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    customerData: state.customerData
});

  
export default connect(mapStateToProps, null)(CardDetailScreen);
