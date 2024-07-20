import { Spinner, View } from "tamagui";

const Loader = () => {
 return (
  <View flex={1} alignItems="center" justifyContent="center">
  <Spinner size="large" color="$accentColor" />
</View>
 );
}

export default Loader;
