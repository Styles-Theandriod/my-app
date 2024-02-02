import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, in } from 'react-native';
import Splashscreen from './components/Splashscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Splashscreen/>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splashscreen" component={Splashscreen} options={{title:'Welcome'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
