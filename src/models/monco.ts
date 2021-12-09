import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const MoncofunMain = new eradaniConnect.run.Sql(`select * qgpl.applications`);
export interface MoncofunInput {}
export type MoncofunOutputRecord = JSONObject;
export interface MoncofunOutput extends Array<MoncofunOutputRecord> {}
