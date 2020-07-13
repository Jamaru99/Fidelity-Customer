import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFocusEffect } from '@react-navigation/native';

import { incrementCard } from '@state';
import { texts } from '@utils';

import styles from './cameraqr.style';

const QR_CODE = 256
const STATUS_GRANTED = 'granted'

function CameraQRScreen({ navigation, incrementCardDispatched }) {

    const [hasPermission, setHasPermission] = useState(false)
    var canRead = true

    useEffect(() => {
      requestPermission()
    }, [])

    useFocusEffect(
      React.useCallback(() => {
        canRead = true
      })
    )

    async function requestPermission() {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === STATUS_GRANTED);
    }

    function handleBarCodeScanned({ type, data }) {
      if(type === QR_CODE && canRead){
        canRead = false
        incrementCardDispatched({ companyId: data, navigation })
      }
    }

    return (
      <View style={styles.container}>
        {hasPermission === null
          ? <Text>{texts["camera_qr:requesting_permission"]}</Text>
          : hasPermission === false
              ? <Text>{texts["camera_qr:no_permission"]}</Text>
              : 
              <BarCodeScanner
                onBarCodeScanned={handleBarCodeScanned}
                style={[StyleSheet.absoluteFill, styles.barCodeScanner]}
              >
                <View style={styles.layerTop} />
                <View style={styles.layerCenter}>
                    <View style={styles.layerLeft} />
                    <View style={styles.focused} />
                    <View style={styles.layerRight} />
                </View>
                <View style={styles.layerBottom} />
              </BarCodeScanner>
        }
      </View>
    );
}

const mapStateToProps = (state) => ({
    customerData: state.customerData
})
  
const mapDispatchToProps = {
  incrementCardDispatched: incrementCard
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CameraQRScreen);
