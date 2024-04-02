import axios from "axios";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props){
    return <MeetupList meetups={props.meetups}></MeetupList>
}

//For static rendering(during build). below loads props, only for PAGES, Called first during the build process
export async function getStaticProps(){
    let meetupsData = [];
    try{
        const res = await axios.get('http://localhost:3000/api/meetups');
        meetupsData = res.data.meetups;
    }
    catch(err){
        if(err.response && err.response.data)
            alert(err.response.data.message);
        console.log(err);
        return alert('error');
    }
    return {
        props: {
            meetups: meetupsData,
        },
        revalidate: 1,
    }
}
export default HomePage;