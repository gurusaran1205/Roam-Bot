import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
export default function StartNewTripCard() {
  return (
    <View
    style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25
    }}
    >
    <Entypo name="location" size={30} color="black" />
    <Text style={{
        fontSize:25,
        fontFamily:'outfit-medium', marginTop:10
    }}> 
        No Trips Planned Yet .. 
    </Text>
     
    <Text style={{
        fontSize:20,
        fontFamily:'outfit', marginTop:10,
        textAlign:'center',
        color:'gray'
    }}> 
        Looks like it's time to plan a new travel experience! Get Ready to Experience the massive Suggestion from Us for your memorable plan 
    </Text>

    <TouchableOpacity style={{
            padding:10,
            backgroundColor:'black',
            borderRadius:15,
            paddingHorizontal:30
        }}>
        <Text style={{
            color:'white',
            fontFamily:'outfit-medium',
            fontSize:17
        }}>
            Start a New Trip
        </Text>
    </TouchableOpacity>
    </View>
  )
}