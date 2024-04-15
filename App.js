import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/BottomNavigator';
import DrawerNavigator from './src/DrawerNavigator';
import 'react-native-gesture-handler';



export default function App() {

  const board = [
    ["R","N","B","Q","K","B","N","R"],
    ["P","P","P","P","P","P","P","P"],
    //... more arrays
  ];
  
  return (
    <NavigationContainer>
      <DrawerNavigator />


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
