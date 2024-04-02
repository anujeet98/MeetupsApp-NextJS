import axios from 'axios';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Fragment } from 'react';

function newMeetupPage(){
    const router = useRouter();
    const addNewMeetup = async(meetupData) => {
        try{
            const res = await axios.post('http://localhost:3000/api/new-meetup', meetupData);
            alert(res.data.message);
            router.push('/');
        }
        catch(err){
            if(err.response && err.response.data){
                alert(err.response.data.message)
            }
        }
    }
    return (
        <Fragment>
            <Head>
                <title>Add a new meetup</title>
                <meta name="description" content="Meet new people by creating your own meetup" />
            </Head>
            <NewMeetupForm onAddMeetup={addNewMeetup} />;
        </Fragment>
    );
}

export default newMeetupPage;