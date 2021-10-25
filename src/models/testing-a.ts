import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetSDataMain = new eradaniConnect.run.Sql(
    ` select * from qgpl.applications where name = 'chenTestApplication'`
);
export interface GetSDataInput {}
export type GetSDataOutputRecord = JSONObject;
export interface GetSDataOutput extends Array<GetSDataOutputRecord> {}
