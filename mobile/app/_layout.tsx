import { Stack, Slot } from "expo-router";
import SafeScreenProvider from "@/providers/SafeScreenProvider";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

function RootLayoutNav() {
  return (
    <SafeScreenProvider>
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
        <Slot />
    </ClerkProvider>
      </SafeScreenProvider>
  );
}
