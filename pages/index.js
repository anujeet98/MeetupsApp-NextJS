import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {id: 'm1', image: 'https://apnayatra.com/wp-content/uploads/2023/08/Gateway-of-India-Mumbai8.jpg', title: 'First Meetup', address: 'Gateway of India, Mumbai', description: 'This is the first meetup'},
    {id: 'm2', image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/07/Feature-Image-Radhanagar-Beach.jpg', title: 'Second Meetup', address: 'Radhanagar beach, Havelock Island', description: 'This is the second meetup'}
]

function HomePage(props){
    return <MeetupList meetups={props.meetups}></MeetupList>
}

//For static rendering(during build). below loads props, only for PAGES, Called first during the build process
export async function getStaticProps(){
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        }
    }
}
export default HomePage;