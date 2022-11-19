import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Setting from "../screens/setting/Setting";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeDrawer"
          component={HomeDrawer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Settings" component={Setting} />
    </Drawer.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          console.log("route.name : ", route.name);
          if (route.name === "Home1") {
            return (
              <Image
                source={require("../../assets/Images/home.png")}
                style={{ height: 30, width: 30 }}
              />
            );
          } else if (route.name === "Settings2") {
            return (
              <Image
                source={require("../../assets/Images/setting.png")}
                style={{ height: 30, width: 30 }}
              />
            );
          }
        },
        // tabBarActiveTintColor: "tomato",
        // tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home1" component={Home} />
      <Tab.Screen name="Settings2" component={Setting} />
    </Tab.Navigator>
  );
};

export default Route;
