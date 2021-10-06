import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetAppByIdTestingMain = new eradaniConnect.run.Sql(` select * from qgpl.applications where id = ?`, {
    params: []
});
export interface GetAppByIdTestingInput {}
export type GetAppByIdTestingOutputRecord = JSONObject;
export interface GetAppByIdTestingOutput extends Array<GetAppByIdTestingOutputRecord> {}
