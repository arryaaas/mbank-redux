import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { restoreToken } from "../redux/actions/authAction";
import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const isLogout = useSelector((store) => store.authReducer.isLogout);
  const userToken = useSelector((store) => store.authReducer.userToken);

  useEffect(() => {
    const getUserToken = setTimeout(() => {
      const userToken = null;
      dispatch(restoreToken(userToken));
    }, 3000);
    return () => clearTimeout(getUserToken);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {isLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : userToken === null ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              animationTypeForReplace: isLogout ? "pop" : "push",
            }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
