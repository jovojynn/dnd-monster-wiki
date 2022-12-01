import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import { Button, Text, Divider } from '@rneui/themed';

export default function HomeScreen({ navigation }) {
    return(
        <SafeAreaProvider>
            <View style={styles.container}>
                <View style={styles.bgBlock}></View>
                <View style={styles.logoContainer}>
                    <Image 
                        style={styles.logo}
                        source={require('../assets/imgs/Logo.png')}
                    />
                </View>
                <View style={styles.heading}>
                    <Text h1>MONSTER SPOTLIGHT</Text>
                    <Divider width={5} color={'#9E0B0F'} marginTop={5}/>
                </View>
                <Image 
                    style={styles.spotlightImg}
                    source={require('../assets/imgs/dragon.jpg')} // Would be connected to the API
                />
                <Text h2 style={styles.spotlightTitle}>Ancient Green Dragon</Text>
                <Text style={styles.summary}>Lorem ipsum dolor sit amet consectetur. In vulputate magna quis curabitur at gravida. Elementum pellentesque semper iaculis suscipit senectus viverra tempus sed. Mauris at nulla...</Text>
                <Button 
                    type="clear"
                    title="Read More"
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 100,
                        alignSelf: 'flex-end',
                    }}
        
                /> 
                <Button 
                    type="outline"
                    title="BROWSE HOMEBREW"
                    buttonStyle={{
                        backgroundColor: '#28282B',
                        borderColor: '#6FCBF3',
                        borderWidth: 1,
                        borderRadius: 5
                    }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 300,
                    }}
                    onPress={() => navigation.navigate('MonsterList')}
                />
                <Button 
                    type="outline"
                    title="+ CREATE A MONSTER"
                    buttonStyle={{
                        backgroundColor: '#28282B',
                        borderColor: '#6FCBF3',
                        borderWidth: 1,
                        borderRadius: 5
                    }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50,
                        width: 300,
                        marginVertical: 0,
                    }}
                    onPress={() => navigation.navigate('CreateMonster')}
                />
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#3D3D3F'
    },

    logoContainer: {
        position: 'absolute',
        backgroundColor: '#F7F2D6',
        width: 420,
        height: 120,
        marginTop: 75,
        transform: [{skewY: '-5deg'}]
    },

    logo: {
        position: 'absolute',
        top: 30,
        right: 125,
        left: 125,
        transform: [{skewY: '5deg'}],
    },

    heading: {
        marginTop: 220
    },

    spotlightImg: {
        marginTop: 15
    },

    spotlightTitle: {
        marginBottom: 5
    },

    summary: {
        color: '#fff',
        fontSize: 11,
        marginLeft: 50,
        marginRight: 50,
        lineHeight: 20
    },


});