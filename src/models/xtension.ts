import eradaniConnect from '@eradani-inc/eradani-connect';
import { JSONObject } from 'src/types';

export const PsnaidoMain = new eradaniConnect.run.Sql(` select * from qgpl.applications`);
export interface PsnaidoInput {}
export type PsnaidoOutputRecord = JSONObject;
export interface PsnaidoOutput extends Array<PsnaidoOutputRecord> {}
