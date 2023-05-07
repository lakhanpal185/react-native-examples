import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Location from 'expo-location';

const MyLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const handleGetLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Location permission not granted');
        setLocation(null);
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
        maximumAge: 1000,
      });

      setLocation(coords);
      setError(null);
    } catch (error) {
      setError(error.message);
      setLocation(null);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Get Location" onPress={handleGetLocation} />
      {location && (
        <View>
          <Text>Latitude: {location.latitude}</Text>
          <Text>Longitude: {location.longitude}</Text>
          <Text>Altitude: {location.altitude}</Text>
        </View>
      )}
      {error && <Text>Error: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyLocation;
