import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppExample from "./apps/splashScreens/AppExample"
// import MyLocation from './apps/geoWeather/location';
// import MyLocation from "./apps/geoWeatherApp/location";

export default function App() {
  return (
    <View style={styles.container}>
      <AppExample/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
