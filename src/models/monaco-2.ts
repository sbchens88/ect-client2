import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const FuncMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface FuncInput {}
export type FuncOutputRecord = JSONObject;
export interface FuncOutput extends Array<FuncOutputRecord> {}
