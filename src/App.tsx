// In App.js in a new project

import * as React from "react";
import { View, Text , StatusBar} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Main";
// import BookingDetails from "./views/BookingDetails";
import { State } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function App({ props }) {
  
  return (
    <NavigationContainer>   
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name="Bode do Primo"
          
          component={Home}
          options={{
            // title: "Bode do Primo",
            headerStyle: {
              backgroundColor: "#223440",
            },
            
            headerTintColor: "#fff",
            headerTitleStyle: {
              // fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="BookingDetails"
          component={Home}
          options={{
            title:"Reserva",
            headerStyle: {
              // backgroundColor: "#223440",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              // fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
