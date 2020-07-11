import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './carddetail.style';

var count = 0

export default function CardDetailScreen({ route, setCanReadQRDispatched }) {

    const { card } = route.params
    const { companyData, points } = card

    useEffect(() => {
        count = 0
    }, [])

    const linesOf3 = new Array(Math.floor(companyData.nCardPoints/3)).fill(0)
    const rest = companyData.nCardPoints % 3
    const restLine = new Array(rest).fill(0)
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Você conseguiu {points} pontos no cartão da {companyData.name}. 
                Conquiste mais {companyData.nCardPoints - points} para ganhar o prêmio oferecido!
            </Text>
            {
                linesOf3.map((_, index) => (
                    <View style={styles.pointLineContainer} key={index}>
                        {
                            [0,0,0].map((_, index) => {
                                count += 1
                                return <PointItem earned={count <= card.points} key={index} />
                            })
                        }
                    </View>
                ))
                
            }
            <View style={styles.pointLineContainer}>
                {
                    restLine.map((_, index) => {
                        count += 1
                        return <PointItem earned={count <= card.points} key={index} />
                    })
                }
            </View>
        </ScrollView>
    )
}

function PointItem({ earned }) {
    return (
        <View style={[styles.pointItemContainer, earned ? styles.pointOn : styles.pointOff]}>
            <MaterialCommunityIcons
                name="star"
                size={30}
                color={earned ? "#FFF" : "#999"}
            />
        </View>
    )
}
