import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import { Text } from "@rneui/themed";
import MonsterDetailContainer from "../components/MonsterDetailContainer";

export default function MonsterDetailScreen({ route }) {
    // get the paramameter from the  route
    const { detailSlug } = route.params;

    // add the three useState for the fetch process
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataResult, setDataResult] = useState([]);

    // add useEffect for the fetch process
    useEffect(() => {
        fetch("https://api.open5e.com/monsters/" + detailSlug)
            .then((res) => res.json())
            .then(
                (result) => {
                    // successful load
                    setIsLoaded(true);
                    setDataResult(result);
                },
                (error) => {
                    // handle errors here
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    return (
        <View style={styles.container}>
            {displayData(error, isLoaded, dataResult)}
        </View>
    );
}

function displayData(error, isLoaded, dataResult) {
    if (error) {
        return (
            <View>
                <Text>Error: {error.message}</Text>
            </View>
        );
    } else if (!isLoaded) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    } else if (dataResult.results === undefined) {
        return (
            <View>
                <Text>No records found for search</Text>
            </View>
        );
    } else {
        return <MonsterDetailContainer currMonster={dataResult.results} />;
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#28282B",
    },

});
