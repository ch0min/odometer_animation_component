import React, {useState, useEffect} from "react";
import {StyleSheet, View, SafeAreaView, Text, Button} from "react-native";

import Digit from "./Digit";

const Odometer = () => {
    const [number, setNumber] = useState(1234)   // Set users initial points - can be set to 0

    const handleChange = () => {  // Button demonstration
        // setNumber(5107);    // Set users new points, change to useEffect instead of button
        setNumber(Math.floor(Math.random() * 10000 % 10000))
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {    // Can be removed, just there to show the initial "Points" the user has.
    //         setNumber(5107)
    //     }, 1000);
    //     return () => clearTimeout(timer)
    // }, []);


    return (
        <SafeAreaView style={styles.odometerContainer}>
            <View style={styles.odometer}>
                {number.toString().padStart(4, "0").split("").map((digit, index) => (
                    <Digit key={index} value={parseInt(digit)} />
                ))}
            </View>

            {/*Button to demonstrate the animation effect*/}
        <Button title="Animate" onPress={handleChange}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    odometerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    odometer: {
        flexDirection: "row"
    }
})

export default Odometer;