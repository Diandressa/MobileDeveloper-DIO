import {useEffect, useState} from 'react';
import {View, Text, Button, Image} from 'react-native'
import { styles } from './style';
import Logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { DRAW_ASSETS_BASE_URL } from '../../constants/draw';
import FavoriteButton from '../FavoriteButton';
import { DrawModel } from './props';
import { loadDrawData } from './actions';

export default function CardView(){
    const [drawData, setDrawData] = useState<DrawModel | null>(null);

    useEffect(()=>{
        (async()=>{
            await loadDrawData(2, setDrawData);
            console.log(drawData)
        })();
    }, []);

    // sub-component: criado no próprio arquivo
    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image 
                style={styles.imageLogo} 
                source={{ uri: "https://instagram.fcgh10-2.fna.fbcdn.net/v/t51.2885-19/330855951_568280355238169_3867901785016127227_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fcgh10-2.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGxJDlhlZKfvTgCyE1jeywth_hjCZqPDQ4yIcGxuPGpRuIExpf6VB7Y6R_gCU6lG9BQAwkcI_6Fq5aArhlmpqGp&_nc_ohc=Rf4IByc3gJIQ7kNvwEa3wx9&_nc_gid=cRBVaDe9JyEMcB6IdGRVLQ&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfpKd78T3Rtx8KYCXXDrYhsOK19yk20g88Ma3RotjHTCvg&oe=6979C1BF" }} 
            />
        </View>
    );

    const renderDrawDetails = () => (
        <View style={{alignItems:"center"}}>
            <Text style={styles.drawBrand}>Girl</Text>
            <Text style={styles.drawName}>MODEL</Text>
        </View>
    )

    const renderDrawImage = () => (
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: `${DRAW_ASSETS_BASE_URL}2.jpg`
                }}
            />
        </View>
    )

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title="<" color={'#a11cca'} onPress={() => {}}/>
            <Text style={styles.priceLabel}>VALOR</Text>
            <Button title='>'color={'#a11cca'} onPress={() => {}}/>
        </View>
    )

    return(
        <View style={styles.container}>
            {renderLogoBox()}
            <Divider/>

            {renderDrawDetails()}
            {renderDrawImage()}

            <FavoriteButton/>
            {renderPriceControls()}
        </View>
    )
}