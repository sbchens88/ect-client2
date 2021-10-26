import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const ApiGenCallMain = new eradaniConnect.run.Sql(`select * from qgpl.applications`);
export interface ApiGenCallInput {}
export type ApiGenCallOutputRecord = JSONObject;
export interface ApiGenCallOutput extends Array<ApiGenCallOutputRecord> {}
