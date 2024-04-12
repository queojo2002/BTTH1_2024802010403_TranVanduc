import { createDrawerNavigator } from '@react-navigation/drawer';
import Project_1 from './Project_1';
import Project_2 from './Project_2';
import Project_3 from './Project_3';
import Project_4 from './Project_4';
import Project_5 from './Project_5';
import Project_6 from './Project_6';
import Project_7 from './Project_7';
import Project_8 from './Project_8';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Project 1"
        component={Project_1}
        options={{ drawerLabel: 'Project 1' }}
      />
      
      <Drawer.Screen
        name="Project 2"
        component={Project_2}
        options={{ drawerLabel: 'Project 2' }}
      />

    <Drawer.Screen
        name="Project 3"
        component={Project_3}
        options={{ drawerLabel: 'Project 3' }}
      />

    <Drawer.Screen
        name="Project 4"
        component={Project_4}
        options={{ drawerLabel: 'Project 4' }}
      />

    <Drawer.Screen
        name="Project 5"
        component={Project_5}
        options={{ drawerLabel: 'Project 5' }}
      />

    <Drawer.Screen
        name="Project 6"
        component={Project_6}
        options={{ drawerLabel: 'Project 6' }}
      />

    <Drawer.Screen
        name="Project 7"
        component={Project_7}
        options={{ drawerLabel: 'Project 7' }}
      />


    <Drawer.Screen
        name="Project 8"
        component={Project_8}
        options={{ drawerLabel: 'Project 8' }}
      />


    </Drawer.Navigator>
  );
}
export default DrawerNavigator;