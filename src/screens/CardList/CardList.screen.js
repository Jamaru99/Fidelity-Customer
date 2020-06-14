import React, { useState } from 'react';
import { connect } from "react-redux";
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from './cardlist.style';

function CardListScreen({ companyData }) {

    return (
        <View style={styles.container}>
            <Text>Lista de cartões</Text>
        </View>
    );
}

const mapStateToProps = (state) => ({
    companyData: state.companyData,
});

  
export default connect(mapStateToProps, null)(CardListScreen);
