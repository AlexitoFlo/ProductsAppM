import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

import { TamaguiProvider } from 'tamagui'

import config from '../tamagui.config'

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3B5249",
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Ionicons name="ios-settings-outline" size={22} color="white" />
            </Link>
          ),
        }}
      />
    </TamaguiProvider>
  );
}
