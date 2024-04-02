import axios from 'axios';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

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
    return <NewMeetupForm onAddMeetup={addNewMeetup} />;
}

export default newMeetupPage;