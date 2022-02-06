import express from 'express';

import { Handler } from '../core/handler';
import postRouter from './postContoroller';

const router = express.Router();

router.get('/', (req, res, next) => {
    const handler = new Handler(req, res);
    return handler.json<string>('hello world!!');
});

router.get('/healthcheck', (req, res, next) => {
    const handler = new Handler(req, res);
    return handler.success({ status: 202, type: '', message: 'healthcheck ok!!' });
});

router.use('/post', postRouter);

export default router;
