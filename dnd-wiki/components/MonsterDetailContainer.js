import { StyleSheet, View, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Text, Card, Button } from '@rneui/themed';

// List Item Component
import MonsterListItem from '../components/MonsterListItem';
import { text } from '@fortawesome/fontawesome-svg-core';

// Need to import monster data below

export default function MonsterDetailContainer({ currMonster }) {
    // render list item below
    let featImage;

    if(currMonster.img_main !== null){
        featImage = 
            <Card.Image
                style={styles.cardImg}
                source={{ uri: currMonster.img_main }}
            />;
    }
    else{
        featImage = (
            <Card.Image
                style={styles.cardImg}
                source={require("../assets/android-splash.png")}
            />
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {/* Chip would go here */}

                <Card>
                    <Card.Title h4 style={{ color: "#fff" }}>
                        {currMonster.name}
                    </Card.Title>
                    {featImage}
                    <View style={styles.cardStats}>
                        <Text style={styles.statContainer}>
                            <Text style={styles.stat}>Size</Text>
                            {"\n"}
                            <Text style={styles.statValue}>Large</Text>
                        </Text>

                        <Text style={styles.statContainer}>
                            <Text style={styles.stat}>Type</Text>
                            {"\n"}
                            <Text style={styles.statValue}>Abomination</Text>
                        </Text>
                        <Text style={styles.statContainer}>
                            <Text style={styles.stat}>Alignment</Text>
                            {"\n"}
                            <Text style={styles.statValue}>Evil</Text>
                        </Text>
                    </View>
                    <View style={styles.monsterDesc}>
                        <Text>{currMonster.description}</Text>
                    </View>
                </Card>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#28282B",
    },

    monsterName: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
    },

    monsterImg: {
        width: "100%",
        height: 300,
        marginBottom: 20,
    },

    monsterDesc: {
        backgroundColor: "#E7E7DB",
        width: "85%",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },

    cardInfo: {
        flex: 1,
    },

    cardStats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 20,
    },

    statContainer: {
        flex: 1,
        textAlign: "center",
    },

    stat: {
        color: "#fff",
        textDecorationLine: "underline",
        fontSize: 12,
    },

    statValue: {
        color: "#fff",
        fontSize: 12,
    },
});