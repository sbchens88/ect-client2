import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetAppObjectByKeyAMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id = ?`, {
    params: [{ name: 'appId' }]
});
export interface GetAppObjectByKeyAInput {
    appId: string;
}
export type GetAppObjectByKeyAOutputRecord = JSONObject;
export interface GetAppObjectByKeyAOutput extends Array<GetAppObjectByKeyAOutputRecord> {}
