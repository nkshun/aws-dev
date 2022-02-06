import { Request, Response } from "express";
import {ErrorCode, SuccessCode} from '../constants/error';

export class Handler {
    public request: Request
    public response: Response
    constructor(private req: Request, private res: Response) {
        this.request = req
        this.response = res
    };

    /**
     * データの送信
     * @param data
     */
    json<T>(data: T): void {
        this.res.json({data: data});
    }

    /**
     * エラーの送信
     * @param error
     */
    error(error: ErrorCode): void {
        this.res.status(error.status).send({error: error});
    }

    /**
     * 正常の送信
     * @param success
     */
     success(success: SuccessCode): void {
        this.res.status(success.status).send({success: success});
    }
}