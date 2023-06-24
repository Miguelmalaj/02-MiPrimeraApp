import React, { useState } from 'react'
import { Button, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>
                    counter: { contador }
            </Text>

            <TouchableOpacity
                onPress={ () => setContador( contador + 1 ) }
            >
                <View style={ styles.buttonIncrementar }>
                    <Text>
                        click
                    </Text>
                </View>
                
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15 
    },
    buttonIncrementar: {
        backgroundColor: 'red',
        borderRadius: 100
    }
})




/* 
    <Image
        style={{ width: 50, height: 50 }}
        source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
    /> 
*/