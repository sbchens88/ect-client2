import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const MncfunssMain = new eradaniConnect.run.Sql(`select * qgpl.applications`);
export interface MncfunssInput {}
export type MncfunssOutputRecord = JSONObject;
export interface MncfunssOutput extends Array<MncfunssOutputRecord> {}
