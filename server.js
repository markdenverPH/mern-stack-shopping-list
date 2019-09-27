import express from 'express';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import items from './routes/api/items';

const app = express();

// BodyParse Middleware
app.use(bodyParser.json());

// DB Config
import { mongoURI as db } from './config/keys';

// Connect to Mongo
// issue 1: https://github.com/typeorm/mongo-typescript-example/issues/1
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`)); // listen to this port