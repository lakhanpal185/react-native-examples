import React, { useEffect } from "react";
import { Image, View, StyleSheet,} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('homescreen');
        },3000);
    },[])
   return(
    <View style={styles.container}>
        <Image source={require("../../assets/budha.jpg")}
         style={styles.image}
        />
    </View>
   );
}

const styles = StyleSheet.create({
    image:{
        height:'80%',
        width:"80%",
        resizeMode:'contain'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default SplashScreen;