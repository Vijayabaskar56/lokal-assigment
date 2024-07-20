import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from 'tamagui';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View flex={1} alignItems='center' justifyContent='center' padding='$7'>
        <Link href="/" style={styles.link}>
          <Text>404 Not Found</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
