import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const SomerandomFunctionMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface SomerandomFunctionInput {}
export type SomerandomFunctionOutputRecord = JSONObject;
export interface SomerandomFunctionOutput extends Array<SomerandomFunctionOutputRecord> {}
