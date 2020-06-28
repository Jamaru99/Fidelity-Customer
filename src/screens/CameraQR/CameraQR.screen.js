import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import { connect } from "react-redux";
import { BarCodeScanner } from 'expo-barcode-scanner';

import { incrementCard, setCanReadQR } from '@state';
import { layout, colors } from '@utils';

const QR_CODE = 256
const STATUS_GRANTED = 'granted'

function CameraQRScreen({ navigation, canReadQR, setCanReadQRDispatched, incrementCardDispatched }) {

    const [hasPermission, setHasPermission] = useState(false)


    function handleBarCodeScanned({ type, data }) {
      console.log(canReadQR)
        if(type === QR_CODE){
          setCanReadQRDispatched(false)
          incrementCardDispatched({ companyId: data, navigation })
          console.log(canReadQR)
        }
    }

    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync()
          setHasPermission(status === STATUS_GRANTED);
        })();
      }, []);

    return (
        <View style={styles.container}>

        {hasPermission === null
          ? <Text>Requesting for camera permission</Text>
          : hasPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : 
            <BarCodeScanner
                onBarCodeScanned={!canReadQR ? undefined : handleBarCodeScanned}
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

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    width: layout.cameraContainerWidth,
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 2,
    backgroundColor: opacity
  },
  focused: {
    flex: 5
  },
  layerRight: {
    flex: 2,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});

const mapStateToProps = (state) => ({
    customerData: state.customerData,
    canReadQR: state.canReadQR
})
  
const mapDispatchToProps = {
  incrementCardDispatched: incrementCard,
  setCanReadQRDispatched: setCanReadQR
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CameraQRScreen);
