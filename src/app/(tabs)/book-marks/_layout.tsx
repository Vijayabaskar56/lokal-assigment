import { Stack } from "expo-router";
import { View } from "tamagui";

const BookMarkLayout = () => {
  return (
    <View flex={1}>
      <Stack screenOptions={{headerShown : true}}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "BookMarks",
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};

export default BookMarkLayout;
