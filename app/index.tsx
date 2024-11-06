import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ProfilCard } from "./components/profileCard";
import { AgeCounter } from "./components/AgeCounter";
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
        <AgeCounter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
