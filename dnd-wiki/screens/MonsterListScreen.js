import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ScrollView} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Text, Card, Button } from "@rneui/themed";

// List Item Component
import MonsterListItem from "../components/MonsterListItem";
import { text } from "@fortawesome/fontawesome-svg-core";

// Need to import monster data below

export default function MonsterListScreen({ navigation }) {
    // add the three useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    // add useEffect for the fetch process
    useEffect(() => {
        console.log("Making request");
        // Getting targeted API data
        fetch("https://api.open5e.com/monsters/?limit=10")
            // Setting data as json format
            .then((res) => res.json())
            .then(
                // Setting the state of hooks
                (result) => {
                            console.log("Making Complete");
                    setIsLoaded(true);
                    setDataResult(result);
                },
                // Setting the state of hooks
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    return (
        <View style={styles.container}>
            {displayDataContainer(error, isLoaded, dataResult, navigation)}
        </View>
    );
}

function displayDataContainer(error, isLoaded, dataResult, navigation) {
    // Setting renderItem to a item from api
    const renderItem = ({ item }) => (
        // Settubg data and referancing navigation
        <MonsterListItem itemData={item} navigatorRef={navigation} />
    );

    if (error) {
        // show an error message if there is a error
        return (
            <View>
                <Text>Error: {error.message}</Text>
            </View>
        );
    } else if (!isLoaded) {
        // show the loader when not loaded
        return (
            <View>
                <Text>Loadin Monsters...</Text>
            </View>
        );
    } else if (dataResult.results === undefined) {
        // If there are no results show this
        return (
            <View>
                <Text>No records found for search</Text>
            </View>
        );
    } else {
        // show FlatList with item data
        return (
            <FlatList
                // Based on this data
                data={dataResult.results}
                // Render the renderItem from above
                renderItem={renderItem}
                // Extract the item based on it's id
                keyExtractor={(item) => item.slug}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#3D3D3F",
    },

    card: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlignVertical: "center",
        width: "100%",
        height: 100,
        backgroundColor: "#28282B",
        marginTop: 20,
    },

    monsterName: {
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
    },

    cardImg: {
        width: "100%",
        height: 200,
        borderColor: "#F15356",
        borderWidth: 1,
    },

    cardInfo: {
        flex: 1,
    },

    cardStats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
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
