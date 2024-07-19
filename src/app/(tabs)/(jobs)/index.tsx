import { FlashList } from '@shopify/flash-list';
import { Spinner} from 'tamagui';

import { useGetJobs } from '@/hooks/useGetJobs';
import JobCard from '@/components/JobCard';
import { Alert } from 'react-native';
import { ToastAndroid } from 'react-native';



export default function HomeScreen() {
  const {data , isLoading  , error , refetch , hasNextPage , isFetching, fetchNextPage} = useGetJobs();
  const dataArr = data?.pages?.map(page => page.results).flat();

  const KeyExtractor = (_ : any, index: number) => index.toString();
  const item = {
    "id": 606376,
    "title": "Satyam Home Care Services wants nannies and ward boys for patient care, housework and cooking.",
    "type": 1009,
    "primary_details": {
      "Place": "Hyderabad",
      "Salary": "₹18000 - ₹25000+",
      "Job_Type": "ఆఫీస్ జాబ్ ",
      "Experience": "Less than 1 year",
      "Fees_Charged": "-1",
      "Qualification": "Not Required"
    },
    "fee_details": {
      "V3": []
    },
    "job_tags": [
      {
        "value": "40 Vacancies",
        "bg_color": "#E7F3FE",
        "text_color": "#0E56A8"
      }
    ],
    "job_type": 76,
    "job_category_id": 20,
    "qualification": 74,
    "experience": 80,
    "shift_timing": 78,
    "job_role_id": 931,
    "salary_max": 26000,
    "salary_min": 18000,
    "city_location": 2954,
    "locality": 48612,
    "premium_till": "2024-03-14T19:30:22+05:30",
    "content": "{\"block1\": \"\\u0c05\\u0c30\\u0c4d\\u0c39\\u0c24 : \\u0c05\\u0c35\\u0c38\\u0c30\\u0c02 \\u0c32\\u0c47\\u0c26\\u0c41 \", \"block2\": \"\\u0c09\\u0c26\\u0c4d\\u0c2f\\u0c4b\\u0c17 \\u0c30\\u0c15\\u0c2e\\u0c41: \\u0c06\\u0c2b\\u0c40\\u0c38\\u0c4d \\u0c1c\\u0c3e\\u0c2c\\u0c4d \\n\\u0c37\\u0c3f\\u0c2b\\u0c4d\\u0c1f\\u0c4d \\u0c1f\\u0c48\\u0c2e\\u0c4d: \\u0c1c\\u0c28\\u0c30\\u0c32\\u0c4d \\u0c37\\u0c3f\\u0c2b\\u0c4d\\u0c1f\\u0c41\", \"block3\": \" \\u0c07\\u0c24\\u0c30 \\u0c35\\u0c3f\\u0c35\\u0c30\\u0c3e\\u0c32\\u0c41: \\u0c1f\\u0c48\\u0c1f\\u0c3f\\u0c32\\u0c4d : \\u0c38\\u0c24\\u0c4d\\u0c2f\\u0c02  \\u0c39\\u0c4b\\u0c2e\\u0c4d  \\u0c15\\u0c47\\u0c30\\u0c4d \\u0c38\\u0c30\\u0c4d\\u0c35\\u0c40\\u0c38\\u0c46\\u0c38\\u0c4d \\u0c28\\u0c02\\u0c26\\u0c41 \\u0c2a\\u0c47\\u0c37\\u0c02\\u0c1f\\u0c4d \\u0c15\\u0c47\\u0c30\\u0c4d,\\u0c07\\u0c02\\u0c1f\\u0c3f,\\u0c35\\u0c02\\u0c1f \\u0c2a\\u0c28\\u0c3f \\u0c1a\\u0c47\\u0c2f\\u0c41\\u0c1f\\u0c15\\u0c41 \\u0c06\\u0c2f\\u0c3e\\u0c32\\u0c41 , \\u0c35\\u0c3e\\u0c30\\u0c4d\\u0c21\\u0c4d \\u0c2c\\u0c3e\\u0c2f\\u0c4d\\u0c38\\u0c4d \\u0c15\\u0c3e\\u0c35\\u0c32\\u0c46\\u0c28\\u0c41\\n\\u0c07\\u0c24\\u0c30 \\u0c35\\u0c3f\\u0c35\\u0c30\\u0c3e\\u0c32\\u0c41:\\u0c38\\u0c24\\u0c4d\\u0c2f\\u0c02     \\u0c39\\u0c4b\\u0c2e\\u0c4d \\u0c15\\u0c47\\u0c30\\u0c4d \\u0c32\\u0c4b \\u0c2a\\u0c46\\u0c26\\u0c4d\\u0c26\\u0c35\\u0c3e\\u0c30\\u0c3f\\u0c15\\u0c3f \\u0c38\\u0c47\\u0c35\\u0c32\\u0c41 \\u0c1a\\u0c47\\u0c2f\\u0c41\\u0c1f\\u0c15\\u0c41 \\u0c2a\\u0c47\\u0c37\\u0c02\\u0c1f\\u0c4d \\u0c15\\u0c47\\u0c30\\u0c4d , \\u0c07\\u0c02\\u0c1f\\u0c3f/\\u0c35\\u0c02\\u0c1f \\u0c2a\\u0c28\\u0c3f \\u0c1a\\u0c47\\u0c2f\\u0c41\\u0c1f\\u0c15\\u0c41 \\u0c06\\u0c2f\\u0c3e\\u0c32\\u0c41, \\u0c05\\u0c28\\u0c41\\u0c2d\\u0c35\\u0c02 \\u0c09\\u0c28\\u0c4d\\u0c28 \\u0c38\\u0c4d\\u0c24\\u0c4d\\u0c30\\u0c40\\u0c32\\u0c41 (\\u0c06\\u0c21\\u0c35\\u0c3e\\u0c33\\u0c4d\\u0c33\\u0c41) \\u0c15\\u0c3e\\u0c35\\u0c32\\u0c46\\u0c28\\u0c41. \\u0c0f\\u0c1c\\u0c46\\u0c02\\u0c1f\\u0c4d\\u0c38\\u0c4d \\u0c15\\u0c2e\\u0c3f\\u0c37\\u0c28\\u0c4d:5,000/-\\n\\u0c05\\u0c30\\u0c4d\\u0c39\\u0c24: \\u0c05\\u0c28\\u0c41\\u0c2d\\u0c35\\u0c02 \\u0c09\\u0c02\\u0c1f\\u0c47 \\u0c1a\\u0c3e\\u0c32\\u0c41.\\n\\u0c0e\\u0c1f\\u0c41\\u0c35\\u0c02\\u0c1f\\u0c3f \\u0c2b\\u0c40\\u0c1c\\u0c41 \\u0c1a\\u0c46\\u0c32\\u0c4d\\u0c32\\u0c3f\\u0c02\\u0c1a\\u0c28\\u0c35\\u0c38\\u0c30\\u0c02 \\u0c32\\u0c47\\u0c26\\u0c41\\n\\u0c16\\u0c3e\\u0c33\\u0c40\\u0c32\\u0c41 :200\\n\\u0c1c\\u0c40\\u0c24\\u0c02:18,000/-25,000/- \\u0c35\\u0c30\\u0c15\\u0c41 \\u0c07\\u0c35\\u0c4d\\u0c35\\u0c2c\\u0c21\\u0c41\\u0c28\\u0c41\\n\\u0c05\\u0c28\\u0c41\\u0c2d\\u0c35\\u0c02:\\u0c0f\\u0c26\\u0c48\\u0c28\\u0c3e \\n\\u0c05\\u0c21\\u0c4d\\u0c30\\u0c38\\u0c4d:\\u0c15\\u0c42\\u0c15\\u0c1f\\u0c4d \\u0c2a\\u0c32\\u0c4d\\u0c32\\u0c3f \\n\\u0c2e\\u0c30\\u0c3f\\u0c28\\u0c4d\\u0c28\\u0c3f \\u0c35\\u0c3f\\u0c35\\u0c30\\u0c3e\\u0c32\\u0c15\\u0c41 \\u0c15\\u0c4d\\u0c30\\u0c3f\\u0c02\\u0c26\\u0c3f \\u0c09\\u0c28\\u0c4d\\u0c28 \\u0c15\\u0c3e\\u0c32\\u0c4d \\u0c2c\\u0c1f\\u0c28\\u0c4d \\u0c15\\u0c4d\\u0c32\\u0c3f\\u0c15\\u0c4d \\u0c1a\\u0c46\\u0c2f\\u0c4d\\u0c2f\\u0c02\\u0c21\\u0c3f\"}",
    "company_name": "Satyam Home Care Services",
    "advertiser": 693717,
    "button_text": "📞 Call HR ",
    "custom_link": "tel:6302532832",
    "amount": "4916.70",
    "views": 25376,
    "shares": 0,
    "fb_shares": 83,
    "is_bookmarked": false,
    "is_applied": false,
    "is_owner": false,
    "updated_on": "2024-03-13T19:30:30.145646+05:30",
    "whatsapp_no": "6302532832",
    "contact_preference": {
      "preference": 1,
      "whatsapp_link": "https://wa.me/916302532832?text=Hi%2C+I+am+interested+to+apply+on+the+job+opening+for+%E0%B0%B8%E0%B0%A4%E0%B1%8D%E0%B0%AF%E0%B0%82+++%E0%B0%B9%E0%B1%8B%E0%B0%AE%E0%B1%8D+%E0%B0%95%E0%B1%87%E0%B0%B0%E0%B1%8D+%E0%B0%B8%E0%B0%B0%E0%B1%8D%E0%B0%B5%E0%B1%80%E0%B0%B8%E0%B1%86%E0%B0%B8%E0%B1%8D+%E0%B0%A8%E0%B0%82%E0%B0%A6%E0%B1%81++%E0%B0%AA%E0%B1%87%E0%B0%B7%E0%B0%82%E0%B0%9F%E0%B1%8D+%E0%B0%95%E0%B1%87%E0%B0%B0%E0%B1%8D%2C%E0%B0%87%E0%B0%82%E0%B0%9F%E0%B0%BF%2C%E0%B0%B5%E0%B0%82%E0%B0%9F+%E0%B0%AA%E0%B0%A8%E0%B0%BF+%E0%B0%9A%E0%B1%87%E0%B0%AF%E0%B1%81%E0%B0%9F%E0%B0%95%E0%B1%81+%E0%B0%86%E0%B0%AF%E0%B0%BE%E0%B0%B2%E0%B1%81+%2C+%E0%B0%B5%E0%B0%BE%E0%B0%B0%E0%B1%8D%E0%B0%A1%E0%B1%8D+%E0%B0%AC%E0%B0%BE%E0%B0%AF%E0%B1%8D%E0%B0%B8%E0%B1%8D+%E0%B0%95%E0%B0%BE%E0%B0%B5%E0%B0%B2%E0%B1%86%E0%B0%A8%E0%B1%81+that+you+posted+on+the+Lokal+app.",
      "preferred_call_start_time": "08:00",
      "preferred_call_end_time": "20:00"
    },
    "created_on": "2024-03-12T11:01:31.842180+05:30",
    "is_premium": true,
    "creatives": [
      {
        "file": "https://media.getlokalapp.com/classified_images/606376/606376_411e9452730aa77ccb17642734b7995f.jpg",
        "thumb_url": "https://creatives.getlokalapp.com/cache/e2/77/e277823ddb606daca9b148b786a5de3e.jpg",
        "creative_type": 1
      }
    ],
    "videos": [],
    "locations": [
      {
        "id": 4,
        "locale": "te",
        "state": -10
      }
    ],
    "tags": [],
    "contentV3": {
      "V3": [
        {
          "field_key": "Job Category",
          "field_name": "జాబ్ కేటగిరి",
          "field_value": "మెడికల్ / డాక్టర్"
        },
        {
          "field_key": "Gender",
          "field_name": "జెండర్ ఎంచుకోండి",
          "field_value": "Any Gender"
        },
        {
          "field_key": "Shift timing",
          "field_name": "షిఫ్ట్ టైమ్",
          "field_value": "Day Shift"
        },
        {
          "field_key": "Other details",
          "field_name": " ఇతర వివరాలు",
          "field_value": "టైటిల్ : సత్యం  హోమ్  కేర్ సర్వీసెస్ నందు పేషంట్ కేర్,ఇంటి,వంట పని చేయుటకు ఆయాలు , వార్డ్ బాయ్స్ కావలెను\r\nఇతర వివరాలు:సత్యం     హోమ్ కేర్ లో పెద్దవారికి సేవలు చేయుటకు పేషంట్ కేర్ , ఇంటి/వంట పని చేయుటకు ఆయాలు, అనుభవం ఉన్న స్త్రీలు (ఆడవాళ్ళు) కావలెను. ఏజెంట్స్ కమిషన్:5,000/-\r\nఅర్హత: అనుభవం ఉంటే చాలు.\r\nఎటువంటి ఫీజు చెల్లించనవసరం లేదు\r\nఖాళీలు :200\r\nజీతం:18,000/-25,000/- వరకు ఇవ్వబడును\r\nఅనుభవం:ఏదైనా \r\nఅడ్రస్:కూకట్ పల్లి \r\nమరిన్ని వివరాలకు క్రింది ఉన్న కాల్ బటన్ క్లిక్ చెయ్యండి"
        }
      ]
    },
    "status": 1,
    "expire_on": "2024-04-21T11:01:31.823015+05:30",
    "job_hours": "Full time",
    "openings_count": 40,
    "job_role": "Care Takers",
    "other_details": "Title : Satyam Home Care Services Wanted Nurses, Ward Boys for Patient Care, Housekeeping, Cooking\r\nOther Details: Satyam Home Care requires experienced women (females) to provide patient care, home/cooking work for elderly. Agents Commission: 5,000/-\r\nEligibility: Experience is sufficient.\r\nNo fee is required\r\nVacancies : 200\r\nSalary: 18,000/- upto 25,000/- will be given\r\nExperience: Any\r\nAddress: Kookat Palli\r\nClick the call button below for more details",
    "job_category": "Medical/ Doctor",
    "num_applications": 194,
    "enable_lead_collection": true,
    "is_job_seeker_profile_mandatory": true,
    "translated_content": {

    },
    "job_location_slug": "Hyderabad",
    "fees_text": "",
    "question_bank_id": null,
    "screening_retry": null,
    "should_show_last_contacted": true,
    "fees_charged": 87
  }
  const renderItem = ({ item } : any) => <JobCard item={item} />
  const onEndReached = () => {
    if(hasNextPage && !isLoading){
      fetchNextPage();
  }
}

const renderFooter = () => {
  if (isFetching) {
    return <Spinner size="large" color="$accentColor" />;
  }
  return null;
};

if(error) {
  ToastAndroid.show("Something Went Wrong", ToastAndroid.BOTTOM);
}

  return (
    // <JobCard item={item} />
    <FlashList
      data={dataArr}
      renderItem={renderItem}
      keyExtractor={KeyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      onRefresh={refetch}
      refreshing={isFetching || isLoading}
      ListFooterComponent={renderFooter}
      estimatedItemSize={200}
      />
  );
}
