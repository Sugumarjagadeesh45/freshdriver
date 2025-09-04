// ADD THIS AT THE VERY TOP - MUST BE FIRST IMPORT
import 'react-native-get-random-values';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import ChooseLocation from './src/Screens/ChooseLocation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
        <Stack.Screen 
          name="chooseLocation" 
          component={ChooseLocation} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import FlashMessage from 'react-native-flash-message';

// //Screens
// import ChooseLocation from './src/Screens/ChooseLocation';
// import Home from './src/Screens/Home';


// const App = () => {
//   const Stack = createStackNavigator()

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="home" component={Home} />
//         <Stack.Screen name="chooseLocation" component={ChooseLocation} />
//       </Stack.Navigator>
//       <FlashMessage
//         position="top"
//       />
//     </NavigationContainer>
//   );
// };

// export default App;
