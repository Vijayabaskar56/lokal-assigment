import { Link } from "expo-router";
import { Button, ButtonProps, Text } from "tamagui";

type StyledButtonProps = {
  content: string;
  deepLinkUrl: string;
} & ButtonProps;

const StyledButton = ({
  content,
  deepLinkUrl,
  ...props
}: StyledButtonProps) => {

  return (
    <Link href={deepLinkUrl ?? ''}>
      <Button {...props} borderColor='$accentColor' borderRadius='$1' width='$12' disabled >
        <Text>{content}</Text>
      </Button>
    </Link>
  );
};

export default StyledButton;