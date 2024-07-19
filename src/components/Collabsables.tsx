import { accentColor } from '@/utils/utils';
import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity, useColorScheme } from 'react-native';
import { Text, View, XStack } from 'tamagui';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
 const [isOpen, setIsOpen] = useState(false);
 const theme = useColorScheme() ?? 'light';

 return (
  <View>
   <XStack width='100%' gap='$2' justifyContent='space-between' alignItems='center' onPress={() => setIsOpen((value) => !value)}>
    <Text  fontSize='$6' wordWrap="break-word" fontWeight='bold'>{title}</Text>
    <TouchableOpacity
     onPress={() => setIsOpen((value) => !value)}
     activeOpacity={0.8}>
     <Ionicons
      name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
      size={18}
      color={accentColor} />
    </TouchableOpacity>
   </XStack>
   {isOpen && <View>{children}</View>}
  </View>
 );
}
