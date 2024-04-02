import { useRouter } from "next/router";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage () {
    const DUMMY_MEETUPS = [
        {id: 1, image: 'https://apnayatra.com/wp-content/uploads/2023/08/Gateway-of-India-Mumbai8.jpg', title: 'First Meetup', address: 'Gateway of India, Mumbai', description: 'This is the first meetup'},
        {id: 2, image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/07/Feature-Image-Radhanagar-Beach.jpg', title: 'Second Meetup', address: 'Radhanagar beach, Havelock Island', description: 'This is the second meetup'}
    ];
    const meetupId = useRouter().query.meetupId;
    const meetupData = DUMMY_MEETUPS[meetupId-1];
    return <MeetupDetails title={meetupData.title} image={meetupData.image} address={meetupData.address} description={meetupData.description}/>;
}
export default MeetupDetailsPage;   