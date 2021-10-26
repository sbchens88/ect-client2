import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const FunctionMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface FunctionInput {}
export type FunctionOutputRecord = JSONObject;
export interface FunctionOutput extends Array<FunctionOutputRecord> {}
