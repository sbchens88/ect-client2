import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetParamsappIdMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id=?`, {
    params: [{ name: 'appId' }]
});
export interface GetParamsappIdInput {
    appId: number;
}
export type GetParamsappIdOutputRecord = JSONObject;
export interface GetParamsappIdOutput extends Array<GetParamsappIdOutputRecord> {}
