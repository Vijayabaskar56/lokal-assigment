import { Stack } from "expo-router";
import { View } from "tamagui";

const EditProfileLayout = () => {
  return (
    <View flex={1}>
      <Stack screenOptions={{headerShown : false}}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Jobs",
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};

export default EditProfileLayout;
