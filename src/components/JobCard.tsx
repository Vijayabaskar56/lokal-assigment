import { ArrowRight, BookOpen, Briefcase, Clock4, Heart, MapPin, MessageCircle } from '@tamagui/lucide-icons';
import React from 'react';
import { Image } from 'react-native';
import { Card, H6, Paragraph, Separator, View, XStack, YStack, ZStack } from 'tamagui';
import StyledButton from './StyledButton';

const JobCard = ({ item }: { item: any }) => {
  console.log(item, 'item');

  return (
    <View>
      <Card elevate size="$4" bordered
        animation="medium"
        width={400}
        height={400}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}>
        <Card.Header padded>
          <XStack gap='$3'>
            <YStack>
              <Image
                src={item?.creatives?.file}
                style={{ width: 120, height: 120 }}
                width={130}
                height={130}
              />
              <View width='$10' backgroundColor='$backgroundHover' borderRadius='$7' >
                <Paragraph fontWeight='bold' theme="alt1" textAlign='center' color='$red10Dark' padding='$1'>Now available</Paragraph>
              </View>
            </YStack>
            <YStack>
              <Paragraph textAlign='center'>
                {item?.primary_details?.Job_Type}
                <ArrowRight size={17} />
              </Paragraph>
              <Paragraph theme="dark">{item?.primary_details?.company_name}</Paragraph>
              <Paragraph theme="alt2">{item?.title}</Paragraph>
              <Paragraph theme="alt2">{`${item?.salary_max} - ${item?.salary_min}`}</Paragraph>
            </YStack>
            <ZStack>
              <Heart size={20} top={10} left={100} />
            </ZStack>
          </XStack>
        </Card.Header>
        <Separator />
        <Card.Footer padded flex={1}>
          <XStack width={350} justifyContent='flex-start'>
            <YStack width={320} justifyContent='space-evenly' alignItems='flex-start' margin='$3' alignSelf='stretch' >
              <XStack width='100%' justifyContent='space-between' alignItems='center' alignSelf='center'>
                <YStack>
                  <XStack>
                    <MapPin size={20} />
                    <H6>{item?.primary_details?.Place}</H6>
                  </XStack>
                  <XStack>
                    <Briefcase size={20} />
                    <H6>{item?.job_hours}</H6>
                  </XStack>
                </YStack>
                <Separator vertical />
                <YStack>
                  <XStack>
                    <Clock4 size={20} />
                    <H6>{item?.primary_details?.Experience}</H6>
                  </XStack>
                  <XStack>
                    <BookOpen size={20} />
                    <H6>{item?.primary_details?.Qualification}</H6>
                  </XStack>
                </YStack>
              </XStack>
              <XStack width="100%" justifyContent='space-between'>
                <StyledButton content='Chat' variant='outlined' iconAfter={() => {
                  return <MessageCircle size={20} />;
                }} deepLinkUrl={item?.contact_preference?.whatsapp_link} />
                <StyledButton content={item?.button_text} backgroundColor='$accentColor' deepLinkUrl={item?.custom_link} />
              </XStack>
            </YStack>
          </XStack>
        </Card.Footer>
      </Card>
    </View>
  );
}


export default JobCard;
