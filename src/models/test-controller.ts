import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetSomeEpDataMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface GetSomeEpDataInput {}
export type GetSomeEpDataOutputRecord = JSONObject;
export interface GetSomeEpDataOutput extends Array<GetSomeEpDataOutputRecord> {}
