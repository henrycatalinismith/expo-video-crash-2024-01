import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Video } from "expo-av";
import { Button, Dimensions, SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Button
        title="Video"
        onPress={() => {
          navigation.navigate("Video");
        }}
      />
    </SafeAreaView>
  );
}

function VideoScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Video
        autoPlay
        useNativeControls
        source={require("./assets/hams.mp4")}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").width * 0.56,
        }}
      />
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
