import React from 'react';
import ArticlesIndex from './src/components/ArticlesIndex'
import AboutUs from './src/components/AboutUs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ArticlesIndex'
          component={ArticlesIndex}
          options={
            () => ({
              headerStyle: {
                backgroundColor: 'grey'
              },
              title: "Custom title"
            })
          }
        />
        <Stack.Screen
          name='AboutUs'
          component={AboutUs}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App
