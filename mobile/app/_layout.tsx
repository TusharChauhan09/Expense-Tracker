import { Stack, Slot } from "expo-router";
import SafeScreenProvider from "@/providers/SafeScreenProvider";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function RootLayoutNav() {
  return (
    <SafeScreenProvider>
      <ClerkProvider
        tokenCache={tokenCache}
      >
        <Slot />
      </ClerkProvider>
    </SafeScreenProvider>
  );
}
