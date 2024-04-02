// api route /api/meetups

import { MongoClient } from "mongodb";

async function handler(req, res){
    try{
        const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const meetupsData = await meetupsCollection.find().toArray();

        client.close();
        res.status(200).json({'meetups': meetupsData});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: 'something went wrong while fetching meetups'});
    }   
}

export default handler;