import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function SearchPlace() {
    const [searchTerm, setSearchTerm] = useState('');
    const [places, setPlaces] = useState([]);

    const API_KEY = Constants.expoConfig.extra.GEOAPIFY_MAP_KEY;  // Using Expo Constants

    const fetchPlaces = async (text) => {
        setSearchTerm(text);

        if (text.length < 3) {
            setPlaces([]); // Clear results for short input
            return;
        }

        const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${API_KEY}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.features) {
                setPlaces(data.features); // Set places list
            }
        } catch (error) {
            console.error("Error fetching places:", error);
        }
    };

    return (
        <View style={{ padding: 20, backgroundColor: 'white', height: '100%', paddingTop: 75 }}>
            <TextInput
                placeholder="Search a place..."
                value={searchTerm}
                onChangeText={fetchPlaces}
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5,
                    paddingLeft: 10,
                    marginBottom: 10,
                }}
            />

            <FlatList
                data={places}
                keyExtractor={(item) => item.properties.place_id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => console.log("Selected:", item.properties.formatted)}
                        style={{
                            padding: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#ddd'
                        }}
                    >
                        <Text>{item.properties.formatted}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
