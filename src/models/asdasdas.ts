import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwdfghjbvccMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QwdfghjbvccInput {}
export type QwdfghjbvccOutputRecord = JSONObject;
export interface QwdfghjbvccOutput extends Array<QwdfghjbvccOutputRecord> {}
