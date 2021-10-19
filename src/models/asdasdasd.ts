import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const AsdytuyguhuycvbyMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface AsdytuyguhuycvbyInput {}
export type AsdytuyguhuycvbyOutputRecord = JSONObject;
export interface AsdytuyguhuycvbyOutput extends Array<AsdytuyguhuycvbyOutputRecord> {}
