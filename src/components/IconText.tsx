import { Text,  View, XStack } from "tamagui";

const IconText = ({
 content,
 Icon,
 children
}: {
 content: string;
 Icon: React.ReactNode;
 children?: React.ReactNode;
}) => {
 return (
  <View>
   <XStack gap='$2' marginVertical='$1'>
    {Icon}
    <Text fontSize='$3' color='$gray11Light' >{content}</Text>
   </XStack>
    {children}
  </View>
 );
}


export default IconText;
