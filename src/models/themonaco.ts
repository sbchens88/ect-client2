import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const MoncofuncMain = new eradaniConnect.run.Sql(`select * qgpl.applications`);
export interface MoncofuncInput {}
export type MoncofuncOutputRecord = JSONObject;
export interface MoncofuncOutput extends Array<MoncofuncOutputRecord> {}
