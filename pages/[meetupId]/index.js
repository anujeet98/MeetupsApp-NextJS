import { useRouter } from "next/router";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage (props) {
    // const meetupId = useRouter().query.meetupId;
    // const meetupData = DUMMY_MEETUPS[meetupId-1];
    return <MeetupDetails title={props.meetupData.title} image={props.meetupData.image} address={props.meetupData.address} description={props.meetupData.description} />
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            },
            {
                params: {
                    meetupId: 'm3',
                }
            }
        ]
    }
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return {
        props:{
            meetupData: {
                id: meetupId,
                title: 'First Meetup',
                image: 'https://apnayatra.com/wp-content/uploads/2023/08/Gateway-of-India-Mumbai8.jpg',
                address: 'Gateway of India, Mumbai',
                description: 'This is the first meetup',
            }
        }
    }
}
export default MeetupDetailsPage;   