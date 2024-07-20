import React from 'react';
import { Image } from 'react-native';
import { Link,  usePathname } from 'expo-router';
import { Card, Paragraph, Separator, View, XStack, YStack, ZStack } from 'tamagui';
import {  BookOpen, Briefcase, Clock4, Heart, MapPin, MessageCircle } from '@tamagui/lucide-icons';

import StyledButton from './StyledButton';
import IconText from './IconText';
import { useBookMark } from '@/store/bookmark-store';
import { handleBookmark } from '@/utils/handleBookmark';

const JobCard = React.memo(({ item }: { item: any }) => {
  const {bookmark , setBookmark} = useBookMark();
  const path = usePathname();

  return item.id && (
    <View>
      <Card elevate bordered
        width={400}
        height={360}
        borderRadius='$0'
        shadowOffset='unset'
        shadowOpacity='unset'
        shadowRadius='$0'
        shadowColor='unset'
        componentName='JobCard'
      >
        <Link href={{
          pathname: path !== '/' ? `${path}/[id]` : '/[id]',
          params: { id: item?.id },
        }}>
          <Card.Header padded flex={3}>
            <XStack gap='$3'>
              <YStack gap='$2'>
                <Image
                  src={item && item?.creatives && item?.creatives[0]?.thumb_url || 'https://testapi.getlokalapp.com/static/images/favicon.png'}
                  style={{ width: 120, height: 120 }}
                  width={130}
                  height={130}
                />
                <View width='$10' backgroundColor='$backgroundHover' borderRadius='$7'>
                  <Paragraph fontWeight='bold' theme="alt1" textAlign='center' padding='$1'>{item && item?.job_tags && item?.job_tags[0]?.value}</Paragraph>
                </View>
              </YStack>
              <YStack>
                <XStack justifyContent='space-between'>
                  <Paragraph theme='dark_Button' color='$blue11Light' textAlign='left'>
                    {item?.primary_details?.Job_Type} →
                  </Paragraph>
                </XStack>
                <Paragraph theme="alt1" fontWeight='700'>{item && item?.company_name}</Paragraph>
                <Paragraph theme="alt1" maxWidth='$17' numberOfLines={2} >{item && item?.title}</Paragraph>
                <Paragraph theme="alt1" color='$green10Dark' fontWeight='bold'>{item.salary_max && item.salary_min && `₹ ${item && item?.salary_max} - ₹ ${item?.salary_min}`}</Paragraph>
              </YStack>
            </XStack>
              <ZStack top={-160} left={330} onPress={() => handleBookmark(setBookmark , item)}>
                  <Heart size={27}  fill={bookmark?.includes(item?.id) ? "red" : "transparent"} />
              </ZStack>
          </Card.Header>
          <View flex={1}>
          <Separator flex={1} />
          </View>
          <Card.Footer padded flex={2}>
            <XStack width={350} justifyContent='flex-start'>
              <YStack width={320} justifyContent='space-evenly' alignItems='flex-start' margin='$3' alignSelf='stretch' gap='$5' >
                <XStack width='100%' justifyContent='space-between' alignItems='center' alignSelf='center'>
                  <YStack gap='$2'>
                    <IconText content={item && item?.primary_details && item?.primary_details?.Place} Icon={<MapPin size={20} />
                    } />
                    <IconText content={item?.job_hours} Icon={<Briefcase size={20} />
                    } />
                  </YStack>
                  <YStack gap='$2'>
                    <IconText content={item && item?.primary_details && item?.primary_details?.Experience} Icon={<Clock4 size={20} />
                    } />
                    <IconText content={item && item?.primary_details && item?.primary_details?.Qualification} Icon={<BookOpen size={20} />} />
                  </YStack>
                </XStack>
                <XStack width="100%" justifyContent='space-between'>
                  <StyledButton content='Chat' variant='outlined' iconAfter={() => {
                    return <MessageCircle size={20} />;
                  }} deepLinkUrl={item && item?.contact_preference && item?.contact_preference?.whatsapp_link} />
                  <StyledButton content={item && item?.button_text} backgroundColor='$accentColor' deepLinkUrl={item && item?.custom_link} />
                </XStack>
              </YStack>
            </XStack>
          </Card.Footer>
        </Link>
      </Card>
    </View>
  );
})


export default JobCard;
