import {Text, View, StatusBar} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import s from "./indexStyles";

export default function App(){

    return(
        <SafeAreaProvider>
            <SafeAreaView style={s.safeAreaView}>
                <StatusBar barStyle="dark-content" backgroundColor="white"/>
                <View style={s.container}>
                <View style = {s.cube}/>
                <View style={s.textContainer}> 
                    <Text style={s.Title}>
                        My First App
                    </Text>
                    <Text style ={s.description}>
                        This is my first ever app without the assistance of chatgpt or a Youtube video.
                    </Text>
                </View> 
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

