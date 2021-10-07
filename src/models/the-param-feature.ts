import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetApplicationByIdKeyMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id = ?`, {
    params: [{ name: 'appId' }]
});
export interface GetApplicationByIdKeyInput {
    appId: number;
}
export type GetApplicationByIdKeyOutputRecord = JSONObject;
export interface GetApplicationByIdKeyOutput extends Array<GetApplicationByIdKeyOutputRecord> {}
