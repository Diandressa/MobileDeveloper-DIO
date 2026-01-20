import React from 'react';
import {View, Text, Button, Image} from 'react-native'
import { styles } from './style';
import Logo from '../../../assets/logo.png';

export default function CardView(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.imageLogo} source={Logo} />
            </View>
        </View>
    )
}