import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./DrawerNavigator";

import MealDetailScreen from "../screens/MealDetailScreen";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Stack.Screen
        name='Drawer'
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
      <Stack.Screen
        name='MealDetail'
        component={MealDetailScreen}
        options={{
          title: "About the Meal",
        }}
      />
    </Stack.Navigator>
  );
}
