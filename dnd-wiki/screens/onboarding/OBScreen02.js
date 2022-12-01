import { StyleSheet, View, Image } from "react-native";
import { Button, Text } from '@rneui/themed';

export default function OBScreen02({ navigation }) {
    return(
        // logo first
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../../assets/imgs/Logo.png')}
            />
            <Image 
                style={styles.obImage}
                source={require('../../assets/imgs/splash-2.png')}
            />
            <Text style={styles.obText}>
                <Text h3>HOW DOES THIS WORK?</Text>
                {'\n'}
                <Text style> Search for monsters using the HOMEBREW tab, and use the CREATE tab to create your monster.</Text>
            </Text>

            <View style={styles.btnContainer}>
                <Button 
                    title="Next"
                    buttonStyle={{
                        backgroundColor: '#28282B'
                    }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 300,
                        marginVertical: 0,
                    }}
                    onPress={() => navigation.navigate('OBS03')}
                />
                <Button 
                    type="outline"
                    title="Skip"
                    titleStyle={{
                        color: '#000'
                    }}
                    buttonStyle={{
                        borderColor: '#28282B',
                        borderWidth: 2
                    }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 300,
                        marginVertical: 0,
                    }}
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7E7DB'
    },

    logo: {
        position: 'absolute',
        top: 60

    },

    obImage: {
        marginBottom: 40 ,
        marginTop: 150,
        width: 260,
        height: 260
    },

    obText: {
        textAlign: 'center',
        fontSize: 18,
        paddingRight: 30,
        paddingLeft: 30,
        lineHeight: 25,
        marginBottom: 75
    },
    btnContainer: {
        marginTop: 30
    }
});