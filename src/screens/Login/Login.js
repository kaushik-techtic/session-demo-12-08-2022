import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import InputView from "../../components/common/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Login = () => {
  const userName = "Test";
  const password = "Test@123";

  const [userNameInput, setUserNameInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const login = () => {
    if (!userNameInput) {
      Alert.alert("Login Error", "Please enter user name!");
    } else if (!passwordInput) {
      Alert.alert("Login Error", "Please enter pssword !");
    } else if (userNameInput && passwordInput) {
      console.log("userName : ", userNameInput);
      console.log("passwordInput : ", passwordInput);

      if (userNameInput == userName && passwordInput == password) {
        Alert.alert("Login Success", "login successfully!");
        navigation2.navigate("Home");
      } else {
        Alert.alert(
          "Login Error",
          "Please check your user name and  pssword !"
        );
      }
    }
  };

  // const
  const navigation2 = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> test</Text>

      <InputView
        title={"User Name"}
        icon={require("../../../assets/Images/user.jpeg")}
        onTextChange={(value) => {
          console.log("user name  : ", value);
          setUserNameInput(value);
        }}
      />
      <InputView
        title={"Password"}
        icon={require("../../../assets/Images/lock.png")}
        onTextChange={(value) => {
          console.log("password  : ", value);
          setPasswordInput(value);
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "green",
          width: "75%",
          height: 40,
          marginTop: 16,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
        onPress={() => {
          login();
          // navigation2.navigate("HomeTabs");
        }}
      >
        <Text style={{ color: "white" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "green",
          width: "75%",
          height: 40,
          marginTop: 16,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
        onPress={() => {
          navigation2.navigate("HomeDrawer");
        }}
      >
        <Text style={{ color: "white" }}>Go To Home Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default Login;
