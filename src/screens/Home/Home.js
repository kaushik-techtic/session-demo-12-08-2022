import { View, Text, TextInput, Image } from "react-native";

const Home = ({ navigation, route }) => {
  console.log("route : ", route);
  const userName = route?.params?.userName;
  // const
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Home</Text>
      <Text> {userName}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default Home;
