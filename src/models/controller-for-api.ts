import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetUserByUserNameEpMain = new eradaniConnect.run.Sql(` select * from qgpl.whitelist where username = ?`, {
    params: [{ name: 'user' }]
});
export interface GetUserByUserNameEpInput {
    user: string;
}
export type GetUserByUserNameEpOutputRecord = JSONObject;
export interface GetUserByUserNameEpOutput extends Array<GetUserByUserNameEpOutputRecord> {}
