import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyPaeser from 'body-parser';

import router from '../routes/index';

const app = express();

app.use(helmet());
app.use(cors());

app.use(bodyPaeser.urlencoded({extended: true}));
app.use(bodyPaeser.json());

const port = process.env.PORT || 52666;

app.use('/', router);

app.listen(port);
console.log('listen on port ' + port);
