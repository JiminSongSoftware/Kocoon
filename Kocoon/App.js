import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthFlow from './src/navigations/AuthFlow';
import MainFlow from './src/navigations/MainFlow';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* login flow */}
      <Stack.Navigator>
        <Stack.Screen 
          name='AuthFlow'
          component={AuthFlow}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name='MainFlow'
          component={MainFlow}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
      {/* main flow */}
      {/* <Stack.Navigator>
        
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
