import { Stack } from "expo-router";
import { View } from "tamagui";

const EditProfileLayout = () => {
  // console.log(session);
  return (
    <View flex={1}>
      <Stack screenOptions={{headerShown : false}}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Cart",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="address"
          options={{
            headerTitle: "Address",
          }}
          />
      </Stack>
    </View>
  );
};

export default EditProfileLayout;
