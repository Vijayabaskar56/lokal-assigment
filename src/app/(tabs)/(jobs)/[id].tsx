import { useLocalSearchParams } from "expo-router";
import { Paragraph, Separator, Spinner, Text, View, XStack, YStack, ZStack } from "tamagui";
import { Banknote, BookOpen, Briefcase, Clock10, Heart,  MapPin, Sheet, UserCircle2, Users } from "@tamagui/lucide-icons";

import { Collapsible } from "@/components/Collabsables";
import IconText from "@/components/IconText";
import { useGetJobs } from "@/hooks/useGetJobs";
import { storage, useBookMark } from "@/store/async-store";
import { accentColor } from "@/utils/utils";

const JobDetailsView = () => {
  const { id } = useLocalSearchParams();
  const { bookmark, setBookmark } = useBookMark();
  const { data, isLoading } = useGetJobs();
  let CurrentJob;
  if (!isLoading && data) {
    CurrentJob = data?.pages?.map(page => page.results).flat().filter(jobs => {
      return jobs.id === parseInt(id as string);
    });
  }
  const job = CurrentJob && CurrentJob[0];
  const isBookMarked = storage.getNumber(`${job?.id}`) || true;


  return isLoading ?
    (<View flex={1} alignItems="center" justifyContent="center">
      <Spinner size="large" color="$accentColor" />
    </View>) :
    (<View flex={1} marginHorizontal='$3' marginVertical='$3'>
      <YStack marginVertical='$3'>
        <XStack justifyContent='space-between'>
          <Text color='$blue11Light' fontSize='$8' textAlign='left'>
            {job?.primary_details?.Job_Type}
          </Text>
          <ZStack top={0} left={-30} onPress={() => {
            setBookmark((prev: any) => {
              return [...prev, job?.id]
            })
            storage.set(`${job?.id}`, isBookMarked)
          }}>
            <Heart size={27} fill={bookmark.includes(job?.id) ? accentColor : "transparent"} />
          </ZStack>
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
            <Text>{job.other_details}</Text>
          </Collapsible>
        </XStack>
      }
    </View>)
}

export default JobDetailsView;
