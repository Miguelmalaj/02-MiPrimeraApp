
import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => { //(props: Props)
    return (
        <View
            style={[ 
                styles.fabLocation,
                ( position === 'bl' ) ? styles.left : styles.right
            ]}
        >
            <TouchableNativeFeedback
                // onPress={ () => setContador( contador + 1 ) }
                onPress={ onPress }
                background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }>
                        { title }
                    </Text>
                </View>
            
            </TouchableNativeFeedback>

        </View>
    )
}

const styles = StyleSheet.create({
    /* fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    }, */
    fabLocation: {
        position: 'absolute',
        bottom: 25
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})