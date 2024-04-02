import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage (props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetails title={props.meetupData.title} image={props.meetupData.image} address={props.meetupData.address} description={props.meetupData.description} />
        </Fragment>
    ); 
}

export async function getStaticPaths(){
    let meetups = [];
    try{
        const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
        client.close();
    }
    catch(err){
        console.log(err);
    }
    return {
        fallback: true,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context){
    let meetup = {};
    try{
        const meetupId = context.params.meetupId;
        console.log(meetupId);

        const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        meetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});
        client.close();
    }
    catch(err){
        console.log(err);
    }
    return {
        props:{
            meetupData: {
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                description: meetup.description,
            }
        }
    }
}
export default MeetupDetailsPage;   