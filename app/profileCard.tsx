import { Text, View, Image, TouchableOpacity } from "react-native";
import { s } from "./indexStyles";
import { FontAwesome } from "@expo/vector-icons";

export function ProfilCard(props) {
  if (props.age > 70) {
    console.log("You are old");
  } else {
    console.log("You are still young");
  }

  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>{props.name}</Text>
          <Text>
            Hi I am React native developer, let's get in touch, and soon
          </Text>

          <Text
            style={{
              backgroundColor: props.isOpenToWork ? "green" : "red",
              color: "white",
            }}
          >
            {props.isOpenToWork ? "I am open to Work" : "Employed"}
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
