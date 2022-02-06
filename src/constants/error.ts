export type ErrorCode = {
    status: number;
    type: string;
    message: string;
}

export type SuccessCode = {
    status: number;
    type: string;
    message: string;
}

/**
 * パラメーターが誤っている場合のエラー
 */
 export const PARAMETER_INVALID: ErrorCode = {
    status: 400,
    type: 'PARAMETER_INVALID',
    message: 'The parameter is invalid.',
  }
