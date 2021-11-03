import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const SadfghjkMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface SadfghjkInput {}
export type SadfghjkOutputRecord = JSONObject;
export interface SadfghjkOutput extends Array<SadfghjkOutputRecord> {}
