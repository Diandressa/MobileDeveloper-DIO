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
    );

    const renderDrawDetails = () => (
        <View style={{alignItems:"center"}}>
            <Text style={styles.drawBrand}>Girl</Text>
            <Text style={styles.drawName}>MODEL</Text>
        </View>
    )

    return(
        <View style={styles.container}>
            {renderLogoBox()}
            <Divider/>

            {renderDrawDetails()}
        </View>
    )
}