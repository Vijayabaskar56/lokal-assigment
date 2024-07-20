import { Stack } from "expo-router";
import { View } from "tamagui";

const BookMarkLayout = () => {
  return (
    <View flex={1}>
      <Stack screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "BookMarks",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            headerTitle: "",
          }}
        />
      </Stack>
    </View>
  );
};

export default BookMarkLayout;
