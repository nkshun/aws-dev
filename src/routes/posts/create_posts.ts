import { Request, Response } from 'express';
import { Handler } from '../../core/handler';
import S3 from '../../db/s3';
import { createPostRequest } from '../../types/post';

export default class CreatePosts {
    handler: Handler;

    constructor(req: Request, res: Response) {
        this.handler = new Handler(req, res);
    }

    /**
     * メイン処理
     */
    async main() {
        await this.createPosts(this.handler.request.body);
        return this.handler.success({ status: 200, type: '', message: 'create success!' });
    }

    async createPosts(data: createPostRequest): Promise<void> {
        const bucketName: string = 'shunsuke-test-bucket';
        const date = new Date();
        const objectKey: string = `posts/${date.toDateString()}-${date.toTimeString()}`;
        S3.createS3ServiceObject();
        await S3.uploadObject(bucketName, objectKey, data);
    }
}
