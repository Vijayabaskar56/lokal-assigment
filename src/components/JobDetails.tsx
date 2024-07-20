import { Banknote, BookOpen, Briefcase, Clock10, Heart, Sheet, MapPin, UserCircle2, Users, MessageCircle } from "@tamagui/lucide-icons";
import { Paragraph, Separator, Text, View, XStack, YStack, ZStack } from "tamagui";
import IconText from "./IconText";
import { Collapsible } from "./Collabsables";
import StyledButton from "./StyledButton";
import { ScrollView } from "tamagui";



const JobDetails = ({ job, bookmark, setBookmark }: {
 job: any;
 bookmark: number[] | undefined;
 setBookmark: any
}) => {


 return (
  <View flex={1} marginHorizontal='$3' marginVertical='$3' justifyContent="space-between">
   <View flex={1}>
    <YStack marginVertical='$3'>
     <XStack justifyContent='space-between'>
      <Text color='$blue11Light' fontSize='$8' textAlign='left'>
       {job?.primary_details?.Job_Type}
      </Text>
     </XStack>
     <>
      <Paragraph fontWeight='900' size='$6'>{job?.company_name ?? ""}</Paragraph>
      <Paragraph theme="alt1" numberOfLines={3} >{job && job?.title}</Paragraph>
      <Paragraph theme="alt1" color='$green10Dark' fontWeight='bold'>
       {job.salary_max && job.salary_min && `₹ ${job && job?.salary_max} - ₹ ${job?.salary_min}`}
      </Paragraph>
     </>
     <View width='$10' backgroundColor='$backgroundHover' borderRadius='$7'>
      <Paragraph fontWeight='bold' theme="alt1" textAlign='center' padding='$1'>{job && job?.job_tags && job?.job_tags[0]?.value}</Paragraph>
     </View>
    </YStack>
    <Separator />
    <Text fontWeight='bold' fontSize='$7'>Job Description</Text>
    <XStack gap='$4' justifyContent="flex-start" alignItems="center" alignSelf="stretch" marginVertical='$3'>
     <YStack gap='$4'>
      <IconText content="Living Place" Icon={<MapPin size={20} />}>
       <Text fontSize='$5' wordWrap="break-word" >{job?.primary_details?.Place}</Text>
      </IconText>
      <IconText content="Experience" Icon={<Briefcase size={20} />}>
       <Text fontSize='$5' wordWrap="break-word" >{job?.primary_details?.Experience}</Text>
      </IconText>
      <IconText content="Job Hours" Icon={<Clock10 size={20} />}>
       <Text fontSize='$5' wordWrap="break-word" >{job?.job_hours}</Text>
      </IconText>
      <IconText content={job.contentV3.V3[1].field_key} Icon={<UserCircle2 size={20} />}>
       <Text fontSize='$5' wordWrap="break-word" >{job.contentV3.V3[1].field_value}</Text>
      </IconText>
     </YStack>
     <YStack gap='$4'>
      <IconText content="Salary" Icon={<Banknote size={20} />}>
       <Text fontSize='$5' wordWrap="break-word" >{job?.primary_details?.Salary}</Text>
      </IconText>
      <IconText content={job?.job_hours} Icon={<BookOpen size={20} />}>
       <Text fontSize='$5' wordWrap="break-word" >{job?.primary_details?.Qualification}</Text>
      </IconText>
      <IconText content={job.contentV3.V3[2].field_key} Icon={<Sheet size={20} />}>
       <Text fontSize='$5' wordWrap="break-word" >{job.contentV3.V3[2].field_value}</Text>
      </IconText>
      <IconText content="Vacancies" Icon={<Users size={20} />}>
       <Text fontSize='$5' wordWrap="break-word" >{job?.openings_count}</Text>
      </IconText>
     </YStack>
    </XStack>
    <Separator />
    <Separator />
    {
     job.other_details &&
     <XStack flex={0.5}>
      <Collapsible title="Additional Details">
       <ScrollView>
        <Text>{job.other_details}</Text>
       </ScrollView>
      </Collapsible>
     </XStack>
    }
   </View>
   <XStack width="100%" justifyContent='space-around' position="relative">
    <StyledButton content='Chat' variant='outlined' iconAfter={() => {
     return <MessageCircle size={20} />;
    }} deepLinkUrl={job && job?.contact_preference && job?.contact_preference?.whatsapp_link} />
    <StyledButton content={job && job?.button_text} backgroundColor='$accentColor' deepLinkUrl={job && job?.custom_link} />
   </XStack>
  </View>
 );
}


export default JobDetails;
