import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function newMeetupPage(){
    const addNewMeetup = (meetupData) => {
        console.log(meetupData);
    }
    return <NewMeetupForm onAddMeetup={addNewMeetup} />;
}

export default newMeetupPage;