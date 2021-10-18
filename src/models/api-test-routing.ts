import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const GetSomeRandsDatsMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface GetSomeRandsDatsInput {}
export type GetSomeRandsDatsOutputRecord = JSONObject;
export interface GetSomeRandsDatsOutput extends Array<GetSomeRandsDatsOutputRecord> {}
