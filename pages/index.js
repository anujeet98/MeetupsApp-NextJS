import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

function HomePage(props){
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Meet, Greet and Enjoy random Meetups!" />
            </Head>
            <MeetupList meetups={props.meetups}></MeetupList>
        </Fragment>
    )
}

//For static rendering(during build). below loads props, only for PAGES, Called first during the build process
export async function getStaticProps(){
    let meetupsData = [];
    try{
        const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        meetupsData = await meetupsCollection.find().toArray();
        client.close();
    }
    catch(err){
        console.log(err);
    }
    return {
        props: {
            meetups: meetupsData.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                decription: meetup.description,
            })),
        },
        revalidate: 1,
    }
}
export default HomePage;