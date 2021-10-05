import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const SomeFuncMain = new eradaniConnect.run.Sql(` select * from QGPL.APPLICATIONS`);
export interface SomeFuncInput {}
export type SomeFuncOutputRecord = JSONObject;
export interface SomeFuncOutput extends Array<SomeFuncOutputRecord> {}
