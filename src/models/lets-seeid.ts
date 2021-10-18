import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdasfgbvdfMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface AsdasfgbvdfInput {}
export type AsdasfgbvdfOutputRecord = JSONObject;
export interface AsdasfgbvdfOutput extends Array<AsdasfgbvdfOutputRecord> {}
