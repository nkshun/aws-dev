import { Request, Response } from 'express';
import { Handler } from '../../core/handler';
import { PARAMETER_INVALID } from '../../constants/error';
import S3 from '../../db/s3';
import { getPostsResponse } from '../../types/post';

export default class GetPosts {
    handler: Handler;

    constructor(req: Request, res: Response) {
        this.handler = new Handler(req, res);
    }

    /**
     * メイン処理
     */
    async main() {
        const data = await this.getPosts();

        if (!data) {
            return this.handler.error(PARAMETER_INVALID);
        }

        return this.handler.json<getPostsResponse[]>(data);
    }

    async getPosts(): Promise<getPostsResponse[]> {
        const bucketName: string = 'shun-node-test';
        S3.createS3ServiceObject();
        const data = await S3.getObjects(bucketName);
        return data as any;
    }
}
