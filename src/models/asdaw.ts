import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const QwedfscxvMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface QwedfscxvInput {}
export type QwedfscxvOutputRecord = JSONObject;
export interface QwedfscxvOutput extends Array<QwedfscxvOutputRecord> {}
