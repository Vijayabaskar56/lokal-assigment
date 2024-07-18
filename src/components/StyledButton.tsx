import { Link } from "expo-router";
import { Linking } from "react-native";
import { Button, ButtonProps, Text } from "tamagui";

type StyledButtonProps = {
  content: string;
  deepLinkUrl: string;
} & ButtonProps; // This line combines your custom props with ButtonProps

const StyledButton = ({
  content,
  deepLinkUrl,
  ...props
}: StyledButtonProps) => {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(deepLinkUrl);
    if (supported) {
      await Linking.openURL(deepLinkUrl);
    } else {
      console.error("Don't know how to open this URL: " + deepLinkUrl);
    }
  }

  // Add your navigation
  return (
    <Button {...props} borderColor='$accentColor' borderRadius='$1' width='$12' onPress={handlePress}>
      <Link href={deepLinkUrl ?? ''}>
      <Text>{content}</Text>
      </Link>
    </Button>
  );
};

export default StyledButton;