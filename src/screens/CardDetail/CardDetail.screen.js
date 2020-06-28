import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from "react-redux";
import { setCanReadQR } from '@state';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './carddetail.style';

function CardDetailScreen({ customerData, route, setCanReadQRDispatched }) {

    const { card } = route.params

    useEffect(() => {
        setCanReadQRDispatched(true)
    }, [])

    const array = new Array(card.companyData.nCardPoints/2)

    return (
        <View style={styles.container}>
            <Text>{card.points}/{card.companyData.nCardPoints}</Text>
            {
                array.map((item) => (
                    <View style={styles.pointLineContainer}>
                        {
                            [1,2,3].map((item) => (
                                <PointItem />
                            ))
                        }
                    </View>
                ))
                
            }
            
        </View>
    )
}

function PointItem() {
    return (
        <View style={styles.pointItemContainer}>
            <MaterialCommunityIcons
                name="star"
                size={30}
                color={"#FFF"}
            />
        </View>
    )
}

const mapStateToProps = (state) => ({
    customerData: state.customerData
})

const mapDispatchToProps = {
    setCanReadQRDispatched: setCanReadQR
}

  
export default connect(mapStateToProps, mapDispatchToProps)(CardDetailScreen);
