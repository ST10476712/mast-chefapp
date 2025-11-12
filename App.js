import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { MenuProvider } from './MenuContext';
import CoursesScreen from './ScreenFive';
import AddDishScreen from './ScreenFour';
import WelcomeScreen from './ScreenOne';
import FilteredDishesScreen from './ScreenSix';
import ManageMenuScreen from './ScreenThree';
import ChefMenuScreen from './ScreenTwo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <MenuProvider>
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="ScreenOne">
          
          {/* Screen One: Welcome */}
          <Stack.Screen 
            name="ScreenOne" 
            component={WelcomeScreen} 
            options={{ headerShown: false }} 
          />
          
         
          <Stack.Screen 
            name="ScreenTwo" 
            component={ChefMenuScreen} 
            options={{ title: "Chef's Menu" }} 
          />
          
          
          <Stack.Screen 
            name="ScreenThree" 
            component={ManageMenuScreen} 
            options={{ title: 'Manage Menu' }} 
          />
          
          
          <Stack.Screen 
            name="ScreenFour" 
            component={AddDishScreen} 
            options={{ title: 'Add New Dish' }} 
          />
          
          
          <Stack.Screen 
            name="ScreenFive" 
            component={CoursesScreen} 
            options={{ title: 'Browse Courses' }} 
          />

         
          <Stack.Screen 
            name="ScreenSix" 
            component={FilteredDishesScreen}
            options={({ route }) => ({ 
                title: `Dishes: ${route.params.course}` 
            })} 
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}