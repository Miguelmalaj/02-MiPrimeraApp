import React from 'react'
import { Text, View } from 'react-native'

export const TestScreen = () => {
  return (
    <View style={{
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: 45,
          textAlign: 'center'
        }}>
          this is another test
        </Text>
      </View>
  )
}
