// In order to provide safe work area and avoide notches
import { COLORS } from "@/constants/colors"
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const isnets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: isnets.top,
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreenProvider;
