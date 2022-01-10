import express from 'express';

import { Handler } from '../core/handler';

const router = express.Router();

router.get('/', (req, res, next) => {
    const handler = new Handler(req, res);
    return handler.json<string>('hello world!!');
});

export default router;
