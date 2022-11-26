import { StyleSheet, View, Image } from "react-native";
import { Button, Text } from '@rneui/themed';

export default function OBScreen01({ navigation }) {
    return(
        // logo first
        <View>

            <Text>Lorem ipsum dolor sit amet consectetur, Semper rhoncus juston ut a egaet. Id urna sit in tellus at auctor lorem. Mauris lectus consectetur feugiat maruis.</Text>

            <View>
                <Button 
                    title="NEXT"
                    onPress={() => navigation.navigate('OBS02')}
                />

                <Button 
                    title="SKIP"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            
        </View>
    );
}


const obstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {

    },

    obImage: {

    },


});