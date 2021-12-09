import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdeeeMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface AsdeeeInput {}
export type AsdeeeOutputRecord = JSONObject;
export interface AsdeeeOutput extends Array<AsdeeeOutputRecord> {}
