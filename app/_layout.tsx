import { Stack } from "expo-router";
import './globals.css';
import {SCREEN_ORIENTATION_ATTRIBUTE} from "@expo/config-plugins/build/android/Orientation";
export default function RootLayout() {
  return <Stack>
      <Stack.Screen
          name="(tabs)"
          options={{headerShown: false}}
      />
      <Stack.Screen
          name="movie/[id"
          options={{headerShown: false}}
      />
  </Stack>
}
