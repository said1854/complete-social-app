import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: 'complete_social_app',
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to database successfully')
    }).catch((err) => {
        console.log(`DB connection err: ${err}`);
    })
}

export default conn;