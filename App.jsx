import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./navigators/StackNavigator";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}
