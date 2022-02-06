import { AWSError, Request, S3 } from 'aws-sdk';

export default class AwsS3 {
    private static s3: S3;
    private constructor() {}

    static createS3ServiceObject() {
        this.s3 = new S3({ region: 'ap-northeast-1', apiVersion: '2006-03-01' });
    }

    static async createBucket(bucketName: string): Promise<void> {
        await this.s3.createBucket({ Bucket: bucketName });
        console.log('success create bucket', bucketName);
    }
    static async uploadObject(bucketName: string, key: S3.ObjectKey, data: S3.Body): Promise<void> {
        await this.s3.upload({ Bucket: bucketName, Key: key, Body: data });
        console.log('success upload data to ', bucketName);
    }
    static async getObjects(bucketName: string): Promise<Request<S3.ListObjectsOutput, AWSError>> {
        try {
            const result = await this.s3.listObjects({
                Bucket: bucketName,
            });
            console.log('success get bucket', bucketName);

            return result;
        } catch (err: any) {
            console.error('ERROR:', err);
            return err;
        }
    }
}
