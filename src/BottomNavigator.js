import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Project_1 from './Project_1';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#E5E6E7' }}
    >
      <Tab.Screen
        name="Project 1"
        component={Project_1}
        options={{
          tabBarLabel: 'Project 1',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Project 2"
        component={Project_1}
        options={{
          tabBarLabel: 'Project 2',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Project 3"
        component={Project_1}
        options={{
          tabBarLabel: 'Project 3',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Project 4"
        component={Project_1}
        options={{
          tabBarLabel: 'Project 4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Project 5"
        component={Project_1}
        options={{
          tabBarLabel: 'Project 4',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Project 6"
        component={Project_1}
        options={{
          tabBarLabel: 'Project 6',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default BottomNavigator;