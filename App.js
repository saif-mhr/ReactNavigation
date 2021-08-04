import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Text>Home Screen</Text>
        <Button
          title="go to About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    </View>
  )
};

const AboutScreen = () => {
  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Text>About Screen</Text>
      </View>
    </View>
  )
};


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerStyle:{
          BackgroundColor: '#009387',
        },
        headerTintColor:'green',
        headerTitleStyle:{
          fontWeight:'bold'
        }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;