import React, {useEffect} from "react";
import {StyleSheet, View, Text} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from "react-native-reanimated";


const Digit = ({value}) => {
    const digitAnimatedValue = useSharedValue(0);

    const digitAnimated = useAnimatedStyle(() => {
        return {
            transform: [{translateY: -digitAnimatedValue.value}]
        }
    });

    useEffect(() => {
        digitAnimatedValue.value = withTiming(value * 60, {duration: 1000})
    }, [value]);


    return (
        <View style={styles.digitContainer}>
                <Animated.View style={digitAnimated}>
                    {[...Array(10)].map((_, i) => (
                        <Text key={i} style={styles.digitText}>{i}</Text>
                    ))}
                </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    digitContainer: {
        alignItems: "center",
        width: 40,
        height: 60,
        overflow: "hidden",

    },
    digitText: {
        height: 60,
        fontSize: 50,
    }
});

export default Digit;








