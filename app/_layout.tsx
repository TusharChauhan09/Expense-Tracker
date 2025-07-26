import { Stack, Slot } from "expo-router";
import SafeScreenProvider from "@/providers/SafeScreenProvider";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { StatusBar } from "expo-status-bar";

export default function RootLayoutNav() {
  return (
    <SafeScreenProvider>
      <ClerkProvider
        tokenCache={tokenCache}
      >
        <Slot />
      </ClerkProvider>
      <StatusBar style="dark" />
    </SafeScreenProvider>
  );
}
