import React from 'react';
import styles from './styles'
import { Images } from '../../constants'
import { TouchableOpacity, View, ScrollView, Text, Image } from 'react-native';
export const Card = (props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Image
                    style={styles.image}
                    resizeMode={'contain'}
                     source={Images.car}
                />
            </View>
            <View style={styles.detailContainer}>
                <View>
                    <Text style={styles.luggageText}>{props.locationName}</Text>
                </View>
                <View style={styles.mileContainer}>
                    <Text style={styles.distanceText}>{'$5.95/day/item'}</Text>
                    <Text style={styles.mileText}>{'0.2mileas away'}</Text>
                </View>
                <TouchableOpacity style={styles.bookContainerButton} activeOpacity={0.9} onPress={()=>props.onBookPress()}>
                    <Text style={styles.bookText}>{'Book'}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}



