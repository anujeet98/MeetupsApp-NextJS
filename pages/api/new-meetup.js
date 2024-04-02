
//api route url /api/new-meetup POST
import { MongoClient } from 'mongodb'

async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
        // const {title, image, address, description} = data;

        try{
            const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
            const db = client.db();
    
            const meetupsCollection = db.collection('meetups');
            const result = await meetupsCollection.insertOne(data);
    
            client.close();
    
            res.status(200).json({message: 'meetup inserted'});
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: 'something went wrong while creating a new meetup'});
        }
    }
}

export default handler;