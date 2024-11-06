import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./indexStyles";
import { ProfilCard } from "./profileCard";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfilCard
          name={"Wells"}
          surname={"West"}
          age={71}
          isOpenToWork={true}
        ></ProfilCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
