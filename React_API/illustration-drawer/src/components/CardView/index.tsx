import React from 'react';
import {View, Text, Button, Image} from 'react-native'
import { styles } from './style';
import Logo from '../../../assets/logo.png';
import Divider from '../Divider';

export default function CardView(){
    // sub-component: criado no próprio arquivo
    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={Logo} />
        </View>
    )

    return(
        <View style={styles.container}>
            {renderLogoBox()}
            <Divider/>
        </View>
    )
}